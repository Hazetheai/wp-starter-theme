import React from "react";
import Link from "../atoms/Link";
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
//   title: string;
//   description: string;
//   overline: string;
// };
// title = "Section",
// description = "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
// overline = "Lorem",

const defaultKeys = {
  description: "description",
  overline: "overline",
  title: { top: "top", bottom: "bottom" },
  style: "style",
};

const defaultNamespace = "copy_block";

type CopyBlockKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_CopyBlock {
  interface Props extends CopyBlockKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends CopyBlockKeys {}
}

type CopyBlockProps = {
  (props: BHB_CopyBlock.Props): JSX.Element;
  Save: React.FC<BHB_CopyBlock.SaveProps>;
};

const CopyBlock: CopyBlockProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="copy-block">
      <ToggleControl
        label={__("Rich Text?", "bhb-bayern")}
        checked={attributes[namespace][keys.style] === "rich"}
        onChange={(value) => {
          setAttributes({
            ...attributes,
            [namespace]: {
              ...attributes[namespace],
              [keys.style]: value ? "rich" : "simple",
            },
          });
        }}
      />
      <div className="copy-block__content">
        {attributes[namespace][keys.style] === "simple" && (
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
            className="title text-overline"
          />
        )}
        {attributes[namespace][keys.style] === "rich" && (
          <PlainText
            value={attributes[namespace][keys.title.top]}
            onChange={(value) =>
              setAttributes({
                ...attributes,
                [namespace]: {
                  ...attributes[namespace],
                  [keys.title.top]: value,
                },
              })
            }
            as="h2"
            placeholder={placeholder}
            className="title text-headlines-h2--strong top"
          />
        )}
        <PlainText
          value={attributes[namespace][keys.title.bottom]}
          onChange={(value) =>
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                [keys.title.bottom]: value,
              },
            })
          }
          as="h2"
          placeholder={placeholder}
          className={classNames(
            "title",
            attributes[namespace][keys.style] === "rich"
              ? "text-headlines-h4"
              : "text-headlines-h2--strong",
            "bottom"
          )}
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
          className="text-copy-2"
        />
      </div>
    </div>
  );
};
const CopyBlockSave: React.FC<BHB_CopyBlock.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="copy-block">
      {attributes[namespace][keys.style] === "simple" && (
        <span className="overline text-overline">
          {attributes[namespace][keys.overline]}
        </span>
      )}

      {attributes[namespace][keys.title.bottom] && (
        <h2 className="title ">
          {attributes[namespace][keys.style] === "rich" && (
            <span className="title text-headlines-h2--strong">
              {attributes[namespace][keys.title.top]}
            </span>
          )}
          <span className="text-headlines-h2">
            {attributes[namespace][keys.title.bottom]}
          </span>
        </h2>
      )}
      {attributes[namespace][keys.description] && (
        <div className="copy-block__content">
          <p className="text-copy-2">
            {attributes[namespace][keys.description]}
          </p>
        </div>
      )}
    </div>
  );
};

CopyBlock.Save = CopyBlockSave;

export default CopyBlock;
