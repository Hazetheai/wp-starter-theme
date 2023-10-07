import { registerBlockType } from "@wordpress/blocks";

import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";

registerBlockType("vitestarter/molecules", {
  edit,
  save,
  attributes: {
    category: "vlow-blocks",
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
  },
});
