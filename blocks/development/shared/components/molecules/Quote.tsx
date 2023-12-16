import { PlainText, RichText } from "@wordpress/block-editor";
import React from "react";
import { __ } from "@wordpress/i18n";

const defaultKeys = { author: "author", content: "content" };
const defaultNamespace = "quote";

type QuoteKeys = {
  keys: { content: string; author: string };
  namespace: string;
  attributes?: any;
};
declare namespace BHB_Quote {
  interface Props extends QuoteKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends QuoteKeys {}
}

type QuoteProps = {
  (props: BHB_Quote.Props): JSX.Element;
  Save: React.FC<BHB_Quote.SaveProps>;
};

const Quote: QuoteProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = () => {},
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <figure className="quote">
      <RichText
        placeholder={placeholder}
        value={attributes[namespace][keys.content]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: { ...attributes[namespace], [keys.content]: value },
          })
        }
        tagName="blockquote"
        className="title text-display-3"
      />

      <PlainText
        value={attributes[namespace][keys.author]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: { ...attributes[namespace], [keys.author]: value },
          })
        }
        as="figcaption"
        className="description text-copy-2"
        placeholder={__("Autor", "bhb-bayern")}
      />
    </figure>
  );
};

const QuoteSave: React.FC<BHB_Quote.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <figure className="quote">
      {attributes[namespace][keys.author] && (
        <figcaption className="quote__author text-copy-2">
          {attributes[namespace][keys.author]}
        </figcaption>
      )}
      <RichText.Content
        value={attributes[namespace][keys.content]}
        tagName="blockquote"
        className="title text-copy-1"
      />
    </figure>
  );
};

Quote.Save = QuoteSave;
export default Quote;
