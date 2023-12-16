import { PlainText } from "@wordpress/block-editor";
import React from "react";
import Link, { EditLink } from "../atoms/Link";

// type Props = {
//   title: string;
//   description: string;
//   link: {
//     url: string;
//     title: string;
//   };
// };
// title = "Section",
// description = "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
// link = { title: "Zur Übersicht", url: "0#" },

const defaultKeys = {
  description: "description",
  link: { title: "title", url: "url" },
  title: "title",
};

const defaultNamespace = "section_intro";

type SectionIntroKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_SectionIntro {
  interface Props extends SectionIntroKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends SectionIntroKeys {}
}

type SectionIntroProps = {
  (props: BHB_SectionIntro.Props): JSX.Element;
  Save: React.FC<BHB_SectionIntro.SaveProps>;
};

const SectionIntro: SectionIntroProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="section__intro">
      {/* <h2 className="title text-headlines-h1">{title}</h2> */}
      <PlainText
        value={attributes[namespace][keys.title]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: { ...attributes[namespace], [keys.title]: value },
          })
        }
        as="h2"
        placeholder={placeholder}
        className="title text-headlines-h1"
      />
      <div className="section__intro__content">
        {/* <p className="text-copy-2">{description}</p> */}
        <PlainText
          value={attributes[namespace][keys.description]}
          onChange={(value) =>
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                [keys.description]: value,
              },
            })
          }
          as="p"
          placeholder={placeholder}
          className="text-copy-2"
        />
        <EditLink
          attributes={attributes}
          keys={keys}
          namespace={namespace}
          setAttributes={setAttributes}
        />
      </div>
    </div>
  );
};
const SectionIntroSave: React.FC<BHB_SectionIntro.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="section__intro">
      <h2 className="title text-headlines-h1">
        {attributes[namespace][keys.title]}
      </h2>
      <div className="section__intro__content">
        {attributes[namespace][keys.description] && (
          <p className="text-copy-2">
            {attributes[namespace][keys.description]}
          </p>
        )}
        {attributes[namespace][keys.link.url] && (
          <Link
            href={attributes[namespace][keys.link.url]}
            text={attributes[namespace][keys.link.title]}
            level="secondary"
          />
        )}
      </div>
    </div>
  );
};

SectionIntro.Save = SectionIntroSave;

export default SectionIntro;
