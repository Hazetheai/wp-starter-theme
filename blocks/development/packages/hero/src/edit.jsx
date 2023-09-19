/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  BlockControls,
  InspectorControls,
  PlainText,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import React, { useEffect } from "react";

import "./editor-style.css";

import { DropdownMenu, PanelBody } from "@wordpress/components";

const toolbarControls = (setFn) => [
  {
    title: "",
    icon: () => Icon({ image: null }),
    onClick: () => setFn({ model: { name: "ball", icon: null } }),
  },
];

const Icon = ({ image }) => {
  return image ? (
    <div
      className="icon"
      style={{
        width: "50px",
        height: "50px",
        position: "relative",
        margin: "0 -10px",
      }}
    >
      <img
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
        src={image}
        alt=""
      />
    </div>
  ) : null;
};

export const Breadcrumbs = ({
  root = "Homepage",
  links = [],
  activeLinks = false,
}) => {
  return (
    <div className="breadcrumb-wrapper">
      <h4 className="breadcrumbs link-small">
        {activeLinks ? (
          <a className="crumb root-crumb" href="/" title="Startseite">
            {root}
          </a>
        ) : (
          <span className="crumb root-crumb">{root}</span>
        )}

        {links.map((link) => {
          if (links.length === 0) return null;
          return (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3431 2.92888L17.7071 9.29284C18.0976 9.68336 18.0976 10.3165 17.7071 10.7071L11.3431 17.071C10.9526 17.4615 10.3195 17.4615 9.92893 17.071C9.53841 16.6805 9.53841 16.0473 9.92893 15.6568L14.5858 10.9999H3C2.44772 10.9999 2 10.5522 2 9.99995C2 9.44766 2.44772 8.99995 3 8.99995H14.5858L9.92893 4.34309C9.53841 3.95257 9.53841 3.3194 9.92893 2.92888C10.3195 2.53836 10.9526 2.53836 11.3431 2.92888Z"
                  fill="currentColor"
                />
              </svg>

              {activeLinks || link.currentPage !== true ? (
                <a className="crumb" title={link.title} href={link.url}>
                  {link.title}
                </a>
              ) : (
                <span className="crumb" title={link.title}>
                  {link.title}
                </span>
              )}
            </>
          );
        })}
      </h4>
    </div>
  );
};

export default function Edit({ attributes, setAttributes }) {
  const { title, subtitle, model, background } = attributes;

  const blockProps = useBlockProps({
    className: `module-palette-${background?.name}`,
  });
  const currentPost = useSelect((select) => {
    return select("core/editor").getCurrentPost();
  });

  useEffect(() => {
    setAttributes({
      misc_data: { slug: currentPost.slug, title: currentPost.title },
    });
  }, [currentPost.title, currentPost.slug]);

  return (
    <div key="render" {...blockProps}>
      <div className="block-editor-wrapper block-theme row">
        <InspectorControls>
          <PanelBody title={__("General", "vite-starter")} initialOpen>
            <DropdownMenu
              icon={"buddicons-activity"}
              label="Select a model"
              controls={toolbarControls(setAttributes)}
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <DropdownMenu
            icon={"buddicons-activity"}
            label="Select a model"
            controls={toolbarControls(setAttributes)}
          />
        </BlockControls>

        <div className="flex-col block-theme">
          <img src={model.icon} className="model-image" />
          <Breadcrumbs
            links={[{ url: `/${currentPost.slug}`, title: currentPost.title }]}
          />

          <RichText
            tagName="h1"
            value={title}
            allowedFormats={["vitestarter/highlight"]}
            placeholder={__("Title here", "vite-starter")}
            className="title hero-title top text-h2"
            onChange={(content) =>
              setAttributes({
                title: content,
              })
            }
            style={{ paddingLeft: "25px" }}
          />
          <PlainText
            tagName="p"
            value={subtitle}
            placeholder={__("Subtitle here", "vite-starter")}
            className="subtitle"
            onChange={(content) => setAttributes({ subtitle: content })}
          />
        </div>
      </div>
    </div>
  );
}
