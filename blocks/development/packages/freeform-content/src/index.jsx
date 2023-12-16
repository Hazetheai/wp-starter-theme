import { registerBlockType } from "@wordpress/blocks";
import { v4 as uuid } from "uuid";
import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";
const initialId = uuid();
export const initialLayout = { x: 0, y: 0, w: 3, h: 3 };
export const initialLayoutTablet = { x: 2, y: 0, w: 2, h: 2 };
export const initialLayoutMobile = { x: 0, y: 0, w: 1, h: 1 };
export const moduleSpacing = {
  mobile: { css: "var(--space-3xl)", px: 96 },
  tablet: { css: "var(--space-4xl)", px: 112 },
  desktop: { css: "var(--space-5xl)", px: 144 },
};
export const moduleWidths = {
  mobile: { editor: 400, view: 375 },
  tablet: { editor: 600, view: 1132 },
  desktop: { editor: 830, view: 1920 },
};
export const gridMargins = {
  mobile: 24,
  tablet: 48,
  desktop: 120,
};
export const gridGutter = {
  mobile: 24,
  tablet: 24,
  desktop: 24,
};
export const moduleHeights = {
  mobile: 96,
  tablet: 112,
  desktop: 144,
};

export const textStyles = [
  {
    label: "Copy 1",
    value: "text-copy-1",
  },
  {
    label: "Copy 2",
    value: "text-copy-2",
  },
  {
    label: "Copy 3",
    value: "text-copy-3",
  },
  {
    label: "Notification",
    value: "text-functional-notification",
  },
  {
    label: "Superscript",
    value: "text-functional-superscript",
  },
  {
    label: "Heading 1",
    value: "text-headlines-h1",
  },
  {
    label: "Heading 2",
    value: "text-headlines-h2",
  },
  {
    label: "Heading 3",
    value: "text-headlines-h3---deco",
  },
  {
    label: "Heading 4",
    value: "text-headlines-h4",
  },
  {
    label: "Overline",
    value: "text-overline",
  },
];
registerBlockType("vitestarter/freeform-content", {
  edit,
  save,
  attributes: {
    category: "vitestarter",
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
    items: {
      type: "array",
      default: [
        {
          id: initialId,
          content: "",
          contentType: "richText",
          className: "",
          textStyle: textStyles[0].value,
        },
      ],
    },
    layouts: {
      type: "object",
      default: {
        desktop: [{ i: initialId, ...initialLayout }],
        tablet: [{ i: initialId, ...initialLayoutTablet }],
        mobile: [{ i: initialId, ...initialLayoutMobile }],
      },
    },
    grid: {
      type: "object",
      default: {
        breakpoints: { desktop: 768, tablet: 600, mobile: 400 },
        cols: { desktop: 12, tablet: 8, mobile: 4 },
      },
    },
  },
});
