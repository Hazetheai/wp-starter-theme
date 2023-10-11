import React from "react";
import classnames from "classnames";
import {
  PlainText,
  // @ts-ignore
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

interface LinkProps {
  level?:
    | "basic"
    | "primary"
    | "secondary"
    | "secondary-alt"
    | "external"
    | "main"
    | "main-short"
    | "meta"
    | "footer"
    | "sub"
    | "copy"
    | "image";
  text?: string;
  textStyle?:
    | "button"
    | "navigation"
    | "navigation-new"
    | "meta"
    | "footer"
    | "navigation-strong"
    | "copy";
  disabled?: boolean;
  reverse?: boolean;
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  level = "secondary",
  text = "",
  textStyle = "button",
  disabled = false,
  reverse = false,
  href = "0#",
  external = false,
  children,
  className,
  ...rest
}) => {
  const target = external ? "_blank" : "_self";
  const cn = classnames(
    {
      "link--basic": level === "basic",
    },
    {
      "link link--primary-button text-button":
        level === "primary" && textStyle === "button",
    },
    {
      "link link--primary-button text-button disabled":
        level === "primary" && textStyle === "button" && disabled,
    },
    {
      "link link--secondary text-button":
        level === "secondary" && textStyle === "button",
    },
    {
      "link link--secondary text-button reverse":
        level === "secondary" && textStyle === "button" && reverse,
    },
    {
      "link link--secondary-alt text-button ":
        level === "secondary-alt" && textStyle === "button",
    },
    {
      "link link--external text-button":
        level === "external" && textStyle === "button",
    },
    {
      "link link--main text-links-navigation":
        level === "main" && textStyle === "navigation",
    },
    {
      "link link--main text-links-navigation":
        level === "main" && textStyle === "navigation",
    },
    {
      "link link--main--short text-links-navigation":
        level === "main-short" && textStyle === "navigation",
    },
    {
      "link link--main text-links-navigation--new text-white":
        level === "main" && textStyle === "navigation-new",
    },
    {
      "link link--meta text-links-meta":
        level === "meta" && textStyle === "meta",
    },
    { "link text-links-meta": level === "footer" && textStyle === "footer" },
    {
      "link link--sub text-links-navigation--strong":
        level === "sub" && textStyle === "navigation-strong",
    },
    { "link link--copy text-copy-3": level === "copy" && textStyle === "copy" },
    { "link link--image ": level === "image" }
  );

  return (
    <a
      {...rest}
      className={classnames(cn, className)}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      // disabled={disabled}
      href={href}
    >
      {text || children}
      {level === "secondary" && !reverse && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
        >
          <path d="M0 6.5H16M16 6.5L10 12.5M16 6.5L10 0.5" stroke="#708573" />
        </svg>
      )}
      {level === "secondary" && reverse && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
        >
          <path d="M0 6.5H16M16 6.5L10 12.5M16 6.5L10 0.5" stroke="#708573" />
        </svg>
      )}
      {external && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M1 10L10.0001 0.999969M10.0001 0.999969H1.51005M10.0001 0.999969V9.48997"
            stroke="#708573"
          />
        </svg>
      )}
    </a>
  );
};

type Props = {
  attributes: Record<string, any>;
  setAttributes: (attributes: any) => void;
  namespace: string;
  keys: Record<string, any>;
  suggestionsQuery?: Record<"type", any>;
  settings?: Array<{ id: string; title: string }>;
};

const EditLink: React.FC<Props> = ({
  attributes,
  setAttributes,
  namespace,
  suggestionsQuery = {},
  settings = [],
  keys,
}) => {
  return (
    <div className="edit-link flex">
      <div className="flex flex-col">
        <h4>{__("Bearbeiten Sie den Hyperlink", "bhb-bayern")}</h4>
        <PlainText
          value={attributes[namespace]?.link?.title}
          style={{
            padding: "0 1rem",
            border: "2px solid var(--color-theme-primary-green-dark)",
          }}
          onChange={(value) => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                link: { ...attributes[namespace]?.link, title: value },
              },
            });
          }}
        />
        <LinkControl
          searchInputPlaceholder={__("Suche hier...", "bhb-bayern")}
          value={attributes[namespace]["link"]}
          settings={[
            {
              id: "opensInNewTab",
              title: "In einem neuen Browser-Tab öffnen?",
            },
          ].concat(settings)}
          onChange={(value: any) => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                link: {
                  ...value,
                  title: attributes[namespace]?.link?.title || value.title,
                },
              }, //[keys.link.title]: value.title, [keys.link.url]: value.url,
            });
          }}
          suggestionsQuery={suggestionsQuery}
        />
      </div>
      {attributes[namespace]?.link?.url && (
        <Button
          variant="primary"
          isDestructive
          onClick={() => {
            setAttributes({
              ...attributes,
              [namespace]: {
                ...attributes[namespace],
                link: { [keys.link.title]: "", [keys.link.url]: "" },
              }, //[keys.link.title]: value.title, [keys.link.url]: value.url,
            });
          }}
          icon={"remove"}
        />
      )}
    </div>
  );
};

export { EditLink };

export default Link;
