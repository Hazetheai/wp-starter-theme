import { registerBlockType } from "@wordpress/blocks";

import "./style.css";

import { colors } from "../../../shared/lib";

import edit from "./edit";
import save from "./save";

registerBlockType("vitestarter/molecules", {
  edit,
  save,
  supports: {
    align: ["wide"],
    alignWide: true,
  },
  attributes: {
    category: "vlow-blocks",
    background: {
      type: "object",
      default: { name: "secondary", color: colors.secondary },
    },
    quote: {
      type: "object",
      default: {
        content: "",
        author: "",
      },
    },
    project_teaser_card: {
      type: "object",
      default: {
        projectLocation: "Bayern",
        title: "Lorem ipsum dolor sit amet",
        image: {
          url: "",
          id: "",
        },
        link: {
          title: "Mehr erfahren",
          url: "#",
        },
      },
    },
    project_intro: {
      type: "object",
      default: {
        title: { top: "BAUKULTUR", bottom: "Seit 1976" },
        subtitle: "Unsere Projekte",
      },
    },
    magazin_intro: {
      type: "object",
      default: {
        description: `Wir denken das Wohnen und Bauen der Zukunft voraus und präsentieren Ihnen Zeitgeist und Visionen, Lifestyle und Design, Architektur und Baukultur. Gesammelt an dieser Stelle. Wie gewohnt: dem Trend auf der Spur, gut recherchiert und knackig präsentiert.`,
        title: "magazin",
      },
    },
    magazin_teaser_card: {
      type: "object",
      default: {
        description:
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
        image: { url: "https://via.placeholder.com/900x1600", id: "" },
        link: { url: "0#", title: "Mehr Erfahren" },
        title: "Aenean commodo ligula eget.",
        large: false,
      },
    },

    magazin_article_header: {
      type: "object",
      default: {
        title: "Hier steht eine mehrzeilige Überschrift ohne Silbentrennung",
      },
    },

    centered_intro: {
      type: "object",
      default: {
        description: `Nachhaltigkeit. Individualität. Kreativität. Das sind die Stützpfeiler, die unseren Bauprojekten das Besondere verleihen. Fest im jeweiligen Standort verwurzelt, entwickeln wir visionäre Neubauimmobilien mit Flair und viel Raum für die Gemeinschaft – und für Sie. Lernen wir uns kennen!`,
        overline: "bauen mit herzblut",
        link: null,
        subline: "",
      },
    },
    section_intro: {
      type: "object",
      default: {
        title: "Section",
        description:
          "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
        link: { title: "Zur Übersicht", url: "0#" },
      },
    },
    copy_block: {
      type: "object",
      default: {
        overline: "Lorem",
        title: { top: "", bottom: "Section" },
        description:
          "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
        style: "simple",
      },
    },
    copy_block_2: {
      type: "object",
      default: {
        overline: "Lorem",
        title: { top: "", bottom: "copy_block_2" },
        description:
          "Lorem ipsum dolor sit amet consectetur. Faucibus accumsan enim metus elit purus eget. Sed dui diam enim sit sed pulvinar interdum nec. Blandit in viverra tristique facilisi venenatis sem.",
        style: "simple",
      },
    },
    partner_card: {
      type: "object",
      default: {
        title: "title",
        overline: "overline",
        image: { url: "", id: "" },
        description: "description",
        link: { title: "title", url: "url" },
      },
    },
    project_contact_cta: {
      type: "object",
      default: {
        title: "Haben wir Ihr Interesse geweckt?",
        link: { title: "Anfrage Starten", url: "0#" },
      },
    },
  },
});
