import { MediaPlaceholder } from "@wordpress/block-editor";
import React from "react";
import { __ } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

type Props = {
  attributes: Record<string, any>;
  setAttributes: (attributes: any) => void;
  namespace: string;
  accept?: string;
  allowedTypes?: string[];
  keys: Record<string, any>;
  labels?: Record<string, any>;
};

const EditMedia: React.FC<Props> = ({
  attributes,
  setAttributes,
  namespace,
  accept = "image/*,video/*",
  allowedTypes = ["image", "video"],
  labels = {
    title: "Media",
    instructions: __("Ein Video oder Bild hinzufügen.", "bhb-bayern"),
  },
  keys,
}) => {
  return (
    <div className="edit-image">
      {attributes[namespace]?.image?.url ? (
        <>
          <img src={attributes[namespace]?.image?.url} />
          <Button
            className="button-remove"
            isDestructive
            variant="primary"
            onClick={() =>
              setAttributes({
                ...attributes,
                [namespace]: {
                  ...attributes[namespace],
                  image: { url: "", id: "" },
                },
              })
            }
            icon={"remove"}
          />
        </>
      ) : (
        // @ts-ignore
        <MediaPlaceholder
          labels={labels}
          onSelect={(media) => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                image: { url: media.url, id: media.id },
              },
            });
          }}
          accept={accept}
          allowedTypes={allowedTypes}
        />
      )}
    </div>
  );
};

export { EditMedia };

// export default Image
