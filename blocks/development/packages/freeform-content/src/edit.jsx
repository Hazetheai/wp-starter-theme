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
import { __, _x } from "@wordpress/i18n";
import { Responsive, WidthProvider } from "react-grid-layout";
import "../../../shared/editor-style.scss";
import { colors, getLowestFraction } from "../../../shared/lib";
import "./editor-style.scss";
import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { EditMedia } from "../../../shared/components/atoms/Image";
import { EditText } from "../../../shared/components/atoms/EditText";
import {
  gridMargins,
  gridGutter,
  initialLayout,
  moduleHeights,
  moduleWidths,
  textStyles,
} from "./index";
import { moduleSpacing } from "./index";
import { useKeyPress } from "react-use";

const ResponsiveGridLayout = WidthProvider(Responsive);

function scaleLayout(size, device) {
  const scaleFactor = moduleWidths[device].editor / moduleWidths[device].view;
  return size * scaleFactor;
}

// const MyHandle = React.forwardRef((props, ref) => {
//   const { handleAxis, ...restProps } = props;
//   return (
//     <div
//       ref={ref}
//       className={classNames(
//         "react-resizable-handle",
//         "react-resizable-handle-" + handleAxis
//       )}
//       {...restProps}
//     >
//       <Icon
//         icon={
//           handleAxis === "n"
//             ? "arrow-up"
//             : handleAxis === "e"
//             ? "arrow-right"
//             : handleAxis === "s"
//             ? "arrow-down"
//             : "arrow-left"
//         }
//       />
//     </div>
//   );
// });

export default function Edit({ attributes, setAttributes, isSelected }) {
  const { background, items, layouts, grid } = attributes;
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [isEditLayoutMode, setIsEditLayoutMode] = useState(false);
  const [activeDeviceType, setActiveDeviceType] = useState("desktop");
  const [gridsVisible, setGridsVisible] = useState(false);
  // const [isMetaKeyPressed] = useKeyPress("Meta");

  const gridItemsRef = useRef(null);

  function getGridItemRef(id) {
    const map = getMap();
    const node = map.get(id);

    return node;
  }

  function getMap() {
    if (!gridItemsRef.current) {
      // Initialize the Map on first usage.
      gridItemsRef.current = new Map();
    }
    return gridItemsRef.current;
  }

  // TODO use this to set  calculate the size of the grid item when the content changes
  const scaledGridGutters = scaleLayout(
    gridGutter[activeDeviceType],
    activeDeviceType
  );
  const blockProps = useBlockProps({
    className: `module-palette-${background?.name}`,
    style: {
      "--bhb-editor-grid-gutter": `${scaledGridGutters}px`,
    },
  });
  console.log("gridItemsRef", gridItemsRef);
  // const testImage = items.find((el) => el.contentType === "image");
  // console.log("testImage", testImage);

  function calcGridUnitsByRatio(ratio, layout) {
    const { numerator, denominator } = getLowestFraction(ratio);

    const gridUnits = {
      w: layout.w * numerator,
      h: layout.h * denominator,
    };

    return gridUnits;
  }

  function convertImageToGridUnits(image, layout) {
    const { width, height } = image;
    const ratio = width / height;
    const gridUnits = calcGridUnitsByRatio(ratio, layout);
    return { ...layout, ...gridUnits };
  }

  // console.log(
  //   "testImage Layout",
  //   convertImageToGridUnits(testImage, initialLayout)
  // );

  const handleLayoutChange = (layout, layouts) => {
    console.log("layouts", layouts);
    setAttributes({ ...attributes, layouts });
  };

  const addItem = () => {
    const id = uuid();
    const content = `Item ${items.length + 1}`;
    console.log("initialLayout", initialLayout);
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

  const updateItem = ({ id, property, value }) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        item[property] = value;
      }
      return item;
    });
    setAttributes({ ...attributes, items: newItems });
  };

  const updateLayoutForItem = (id, newLayout) => {
    const newLayouts = Object.keys(layouts).reduce((acc, curr) => {
      acc[curr] = layouts[curr].map((el) =>
        el.i === id ? { ...el, ...newLayout } : el
      );
      return acc;
    }, {});
    setAttributes({ ...attributes, layouts: newLayouts });
  };

  const gridOverlayColumns = Array.from(
    {
      length:
        activeDeviceType === "desktop"
          ? 12
          : activeDeviceType === "tablet"
          ? 8
          : 4,
    },
    (v, i) => i + 1
  );

  const rowHeight =
    (moduleWidths[activeDeviceType].editor -
      (scaledGridGutters * grid.cols[activeDeviceType] - 1)) /
    grid.cols[activeDeviceType];

  console.log("rowHeight", rowHeight);
  return (
    <div key="render" {...blockProps}>
      <InspectorControls></InspectorControls>
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
        <ToolbarGroup label="Device">
          <ToolbarButton
            variant={activeDeviceType === "desktop" ? "primary" : "tertiary"}
            onClick={(event) => {
              setActiveDeviceType("desktop");
            }}
            icon="desktop"
            label="Desktop"
          />

          <ToolbarButton
            variant={activeDeviceType === "tablet" ? "primary" : "tertiary"}
            onClick={(event) => {
              setActiveDeviceType("tablet");
            }}
            icon="tablet"
            label="Tablet"
          />

          <ToolbarButton
            variant={activeDeviceType === "mobile" ? "primary" : "tertiary"}
            onClick={(event) => {
              setActiveDeviceType("mobile");
            }}
            icon="smartphone"
            label="Mobile"
          />
        </ToolbarGroup>
        <ToolbarGroup label="Grid">
          <ToolbarButton
            variant={gridsVisible ? "primary" : "tertiary"}
            onClick={(event) => {
              setGridsVisible((prev) => !prev);
            }}
            icon="grid-view"
            label={
              gridsVisible
                ? _x("Grids ausblenden", "bhb-bayern")
                : _x("Grids einblenden", "bhb-bayern")
            }
          />
          <ToolbarButton
            variant={isEditLayoutMode ? "primary" : "tertiary"}
            onClick={(event) => {
              setIsEditLayoutMode((prev) => !prev);
            }}
            icon="layout"
            label={
              isEditLayoutMode
                ? _x("Layoutmodus beenden", "bhb-bayern")
                : _x("Layoutmodus aufrufen", "bhb-bayern")
            }
          />
        </ToolbarGroup>
      </BlockControls>
      {gridsVisible && (
        <div className={classNames("bhb-grid__overlay")}>
          <div
            className={classNames(
              `bhb-grid__columns-overlay bhb-grid__columns-overlay--${activeDeviceType}`
            )}
          >
            {gridOverlayColumns.map((el) => (
              <div className="bhb-grid__columns-overlay__column" />
            ))}
          </div>
        </div>
      )}
      <ResponsiveGridLayout
        // measureBeforeMount
        style={{
          cursor: isEditLayoutMode ? "grab" : "default",
        }}
        layouts={layouts}
        breakpoints={grid.breakpoints}
        cols={grid.cols}
        rowHeight={rowHeight}
        resizeHandles={["n", "e", "s", "w"]}
        isDraggable={isEditLayoutMode}
        isResizable={isEditLayoutMode}
        width={moduleWidths[activeDeviceType].editor}
        onLayoutChange={handleLayoutChange}
        compactType={null}
        containerPadding={[0, 16]}
        // preventCollision
        allowOverlap={isEditLayoutMode}
        draggableHandle=".bhb-grid-item__content"
        className={classNames("bhb-grid", `bhb-grid--${activeDeviceType}`)}
        margin={[Math.floor(scaledGridGutters), 0]}
        // resizeHandle={<MyHandle />}
      >
        {items.map((item, idx) => (
          <div
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
            className={classNames("bhb-grid-item", `grid-item--${item.id}`)}
            key={item.id}
            onClick={() => setSelectedItem(item.id)}
          >
            <div className="bhb-grid-item__controls">
              {!isEditLayoutMode && (
                <Button
                  className="button-edit"
                  label={_x("Artikel bearbeiten", "button-label", "bhb-bayern")}
                  variant="primary"
                  onClick={(e) => {
                    setSelectedItem(item.id);
                    e.stopPropagation();
                    setIsEditingItem(
                      item.id === selectedItem && isEditingItem ? false : true
                    );
                  }}
                  icon={"edit"}
                />
              )}
              {!isEditLayoutMode &&
                isEditingItem &&
                selectedItem === item.id && (
                  <Popover>
                    <div className="bhb-grid-item__controls__edit-controls">
                      <SelectControl
                        label={__("Wählen Sie den Inhaltstyp:")}
                        value={item.contentType}
                        options={[
                          // { label: "Plain Text", value: "plain" },
                          { label: "Text", value: "richText" },
                          { label: "Image", value: "image" },
                        ]}
                        onChange={(value) => {
                          updateItem({
                            id: item.id,
                            property: "contentType",
                            value,
                          });
                          setIsEditingItem(false);
                        }}
                      />
                      {item.contentType === "richText" && (
                        <SelectControl
                          label={__("Wählen Sie einen Textstil:")}
                          value={item.textStyle}
                          options={textStyles}
                          onChange={(value) => {
                            updateItem({
                              id: item.id,
                              property: "textStyle",
                              value,
                            });
                            setIsEditingItem(false);
                          }}
                        />
                      )}
                    </div>
                  </Popover>
                )}
              {!isEditLayoutMode && (
                <Button
                  label={_x("Artikel entfernen", "button-label", "bhb-bayern")}
                  className="button-remove"
                  isDestructive
                  variant="primary"
                  onClick={() => removeItem(item.id)}
                  icon={"remove"}
                />
              )}
            </div>
            <div
              className={classNames("bhb-grid-item__content")}
              style={{
                cursor: isEditLayoutMode
                  ? "grab"
                  : item.contentType === "richText"
                  ? "text"
                  : "default",
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isEditingItem) setIsEditingItem(false);
              }}
            >
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
                  onImageSelect={(value) => {
                    const newLayout = convertImageToGridUnits(
                      value,
                      initialLayout
                    );
                    console.log("newLayout", newLayout);
                    updateLayoutForItem(item.id, {
                      w: newLayout.w,
                      h: newLayout.h,
                    });
                  }}
                  hideUI={isEditLayoutMode}
                />
              ) : (
                <>
                  {console.log(
                    `getGridItemRef(${item.id})`,
                    getGridItemRef(item.id)
                  )}
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
                    className={item.textStyle}
                    hideUI={isEditLayoutMode}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
