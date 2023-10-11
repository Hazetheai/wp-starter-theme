import { PlainText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React, { useEffect } from "react";
import { BHB_Category, BHB_Post } from "../../wp-types";
import Link from "../atoms/Link";

const defaultKeys = {
  title: "title",
  backLink: { url: "url", title: "title" },
  category: "category",
  date: "date",
};

const defaultNamespace = "magazin_article_header";

type MagazinArticleHeaderKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_MagazinArticleHeader {
  interface Props extends MagazinArticleHeaderKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends MagazinArticleHeaderKeys {}
}

type MagazinArticleHeaderProps = {
  (props: BHB_MagazinArticleHeader.Props): JSX.Element;
  Save: React.FC<BHB_MagazinArticleHeader.SaveProps>;
};

const MagazinArticleHeader: MagazinArticleHeaderProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  const currentPost: BHB_Post = useSelect((select) => {
    // @ts-ignore
    return select("core/editor").getCurrentPost();
  }, []);

  const categories: Array<BHB_Category> | null = useSelect((select) => {
    // @ts-ignore
    return select("core").getEntityRecords("taxonomy", "category", {
      per_page: -1,
    });
  }, []);

  const firstCategory = categories?.find(
    (category) => category.id === currentPost.categories?.[0]
  );
  const postDate = new Date(currentPost.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    if (categories && firstCategory && keys?.category && keys?.date) {
      setAttributes({
        ...attributes,
        [namespace]: {
          ...attributes[namespace],
          [keys.category]: firstCategory?.name,
          [keys.date]: postDate,
        },
      });
    }
  }, [currentPost]);
  return (
    <section className="magazin__article-header">
      {/* <div className="magazin__article-header__backlink">
        <Link
          level="secondary"
          reverse
          // TODO Make Dynamic
          href={"/magazin"}
          text={__("Alle Artikel", "bhb-bayern")}
        />
      </div> */}

      <PlainText
        value={attributes[namespace][keys.title]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: {
              ...attributes[namespace],
              [keys.title]: value,
            },
          })
        }
        as="h2"
        placeholder={placeholder}
        className="title text-headlines-h1"
      />
      <div className="magazin__article-header__meta text-overline">
        {firstCategory?.name && (
          <span className="category">{firstCategory?.name}</span>
        )}
        <span className="separator show-for-tablet">|</span>
        <span className="date">{postDate}</span>
      </div>
    </section>
  );
};
const MagazinArticleHeaderSave: React.FC<
  BHB_MagazinArticleHeader.SaveProps
> = ({ attributes, keys = defaultKeys, namespace = defaultNamespace }) => {
  return (
    <section className="magazin__article-header">
      <div className="magazin__article-header__backlink">
        <Link
          level="secondary"
          reverse
          // TODO Make Dynamic
          href={"/magazin"}
          text={__("Alle Artikel", "bhb-bayern")}
        />
      </div>
      <h2 className="title text-headlines-h1">
        {attributes[namespace][keys.title]}
      </h2>
      {[attributes]?.[namespace]?.[keys.category] && (
        <div className="magazin__article-header__meta text-overline">
          <span className="category">
            {[attributes][namespace][keys?.category]}
          </span>
          <span className="separator show-for-tablet">|</span>
          <span className="date">{[attributes][namespace][keys?.date]}</span>
        </div>
      )}
    </section>
  );
};

MagazinArticleHeader.Save = MagazinArticleHeaderSave;

export default MagazinArticleHeader;
