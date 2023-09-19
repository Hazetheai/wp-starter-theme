/* eslint-disable computed-property-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable space-in-parens */
/* eslint-disable space-unary-ops */
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
  const siteNavigation = document.getElementById("site-navigation");

  // Return early if the navigation doesn't exist.
  if (!siteNavigation) {
    return;
  }

  const mainNavButton = document.querySelector("#primary-menu-toggle");
  const mainNavButtonClosed = document.querySelector(
    "#primary-menu-toggle.menu-toggle--closed"
  );

  // Return early if the mainNavButton doesn't exist.
  if ("undefined" === typeof mainNavButton) {
    return;
  }

  const menu = siteNavigation.getElementsByTagName("ul")[0];
  menu.insertAdjacentHTML(
    "beforebegin",
    `<div class="main-navigation__header"><span class="kicker link-small text-color-alt">Unser Angebot</span></div>`
  );

  const mainNavHeader = document.querySelector(".main-navigation__header");
  const closeButton = mainNavButtonClosed;
  closeButton.classList.add("menu-toggle--menu-open");

  mainNavHeader.appendChild(closeButton);

  // Hide menu toggle mainNavButton if menu is empty and return early.
  if ("undefined" === typeof menu) {
    mainNavButton.style.display = "none";
    return;
  }

  if (!menu.classList.contains("nav-menu")) {
    menu.classList.add("nav-menu");
  }

  // Toggle the .toggled class and the aria-expanded value each time the mainNavButton is clicked.

  [mainNavButton, closeButton].forEach((btn) => {
    // if (!btn) return;
    btn.addEventListener("click", function () {
      siteNavigation.classList.toggle("main-navigation--open");

      if (mainNavButton.getAttribute("aria-expanded") === "true") {
        mainNavButton.setAttribute("aria-expanded", "false");
      } else {
        mainNavButton.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Add handler for escape key to close menu.

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      siteNavigation.classList.remove("main-navigation--open");
      mainNavButton.setAttribute("aria-expanded", "false");
    }
  });



  // Get all the link elements within the menu.
  const links = siteNavigation.querySelectorAll("a");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      siteNavigation.classList.toggle("main-navigation--open");

      if (mainNavButton.getAttribute("aria-expanded") === "true") {
        mainNavButton.setAttribute("aria-expanded", "false");
      } else {
        mainNavButton.setAttribute("aria-expanded", "true");
      }
    })
  );

  document
    .querySelectorAll(".menu-secondary-menu-container  li")
    .forEach((n) =>
      /404/.test(n.textContent) ? (n.style.display = "none") : null
    );

})();
