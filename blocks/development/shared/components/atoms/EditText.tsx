import { PlainText, RichText } from "@wordpress/block-editor";
import React from "react";

type Props = {
  attributes: Record<string, any>;
  setAttributes: (attributes: any) => void;
  namespace: string;
  type?: "plain" | "rich";
  keys: Record<string, any>;
};

const EditText: React.FC<Props> = ({
  attributes,
  setAttributes,
  namespace,
  type = "plain",
  keys = { text: "text" },
}) => {
  return (
    <div className="edit-image">
      {type === "plain" ? (
        <PlainText
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
