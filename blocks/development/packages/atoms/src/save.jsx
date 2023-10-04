/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { useBlockProps } from "@wordpress/block-editor";
import Link from "../../../shared/components/atoms/Link";
import TableControls from "../../../shared/components/atoms/TableControls";
import FormField from "../../../shared/components/atoms/FormField";
import Icon from "../../../shared/components/atoms/Icon";
export default function Save({ attributes }) {
  let blockProps = useBlockProps.save({
    className: `module-atoms block-theme`,
  });

  return (
    <section className={`module-palette-${attributes?.background?.name}`}>
      <div {...blockProps}>{/* Saved Block */}</div>
      <h1>Atoms</h1>
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
      <h2>Table Controls</h2>
      <div className="flex">
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
        <TableControls
          id="table-controls-filter-2"
          controlType="filter-button"
          text="Filter Löschen"
          buttonProps={{
            type: "submit",
          }}
        />
        <TableControls
          id="table-controls-filter-3"
          controlType="filter-button"
          text="Filter Löschen Disabled"
          disabled
        />
      </div>
      <h2>Image Link</h2>
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
                <a
                  className="link link--copy text-copy-3"
                  href="/datenschutz"
                  target="_blank"
                >
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
      <Icon type="burger-closed" />
      <Icon type="burger-open" />
      <Icon type="alert" />
      <Icon type="chevron-up-dark" />
      <Icon type="chevron-up-light" />
      <Icon type="extended-left-mobile" />
      <Icon type="extended-out-desktop" />
      <Icon type="extended-out-mobile" />
      <Icon type="extended-right-desktop" />
      <Icon type="extended-right-mobile" />
      <Icon type="short-large-right-desktop-1512" />
      <Icon type="short-large-right-desktop" />
      <Icon type="short-left-desktop" />
      <Icon type="short-left-mobile" />
      <Icon type="short-out-desktop" />
      <Icon type="short-right-desktop" />
      <Icon type="short-right-mobile" />
      <Icon type="simple-down-desktop" />
      <Icon type="simple-down-mobile" />
      <Icon type="simple-top-desktop" />
      <Icon type="simple-top-mobile" />
      <Icon
        type="back-to-top"
        stroke="var(--btt-stroke)"
        fill="var(--btt-fill)"
      />
    </section>
  );
}
