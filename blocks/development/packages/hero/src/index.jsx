import { registerBlockType } from "@wordpress/blocks";

import "./style.css";
import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";

registerBlockType("vitestarter/hero", {
  edit,
  save,
  title: "Hero",
  category: "vlow-blocks",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: ".title",
    },
    subtitle: {
      type: "string",
      source: "text",
      selector: ".subtitle",
    },
    model: {
      type: "object",
      default: { name: "", icon: null },
    },
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
    misc_data: {
      type: "object",
      default: { slug: "", title: "" },
    },
  },
});
