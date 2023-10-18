import { registerBlockType } from "@wordpress/blocks";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";

export const formShortcodeMap = {
  // TODO
  contact: `[contact-form-7 id="685" title="Kontakt" html_id="cf7-contact-form" html_class="use-floating-validation-tip"]`,
  default: `[contact-form-7 id="685" title="Kontakt" html_id="cf7-contact-form" html_class="use-floating-validation-tip"]`,
};

registerBlockType("vitestarter/form", {
  edit,
  save,
  title: "Formular",
  category: "vitestarter",
  attributes: {
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
    form: {
      type: "string",
      default: "contact",
      enum: ["contact"],
    },
    subjects: {
      type: "array",
      default: [
        { title: "Allgemein", email: "j.riordan@live.ie", id: uuidv4() },
      ],
    },
  },
});
