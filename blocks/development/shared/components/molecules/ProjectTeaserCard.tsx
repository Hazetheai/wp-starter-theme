import { MediaPlaceholder, PlainText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import React from "react";
import Link, { EditLink } from "../atoms/Link";

const defaultKeys = {
  projectLocation: "projectLocation",
  title: "title",
  image: "image",
  link: { title: "title", url: "url" },
};

const defaultNamespace = "project_teaser_card";

type ProjectTeaserCardKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_ProjectTeaserCard {
  interface Props extends ProjectTeaserCardKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends ProjectTeaserCardKeys {}
}

type ProjectTeaserCardProps = {
  (props: BHB_ProjectTeaserCard.Props): JSX.Element;
  Save: React.FC<BHB_ProjectTeaserCard.SaveProps>;
};

const ProjectTeaserCard: ProjectTeaserCardProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${attributes[namespace][keys.image]})` }}
        className="project__teaser-card"
      >
        {/* @ts-ignore */}
        <MediaPlaceholder
          labels={{
            title: "Media",
            instructions: __("Ein Video oder Bild hinzufügen.", "bhb-bayern"),
          }}
          onSelect={(media) => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                [keys.image]: media.url,
              },
            });
          }}
          accept="image/*,video/*"
          allowedTypes={["image", "video"]}
        />
        <div className="project__teaser-card__filter" />
        <div className="project__teaser-card__content">
          <PlainText
            value={attributes[namespace][keys.projectLocation]}
            onChange={(value) =>
              setAttributes({
                ...attributes,
                [namespace]: {
                  ...attributes[namespace],
                  [keys.projectLocation]: value,
                },
              })
            }
            as="span"
            placeholder={placeholder}
            className="kicker text-overline"
          />
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
          />
          <EditLink
            attributes={attributes}
            keys={keys}
            namespace={namespace}
            setAttributes={setAttributes}
          />
        </div>
      </div>
    </>
  );
};
const ProjectTeaserCardSave: React.FC<BHB_ProjectTeaserCard.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${attributes[namespace]?.image?.url})` }}
      className="project__teaser-card"
    >
      <div className="project__teaser-card__filter" />
      <div className="project__teaser-card__content">
        <span className="kicker text-overline">
          {attributes[namespace][keys.projectLocation]}
        </span>
        <h2 className="title text-headlines-h3--deco">
          {attributes[namespace][keys.title]}
        </h2>
        {attributes[namespace][keys.link.url] && (
          <Link
            className="link overlay-link"
            href={attributes[namespace][keys.link.url]}
            text={attributes[namespace][keys.link.title]}
            level="secondary-alt"
          />
        )}
      </div>
    </div>
  );
};

ProjectTeaserCard.Save = ProjectTeaserCardSave;

export default ProjectTeaserCard;
