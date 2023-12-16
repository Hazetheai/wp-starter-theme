import { registerBlockType } from "@wordpress/blocks";

import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";

registerBlockType("vitestarter/atoms", {
  edit,
  save,
  attributes: {
    category: "vitestarter",
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
  },
});
