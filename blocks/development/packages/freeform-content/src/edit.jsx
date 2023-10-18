/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {
  BlockControls,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  ColorPalette,
  Icon,
  PanelBody,
  Popover,
  SelectControl,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import { v4 as uuid } from "uuid";
import { __ } from "@wordpress/i18n";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../../shared/editor-style.scss";
import { colors } from "../../../shared/lib";
import "./editor-style.scss";
import React, { useState } from "react";
import classNames from "classnames";
import { EditMedia } from "../../../shared/components/atoms/Image";
import { EditText } from "../../../shared/components/atoms/EditText";
import { initialLayout } from "./index";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background, items, layouts } = attributes;
  const [selectedItem, setSelectedItem] = useState(null);
  const [editingItem, setEditingItem] = useState(false);

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

  const handleLayoutChange = (layout, layouts) => {
    setAttributes({ ...attributes, layouts });
  };

  const addItem = () => {
    const id = uuid();
    const content = `Item ${items.length + 1}`;
    const newLayouts = Object.keys(layouts).reduce((acc, el) => {
      acc[el] = [...layouts[el], { i: id, ...initialLayout }];
      return acc;
    }, {});
    setAttributes({
      ...attributes,
      items: [...items, { id, content }],
      layouts: newLayouts,
    });
  };

  const removeItem = (id) => {
    const newItems = items.filter((el) => el.id !== id);
    // filter items from all layout breakpoints
    const newLayouts = Object.keys(layouts).reduce((acc, el) => {
      acc[el] = layouts[el].filter((el) => el.i !== id);
      return acc;
    }, {});

    if (selectedItem === id) setSelectedItem(null);
    setAttributes({ ...attributes, items: newItems, layouts: newLayouts });
  };

  const updateItem = (id, contentType) => {
    const index = items.findIndex((el) => el.id === id);

    items[index].contentType = contentType;
    setAttributes({ ...attributes, items });
  };

  return (
    <div key="render" {...blockProps}>
      <InspectorControls>
        {/* <PanelBody title={__("General", "bhb-bayern")} initialOpen>
          <ColorPalette
            colors={Object.keys(colors).map((el) => ({
              name: el,
              color: colors[el],
            }))}
            value={background.color}
            r}
            disableCustomColors={true}
          />
        </PanelBody> */}
      </InspectorControls>
      <BlockControls>
        <ToolbarGroup label="Item hinzufügen">
          <ToolbarButton
            onClick={(event) => {
              event.preventDefault();
              addItem();
            }}
          >
            <Icon icon="plus" />
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>

      <ResponsiveGridLayout
        // measureBeforeMount
        layouts={layouts}
        breakpoints={{ lg: 768, md: 600, sm: 500, xs: 450, xxs: 0 }}
        cols={{ lg: 12, md: 8, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={100}
        width={1000}
        onLayoutChange={handleLayoutChange}
        compactType={null}
      >
        {items.map((item) => (
          <div
            className={classNames("bhb-grid-item", `grid-item--${item.id}`)}
            key={item.id}
            onClick={() => setSelectedItem(item.id)}
          >
            <div className="bhb-grid-item__controls">
              <Button
                className="button-edit"
                variant="primary"
                onClick={(e) => {
                  setSelectedItem(item.id);
                  e.stopPropagation();
                  setEditingItem(
                    item.id === selectedItem && editingItem ? false : true
                  );
                }}
                icon={"edit"}
              />
              {editingItem && selectedItem === item.id && (
                <Popover>
                  <SelectControl
                    label={__("Wählen Sie den Inhaltstyp:")}
                    value={item.contentType}
                    options={[
                      { label: "Plain Text", value: "plain" },
                      { label: "Rich Text", value: "rich" },
                      { label: "Image", value: "image" },
                    ]}
                    onChange={(value) => {
                      updateItem(item.id, value);
                      setEditingItem(false);
                    }}
                  />
                </Popover>
              )}
              <Button
                className="button-remove"
                isDestructive
                variant="primary"
                onClick={() => removeItem(item.id)}
                icon={"remove"}
              />
            </div>
            <div className="bhb-grid-item__content">
              {/* {item.content} */}
              {item.contentType === "image" ? (
                <EditMedia
                  namespace={item.id}
                  attributes={{
                    [item.id]: {
                      image: items.find((el) => el.id === item.id).content,
                    },
                  }}
                  setAttributes={(value) => {
                    const index = items.findIndex((el) => el.id === item.id);
                    const newItems = items.slice(0);
                    newItems[index].content = value[item.id].image;
                    setAttributes({ ...attributes, items: newItems });
                  }}
                />
              ) : (
                <EditText
                  type={item.contentType}
                  namespace={item.id}
                  attributes={{
                    [item.id]: {
                      text: items.find((el) => el.id === item.id).content,
                    },
                  }}
                  setAttributes={(value) => {
                    const index = items.findIndex((el) => el.id === item.id);
                    const newItems = items.slice(0);
                    newItems[index].content = value[item.id].text;
                    setAttributes({ ...attributes, items: newItems });
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
