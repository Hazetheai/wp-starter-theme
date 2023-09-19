import Page from "../../classes/Page";

import Titles from "./Titles";

export default class HomePage extends Page {
  constructor() {
    super({
      id: "primary",

      classes: {
        active: "home--active",
      },

      element: ".site-main",
      elements: {
        navigation: document.querySelector(".main-navigation"),

        // Single item
        wrapper: ".entry-content",
        //
        // link: ".home__link",
        // Single item within wrapper
        list: "ul",
        // List items under list
        items: "li",
      },
    });
  }

  create() {
    super.create();

    // this.titles = new Titles({
    //   element: document.body,
    //   elements: {
    //     list: this.element,
    //     items: this.elements.wrapper,
    //   },
    // });

    // this.titles.enable();
  }

  /**
   * Animations.
   */
  async show(url) {
    this.element.classList.add(this.classes.active);

    return super.show(url);
  }

  async hide(url) {
    this.element.classList.remove(this.classes.active);

    return super.hide(url);
  }

  /**
   * Events.
   */
  onResize() {
    super.onResize();

    this.titles.onResize();
  }

  onTouchDown(event) {
    this.titles.onTouchDown(event);
  }

  onTouchMove(event) {
    this.titles.onTouchMove(event);
  }

  onTouchUp(event) {
    this.titles.onTouchUp(event);
  }

  onWheel(event) {
    this.titles.onWheel(event);
  }

  /**
   * Loop.
   */
  update() {
    super.update();

    this.titles.update();
  }

  /**
   * Destroy.
   */
  destroy() {
    super.destroy();
  }
}
