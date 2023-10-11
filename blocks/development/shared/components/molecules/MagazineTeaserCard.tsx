import React from "react";
import Link, { EditLink } from "../atoms/Link";
import classNames from "classnames";
import Icon from "../atoms/Icon";
import { ToggleControl, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  PlainText, // @ts-ignore
  __experimentalLinkControl as LinkControl,
  MediaPlaceholder,
} from "@wordpress/block-editor";
import { EditMedia } from "../atoms/Image";

const defaultKeys = {
  description: "description",
  image: "image",
  link: { title: "title", url: "url" },
  title: "title",
  large: "large",
};

const defaultNamespace = "magazin_teaser_card";

type MagazineTeaserCardKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_MagazineTeaserCard {
  interface Props extends MagazineTeaserCardKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends MagazineTeaserCardKeys {}
}

type MagazineTeaserCardProps = {
  (props: BHB_MagazineTeaserCard.Props): JSX.Element;
  Save: React.FC<BHB_MagazineTeaserCard.SaveProps>;
};

const MagazineTeaserCard: MagazineTeaserCardProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div
      className={classNames(
        "magazine__teaser-card",
        attributes[namespace][keys.large] && "magazine__teaser-card--lg"
      )}
    >
      <div className="magazine__teaser-card__image">
        <EditMedia
          attributes={attributes}
          setAttributes={setAttributes}
          keys={keys}
          namespace={namespace}
        />
        <ToggleControl
          label={__("Große Karte?", "bhb-bayern")}
          help={__(
            "Normal = 4 Spalten auf dem Desktop | Groß = 5 Spalten auf dem Desktop",
            "bhb-bayern"
          )}
          checked={attributes[namespace][keys.large]}
          onChange={(value) => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                [keys.large]: value,
              },
            });
          }}
        />
      </div>
      <div className="magazine__teaser-card__content">
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
          className="title text-headlines-h4"
        />
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
          className="text-copy-3"
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
const MagazineTeaserCardSave: React.FC<BHB_MagazineTeaserCard.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div
      className={classNames(
        "magazine__teaser-card",
        attributes[namespace][keys.large] && "magazine__teaser-card--lg"
      )}
    >
      <div className="magazine__teaser-card__image">
        <Link level="image" href={attributes[namespace][keys.link.url]}>
          <img src={attributes[namespace]?.image?.url} alt="Magazine Teaser" />
        </Link>
      </div>
      <div className="magazine__teaser-card__content">
        <h2 className="title text-headlines-h4 hide-for-desktop">
          {attributes[namespace][keys.title]}
        </h2>
        <Link
          href={attributes[namespace][keys.link.url]}
          level="basic"
          className="show-for-desktop"
        >
          <div className="flex">
            <h2 className="title text-headlines-h4">
              {attributes[namespace][keys.title]}
            </h2>
            <Icon className="show-for-desktop" type="extended-right-desktop" />
            <Icon className="hide-for-desktop" type="extended-right-mobile" />
          </div>
        </Link>
        <p className="text-copy-3">{attributes[namespace][keys.description]}</p>
        <Link
          href={attributes[namespace][keys.link.url]}
          text={attributes[namespace][keys.link.title]}
          level="secondary"
          className="hide-for-desktop"
        />
      </div>
    </div>
  );
};

MagazineTeaserCard.Save = MagazineTeaserCardSave;

export default MagazineTeaserCard;
