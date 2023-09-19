/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useBlockProps } from "@wordpress/block-editor";
import { formShortcodeMap } from "./index";
import { __ } from "@wordpress/i18n";

export default function Save({ attributes }) {
  let blockProps = useBlockProps.save({
    className: `module-form block-theme container`,
  });

  return (
    <section
      className={`module-form module-palette-${attributes?.background?.name}`}
    >
      <div {...blockProps}>
        <div className="row">
          <div className="col-6">
            <div
              id={`cf7-${attributes.form}-form`}
              className="cf7-form-block"
              dangerouslySetInnerHTML={{
                __html:
                  formShortcodeMap?.[attributes?.form] ||
                  formShortcodeMap["default"],
              }}
              data-form-subjects={JSON.stringify(attributes.subjects)}
            />
          </div>
          <div className="col-6">
            <span className="link-small text-color-alt">
              {__("Telefonnummer", "vite-starter")}
            </span>
            <address className="text-h3 text-color-heading text-h3 text-color-heading">
              {__("0234/6234039", "vite-starter")}
            </address>
            <address className="copy-regular">
              {__("Unsere Telefonzeiten: Mo-Fr 10 – 17 Uhr", "vite-starter")}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
