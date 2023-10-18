import { registerBlockType } from "@wordpress/blocks";
import { v4 as uuid } from "uuid";
import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";
const initialId = uuid();
export const initialLayout = { x: 0, y: 0, w: 1, h: 1 };
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
        { id: uuid(), content: "Item 1", contentType: "text", className: "" },
      ],
    },
    layouts: {
      type: "object",
      default: {
        lg: [{ i: initialId, ...initialLayout }],
        md: [{ i: initialId, ...initialLayout }],
        sm: [{ i: initialId, ...initialLayout }],
      },
    },
  },
});
