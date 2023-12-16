/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { v4 as uuidv4 } from "uuid";

import {
  BlockControls,
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  __experimentalInputControl as InputControl,
  PanelBody,
  ToggleControl,
  ToolbarGroup,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "react";
import "./editor-style.css";

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background, items, options } = attributes;
  const [activeItem, setActiveItem] = useState(null);

  const blockProps = useBlockProps({
    className: `module-palette-${background?.name}`,
  });

  return (
    <div key="render" {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("General", "bhb-bayern")} initialOpen>
          <ToggleControl
            checked={options.multiple}
            label={__("Mehrere Artikel öffnen?", "bhb-bayern")}
            onChange={() =>
              setAttributes({
                options: { ...options, multiple: !options.multiple },
              })
            }
          />
        </PanelBody>
        <PanelBody cardTitle={__("Aktionspunkte", "bhb-bayern")} initialOpen>
          <Button
            onClick={() =>
              setAttributes({
                cards: items.concat({
                  id: uuidv4(),
                }),
              })
            }
          >
            {__("Einen Artikel hinzufügen?", "bhb-bayern")}
          </Button>
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup>
          <Button
            className={`team-card__delete-btn`}
            onClick={() =>
              setAttributes({
                cards: items.concat({
                  id: uuidv4(),
                }),
              })
            }
            cardTitle={__("Einen Artikel hinzufügen?", "bhb-bayern")}
            variant="secondary"
            icon={"insert"}
          />
        </ToolbarGroup>
      </BlockControls>

      <div className="tabs">
        {items.map((item, idx) => {
          const id = `rd${idx + 1}`;

          return (
            <div
              key={item.question}
              className={`tab ui-element ${activeItem === id ? "active" : ""}`}
            >
              <input
                onChange={(e) => {
                  setActiveItem(e.target.checked ? e.target.id : null);
                }}
                type={options.multiple ? "checkbox" : "radio"}
                id={id}
                name="rd"
              />
              <label className="tab-label flex-between" htmlFor={id}>
                <InputControl
                  label={__("Fragen", "bhb-bayern")}
                  labelPosition="top"
                  type="text"
                  isPressEnterToChange
                  value={item.question}
                  className="tab-question"
                  onChange={(question) => {
                    setAttributes({
                      items: items.map((_item) => {
                        if (_item.id !== item.id) {
                          return _item;
                        }

                        return { ..._item, question };
                      }),
                    });
                  }}
                />
                {activeItem === id ? (
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
                      d="M2 10C2 9.44772 2.44772 9 3 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H3C2.44772 11 2 10.5523 2 10Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
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
                      d="M9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H11V3C11 2.44771 10.5523 2 10 2C9.44771 2 9 2.44771 9 3V9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H9V17Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </label>
              <Button
                className={`team-card__delete-btn`}
                onClick={() =>
                  setAttributes({
                    items: items.filter((_item) => _item.id !== item.id),
                  })
                }
                title={__("Löschen", "bhb-bayern")}
                variant="secondary"
                icon={"remove"}
              />
              <RichText
                value={item.answer}
                className="tab-content"
                tagName="div"
                onChange={(answer) =>
                  setAttributes({
                    items: items.map((_item) => {
                      if (_item.id !== item.id) {
                        return _item;
                      }

                      return { ..._item, answer };
                    }),
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
