import { registerBlockType } from "@wordpress/blocks";

import "./style.css";
import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";
import { registerFormats } from "./custom-format";
registerFormats();

registerBlockType("vitestarter/content", {
  edit,
  save,
  title: "Inhalt",
  category: "vitestarter",
  attributes: {
    post: {
      type: "object",
    },
    mediaPosition: {
      type: "string",
      default: "left",
    },
    image: {
      type: "object",
      default: { url: "", alt: "" },
    },
    video: {
      type: "object",
      default: { url: "", alt: "", youtubeID: "" },
    },
    poster: {
      type: "object",
      default: { url: "", alt: "" },
    },

    kicker: {
      type: "text",
      source: "text",
      selector: ".kicker",
    },
    title: {
      type: "text",
      source: "text",
      selector: ".title",
    },
    paragraph: {
      type: "string",
      source: "html",
      selector: ".paragraph",
    },
    cta1: {
      type: "object",
      default: { url: "", title: "", opensInNewTab: true },
    },
    cta2: {
      type: "object",
      default: { url: "", title: "", opensInNewTab: true },
    },
    file: {
      type: "boolean",
    },
    scrollButton: {
      type: "boolean",
    },

    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
  },
});
