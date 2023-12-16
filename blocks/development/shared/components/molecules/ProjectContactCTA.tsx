import {
  // @ts-ignore
  __experimentalLinkControl as LinkControl,
  PlainText,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import React from "react";
import Link, { EditLink } from "../atoms/Link";
import { Button } from "@wordpress/components";

const defaultKeys = {
  title: "title",
  link: { title: "title", url: "url" },
};

const defaultNamespace = "centered_intro";

type ProjectContactKeys = {
  keys: typeof defaultKeys;
  namespace: string;
  attributes: Record<string, any>;
};
declare namespace BHB_ProjectContact {
  interface Props extends ProjectContactKeys {
    placeholder?: string;
    setAttributes?: (value: any) => void;
  }
  interface SaveProps extends ProjectContactKeys {}
}

type ProjectContactProps = {
  (props: BHB_ProjectContact.Props): JSX.Element;
  Save: React.FC<BHB_ProjectContact.SaveProps>;
};

const ProjectContactCTA: ProjectContactProps = ({
  attributes,
  keys = defaultKeys,
  setAttributes = (attributes) => attributes,
  placeholder = "Text Hier einfügen",
  namespace = defaultNamespace,
}) => {
  return (
    <div className="project__contact-cta">
      <div className="project__contact-cta__content flex flex-center">
        <PlainText
          value={attributes[namespace][keys.title]}
          onChange={(value) =>
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                [keys.title]: value,
              },
            })
          }
          as="h2"
          placeholder={placeholder}
          className="title text-copy-2"
        />

        <EditLink
          attributes={attributes}
          keys={keys}
          namespace={namespace}
          setAttributes={setAttributes}
        />
      </div>
    </div>
  );
};

const ProjectContactSave: React.FC<BHB_ProjectContact.SaveProps> = ({
  attributes,
  keys = defaultKeys,
  namespace = defaultNamespace,
}) => {
  return (
    <div className="project__contact-cta">
      <div className="project__contact-cta__content">
        <h2 className="title text-copy-2">
          {attributes[namespace][keys.title]}
        </h2>
        <Link
          href={attributes[namespace]?.link?.url}
          text={attributes[namespace]?.link?.title}
          level="primary"
        />
      </div>
    </div>
  );
};

ProjectContactCTA.Save = ProjectContactSave;

export default ProjectContactCTA;
