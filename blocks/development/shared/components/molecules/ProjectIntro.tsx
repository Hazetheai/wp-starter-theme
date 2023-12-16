import { PlainText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import React from "react";

const defaultKeys = {
  title: { top: "top", bottom: "bottom" },
  subtitle: "subtitle",
};

const defaultNamespace = "project_intro";

type ProjectIntroKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_ProjectIntro {
  interface Props extends ProjectIntroKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends ProjectIntroKeys {}
}

type ProjectIntroProps = {
  (props: BHB_ProjectIntro.Props): JSX.Element;
  Save: React.FC<BHB_ProjectIntro.SaveProps>;
};

const ProjectIntro: ProjectIntroProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="project__intro">
      <h1 className="title text-display-3">
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
          as="span"
          placeholder={__(keys.title.top, "bhb-bayern")}
          className="title__top"
        />

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
          as="span"
          placeholder={__(keys.title.bottom, "bhb-bayern")}
          className="title__bottom text-display-3--strong"
        />
      </h1>

      <PlainText
        value={attributes[namespace][keys.subtitle]}
        onChange={(value) =>
          setAttributes({
            ...attributes,
            [namespace]: {
              ...attributes[namespace],
              [keys.subtitle]: value,
            },
          })
        }
        as="h2"
        placeholder={__(keys.subtitle, "bhb-bayern")}
        className="title text-copy-2"
      />
    </div>
  );
};

const ProjectIntroSave: React.FC<BHB_ProjectIntro.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="project__intro">
      <div className="project__intro">
        {attributes[namespace][keys.title.top] ||
          (attributes[namespace][keys.title.bottom] && (
            <h1 className="title text-display-3">
              <span className="title__top">
                {attributes[namespace][keys.title.top]}
              </span>
              <span className="title__bottom text-display-3--strong">
                {attributes[namespace][keys.title.bottom]}
              </span>
            </h1>
          ))}
        {attributes[namespace][keys.subtitle] && (
          <h2 className="title text-copy-2">
            {attributes[namespace][keys.subtitle]}
          </h2>
        )}
      </div>
    </div>
  );
};

ProjectIntro.Save = ProjectIntroSave;

export default ProjectIntro;
