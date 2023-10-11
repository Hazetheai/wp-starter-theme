import React from "react";
import Link, { EditLink } from "../atoms/Link";
import {
  MediaPlaceholder,
  PlainText,
  // @ts-ignore
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";
import { EditMedia } from "../atoms/Image";

const defaultKeys = {
  title: "title",
  overline: "overline",
  image: "image",
  description: "description",
  link: { title: "title", url: "url" },
};

const defaultNamespace = "partner_card";

type PartnerCardKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_PartnerCard {
  interface Props extends PartnerCardKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends PartnerCardKeys {}
}

type PartnerCardProps = {
  (props: BHB_PartnerCard.Props): JSX.Element;
  Save: React.FC<BHB_PartnerCard.SaveProps>;
};

const PartnerCard: PartnerCardProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <>
      <div className="partner__card">
        <div className="partner__card__title-wrapper flex flex-col">
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
            className="title text-headlines-h3--deco"
          />{" "}
          <PlainText
            value={attributes[namespace][keys.overline]}
            onChange={(value) =>
              setAttributes({
                ...attributes,
                [namespace]: {
                  ...attributes[namespace],
                  [keys.overline]: value,
                },
              })
            }
            as="span"
            placeholder={placeholder}
            className="kicker text-overline"
          />
        </div>
        <EditMedia
          attributes={attributes}
          setAttributes={setAttributes}
          keys={keys}
          namespace={namespace}
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
          as="span"
          placeholder={placeholder}
          className="description text-copy-3"
        />
        <EditLink
          attributes={attributes}
          setAttributes={setAttributes}
          keys={keys}
          namespace={namespace}
        />
      </div>
    </>
  );
};
const PartnerCardSave: React.FC<BHB_PartnerCard.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  console.log("attributes", attributes[namespace]);
  return (
    <div className="partner__card">
      <div className="partner__card__title-wrapper">
        <h2 className="title text-headlines-h3--deco">
          {attributes[namespace][keys.title]}
        </h2>
        <span className="kicker text-overline">
          {attributes[namespace][keys.overline]}
        </span>
      </div>
      <div className="partner__card__image">
        <img
          src={attributes[namespace]?.image?.url}
          alt={attributes[namespace][keys.title]}
        />
      </div>
      <div className="partner__card__content">
        {attributes[namespace][keys.description] && (
          <p className="description text-copy-3">
            {attributes[namespace][keys.description]}
          </p>
        )}
        {attributes[namespace]?.link?.url && (
          <Link
            className="link overlay-link"
            href={attributes[namespace]?.link?.url}
            text={attributes[namespace]?.link?.title}
            level="secondary-alt"
          />
        )}
      </div>
    </div>
  );
};

PartnerCard.Save = PartnerCardSave;

export default PartnerCard;
