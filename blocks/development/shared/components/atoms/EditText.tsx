import { PlainText, RichText } from "@wordpress/block-editor";
import React from "react";

type Props = {
  attributes: Record<string, any>;
  setAttributes: (attributes: any) => void;
  namespace: string;
  type?: "plain" | "rich";
  keys: Record<string, any>;
  rest: any;
  hideUI?: boolean;
};

const EditText: React.FC<Props> = ({
  attributes,
  setAttributes,
  namespace,
  type = "richText",
  keys = { text: "text" },
  hideUI = false,
  ...rest
}) => {
  return (
    <div className="edit-text">
      {type === "plain" ? (
        <PlainText
          disabled={hideUI}
          {...rest}
          value={attributes[namespace]?.[keys.text]}
          onChange={(text) =>
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                text,
              },
            })
          }
        />
      ) : (
        <RichText
          {...rest}
          disabled={hideUI}
          value={attributes[namespace]?.[keys.text]}
          onChange={(text) =>
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                text,
              },
            })
          }
        />
      )}
    </div>
  );
};

export { EditText };

// export default Image
