import Page from "../../classes/Page";
import JustValidate from "just-validate";
export default class ContactPage extends Page {
  constructor() {
    super({
      id: "primary",

      classes: {
        active: "home--active",
      },

      element: ".site-main",
      elements: {
        navigation: document.querySelector(".main-navigation"),
        formData: `[data-form-subjects]`,
        cf7subjectField: "#cf7-contact-form-subject",
        cf7recipient: "#cf7-contact-form-recipient",
        cf7nameField: "#cf7-contact-form-name",
        cf7emailField: "#cf7-contact-form-email",
        cf7phoneField: "#cf7-contact-form-phone",
        cf7messageField: "#cf7-contact-form-message",
        cf7consentField: "#cf7-contact-form-consent",
        // Single item

        wrapper: ".entry-content",
        //
        // link: ".home__link",
        // Single item within wrapper
        list: ".form-controls",
        // List items under list
        items: ".form-control",
      },
    });
  }

  create() {
    super.create();
    this.initForm();
    this.initValidation();
    this.watchSubject();
  }

  initForm() {
    // Insert Subject lines
    const formSubjects = JSON.parse(
      this.elements.formData.dataset.formSubjects
    );

    for (let i = 0; i <= formSubjects.length - 1; i++) {
      const opt = document.createElement("option");
      opt.value = formSubjects[i].email;
      opt.innerHTML = formSubjects[i].title;
      this.elements.cf7subjectField.appendChild(opt);
    }

    // Floating Labels
    this.elements.items.forEach((formControl) => {
      const input = formControl.querySelector("input");
      const label = formControl.querySelector("label");

      if (!label || !input || !label.classList.contains("floating-label")) {
        return;
      }

      input.addEventListener("focus", (e) => {
        if (label.classList.contains("floating-label--active")) {
          return;
        }

        label.classList.add("floating-label--active");
      });
      // input.addEventListener("change", (e) => {

      // });
      input.addEventListener("blur", (e) => {
        if (
          !input.value &&
          label.classList.contains("floating-label--active")
        ) {
          label.classList.remove("floating-label--active");
        }
      });
    });

    console.log("formInit");
  }

  initValidation() {
    const validator = new JustValidate("#cf7-contact-form");

    validator
      .addField(this.elements.cf7nameField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
      ])
      .addField(this.elements.cf7emailField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
        {
          rule: "email",
          errorMessage: "Bitte geben Sie eine gültige E-Mail Adresse ein",
        },
      ])
      .addField(this.elements.cf7phoneField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
        {
          rule: "customRegexp",
          value: /(\(?([\d \-)–+/(]+){6,}\)?([ .\-–/]?)([\d]+))/gi,
          errorMessage: "Bitte geben Sie eine gültige Telefonnummer ein",
        },
      ])
      .addField(this.elements.cf7subjectField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
        {
          rule: "customRegexp",
          value: /[^Betreff*]/gi,
          errorMessage: "Bitte wählen Sie einen Betreff.",
        },
      ])
      .addField(this.elements.cf7messageField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
      ])
      .addField(this.elements.cf7consentField, [
        {
          rule: "required",
          errorMessage: "Bitte füllen Sie dieses Feld aus.",
        },
      ]);
  }

  watchSubject() {
    this.elements.cf7recipient.value = document.querySelector(
      "#cf7-contact-form-subject"
    )[1].value;
    this.elements.cf7subjectField.addEventListener("change", (e) => {
      this.elements.cf7recipient.value = e.target.value;
    });
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
  }

  onTouchDown(event) {}

  onTouchMove(event) {}

  onTouchUp(event) {}

  onWheel(event) {}

  /**
   * Loop.
   */
  update() {
    super.update();
  }

  /**
   * Destroy.
   */
  destroy() {
    super.destroy();
  }
}
