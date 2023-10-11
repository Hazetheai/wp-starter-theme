import { PlainText } from "@wordpress/block-editor";
import React from "react";

const defaultKeys = {
  title: "title",
  description: "description",
};

const defaultNamespace = "magazin_intro";

type MagazinIntroKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_MagazinIntro {
  interface Props extends MagazinIntroKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends MagazinIntroKeys {}
}

type MagazinIntroProps = {
  (props: BHB_MagazinIntro.Props): JSX.Element;
  Save: React.FC<BHB_MagazinIntro.SaveProps>;
};

const MagazinIntro: MagazinIntroProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="magazin__intro">
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
        className="title text-display-3"
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
        className="description text-copy-3"
      />
    </div>
  );
};

const MagazinIntroSave: React.FC<BHB_MagazinIntro.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="magazin__intro">
      {attributes[namespace][keys.title] && (
        <h2 className="title text-display-3">
          {attributes[namespace][keys.title]}
        </h2>
      )}
      {attributes[namespace][keys.description] && (
        <p className="description text-copy-3">
          {attributes[namespace][keys.description]}
        </p>
      )}
    </div>
  );
};

MagazinIntro.Save = MagazinIntroSave;

export default MagazinIntro;
