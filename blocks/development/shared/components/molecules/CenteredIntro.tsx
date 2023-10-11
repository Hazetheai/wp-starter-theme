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

// type Props = {
//   overline: string;
//   description: string;
//   subline?: string;
//   link?: {
//     url: string;
//     title: string;
//   };
// };

// description = `Nachhaltigkeit. Individualität. Kreativität. Das sind die Stützpfeiler, die unseren Bauprojekten das Besondere verleihen.
// Fest im jeweiligen Standort verwurzelt, entwickeln wir visionäre Neubauimmobilien mit Flair und viel Raum für die Gemeinschaft – und für Sie. Lernen wir uns kennen!`,
// overline = "bauen mit herzblut",
// link,
// subline,

const defaultKeys = {
  overline: "overline",
  description: "description",
  subline: "subline",
  link: { title: "title", url: "url" },
};

const defaultNamespace = "centered_intro";

type CenteredIntroKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_CenteredIntro {
  interface Props extends CenteredIntroKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends CenteredIntroKeys {}
}

type CenteredIntroProps = {
  (props: BHB_CenteredIntro.Props): JSX.Element;
  Save: React.FC<BHB_CenteredIntro.SaveProps>;
};

const CenteredIntro: CenteredIntroProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="centered__intro">
      {/* <h4 className="overline text-overline">{overline}</h4> */}
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
        as="p"
        placeholder={placeholder}
        className="overline text-overline"
      />
      {/* <h3 className="description text-copy-2">{description}</h3> */}
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
        className="description text-copy-2"
      />
      {/* {subline && <p className="subline text-copy-3">{subline}</p>} */}
      <PlainText
        value={attributes[namespace][keys.subline]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: {
              ...attributes[namespace],
              [keys.subline]: value,
            },
          })
        }
        as="p"
        placeholder={placeholder}
        className="subline text-copy-3"
      />
      {/* {link && <Link href={link.url} text={link.title} level="primary" />} */}
      <EditLink
        attributes={attributes}
        keys={keys}
        namespace={namespace}
        setAttributes={setAttributes}
      />
    </div>
  );
};

const CenteredIntroSave: React.FC<BHB_CenteredIntro.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="centered__intro">
      {attributes[namespace][keys.overline] && (
        <h4 className="overline text-overline">
          {attributes[namespace][keys.overline]}
        </h4>
      )}
      {attributes[namespace][keys.description] && (
        <h3 className="description text-copy-2">
          {attributes[namespace][keys.description]}
        </h3>
      )}
      {attributes[namespace][keys.subline] && (
        <p className="subline text-copy-3">
          {attributes[namespace][keys.subline]}
        </p>
      )}
      {attributes[namespace][keys.link.url] && (
        <Link
          href={attributes[namespace][keys.link.url]}
          text={attributes[namespace][keys.link.title]}
          level="primary"
        />
      )}
    </div>
  );
};

CenteredIntro.Save = CenteredIntroSave;

export default CenteredIntro;
