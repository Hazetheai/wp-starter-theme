import { MediaPlaceholder } from "@wordpress/block-editor";
import React from "react";
import { __, _x } from "@wordpress/i18n";
import { Button } from "@wordpress/components";

type Props = {
  attributes: Record<string, any>;
  setAttributes: (attributes: any) => void;
  onImageSelect?: (image: any) => void;
  namespace: string;
  accept?: string;
  allowedTypes?: string[];
  keys?: Record<string, any>;
  labels?: Record<string, any>;
  hideUI?: boolean;
};

const EditMedia: React.FC<Props> = ({
  attributes,
  setAttributes,
  onImageSelect = (image) => {},
  namespace,
  accept = "image/*,video/*",
  allowedTypes = ["image", "video"],
  hideUI = false,
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
          <img src={attributes[namespace].image.url} />
          {!hideUI && (
            <Button
              className="button-remove"
              label={_x("Bild entfernen", "button-label", "bhb-bayern")}
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
          )}
        </>
      ) : (
        // @ts-ignore
        <MediaPlaceholder
          labels={labels}
          onSelect={(media) => {
            // console.log("media", media);
            if (!attributes[namespace]) return;
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                image: {
                  url: media.url,
                  id: media.id,
                  height: media.height,
                  width: media.width,
                  orientation: media.orientation,
                },
              },
            });
            onImageSelect(media);
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
