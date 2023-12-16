/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  BlockControls,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import { ColorPalette, PanelBody, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import "../../../shared/editor-style.scss";
import { colors } from "../../../shared/lib";
import "./editor-style.css";
import TableControls from "../../../shared/components/atoms/TableControls";
import Link from "../../../shared/components/atoms/Link";
import FormField from "../../../shared/components/atoms/FormField";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background } = attributes;

  const blockProps = useBlockProps({
    className: `module-palette-${background?.name}`,
  });

  const onChangeColor = (value) => {
    setAttributes({
      ...attributes,
      background: {
        color: value,
        name: Object.keys(colors).find((el) => colors[el] === value),
      },
    });
  };

  return (
    <div key="render" {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("General", "bhb-bayern")} initialOpen>
          {/* <ColorPalette
            colors={Object.keys(colors).map((el) => ({
              name: el,
              color: colors[el],
            }))}
            value={background.color}
            style={{ width: "200px" }}
            onChange={onChangeColor}
            disableCustomColors={true}
          /> */}
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup>{/* Block controls */}</ToolbarGroup>
      </BlockControls>
      <div className="flex-col" style={{ gap: "32px" }}>
        <h2>Links</h2>
        <Link level="primary" href="https://www.bhb.de" text="Primary Link" />
        <Link
          level="primary"
          href="https://www.bhb.de"
          text="Primary Link Disabled"
          disabled
        />
        <Link
          level="secondary"
          href="https://www.bhb.de"
          text="Secondary Link"
        />
        <Link
          level="secondary"
          href="https://www.bhb.de"
          text="Secondary Link"
          reverse
        />
        <Link
          level="secondary-alt"
          href="https://www.bhb.de"
          text="Secondary Link"
        />
        <Link
          level="external"
          href="https://www.bhb.de"
          text="External Link"
          external
        />
        <Link
          level="main"
          href="https://www.bhb.de"
          text="Main Navigation Link"
          textStyle="navigation"
        />
        <Link
          level="main-short"
          href="https://www.bhb.de"
          text="Main Navigation Link"
          textStyle="navigation"
        />
        <Link
          level="main"
          href="https://www.bhb.de"
          text="Main Navigation Link"
          textStyle="navigation-new"
        />
        <Link
          level="meta"
          href="https://www.bhb.de"
          text="Meta Link"
          textStyle="meta"
        />
        <footer>
          <Link
            level="footer"
            href="https://www.bhb.de"
            text="Footer Link"
            textStyle="footer"
          />
        </footer>
        <Link
          level="sub"
          href="https://www.bhb.de"
          text="Meta Link"
          textStyle="navigation-strong"
        />
        <Link
          level="copy"
          href="https://www.bhb.de"
          text="Copy Link"
          textStyle="copy"
        />
      </div>
      <div className="flex">
        <h2>Table Controls</h2>
        <TableControls
          id="table-controls-filter-1"
          type="filter"
          text="Alle"
          items={[
            {
              label: "Item 1",
              value: "item-1",
            },
            {
              label: "Item 2",
              value: "item-2",
            },
            {
              label: "Item 3",
              value: "item-3",
            },
          ]}
        />
        <div className="table-filter">
          <TableControls
            id="table-controls-filter-2"
            controlType="filter-button"
            text="Filter Löschen"
            buttonProps={{
              type: "submit",
              className: "button--admin is higher specificity",
            }}
          />
          <TableControls
            id="table-controls-filter-3"
            controlType="filter-button"
            text="Filter Löschen Disabled"
            disabled
            buttonProps={{
              type: "submit",
              className: "button--admin is higher specificity",
            }}
          />
        </div>
      </div>
      <Link level="image" href="https://www.bhb.de">
        <img src="/wp-content/themes/bhb-bayern/figma-exports/linked-image.png" />
      </Link>
      <h2>Forms</h2>
      <form>
        <ul class="form-controls">
          <FormField
            fieldType="text"
            inputMode="text"
            inputType="text"
            label="Name*"
            name="name"
            placeholder="Name"
            required
          />
          <FormField
            fieldType="text"
            inputMode="email"
            inputType="email"
            label="Email*"
            name="email"
            placeholder="Email"
            required
          />
          <FormField
            fieldType="text"
            inputMode="numeric"
            inputType="number"
            label="Telefonnummer"
            name="phone"
            placeholder="Telefonnummer"
            required
          />
          <FormField
            fieldType="select"
            label="Betreff"
            name="subject"
            required
            options={[
              {
                label: "Item 1",
                value: "item-1",
              },
              {
                label: "Item 2",
                value: "item-2",
              },
              {
                label: "Item 3",
                value: "item-3",
              },
            ]}
          />
          <FormField
            fieldType="textarea"
            label="Nachricht"
            name="message"
            placeholder="Nachricht"
            required
          />
          <FormField
            fieldType="checkbox"
            label={
              <span class="wpcf7-list-item-label">
                Ich bin mit der Übertragung und Speicherung meiner Daten gemäß
                unserer{" "}
                <a href="/datenschutz" target="_blank">
                  Datenschutzerklärung
                </a>{" "}
                einverstanden.
              </span>
            }
            name="checkbox"
            required
          />
          <li class="form-submit">
            <input
              class="wpcf7-form-control has-spinner wpcf7-submit"
              type="submit"
              value="Absenden"
            />
          </li>
        </ul>
      </form>
      <h2>Grid</h2>
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
        <div class="grid-item">10</div>
        <div class="grid-item">11</div>
        <div class="grid-item">12</div>
        <div class="grid-item">13</div>
        <div class="grid-item">14</div>
        <div class="grid-item">15</div>
        <div class="grid-item">16</div>
        <div class="grid-item">17</div>
        <div class="grid-item">18</div>
        <div class="grid-item">19</div>
        <div class="grid-item">20</div>
        <div class="grid-item">21</div>
        <div class="grid-item">22</div>
      </div>
    </div>
  );
}
