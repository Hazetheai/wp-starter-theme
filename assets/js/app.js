import barba from "@barba/core";
import Lenis from "@studio-freight/lenis";
import AutoBind from "auto-bind";
import gsap from "gsap";

import Swiper from "swiper";
import "swiper/css";

import Home from "./Pages/Home";
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_TABLET,
  BREAKPOINT_PHONE,
} from "./utils/breakpoints";

const globalLog = (...args) =>
  window?.__vlow_settings?.["logging"] ? console.log(...args) : null;

function getPageModules() {
  return [...document.querySelectorAll('section[class*="module"]')]?.map(
    (el) => ({ title: el.classList?.[0]?.replace("module-", ""), element: el })
  );
}

class App {
  constructor() {
    window.__vlow_settings = window.__vlow_settings || {};

    if (location.href.includes(".local") || location.search.includes("debug")) {
      window.__vlow_settings["logging"] = true;
      window.__vlow_settings["debug"] = true;
    }

    this.pageModules = getPageModules();
    AutoBind(this);

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.isDesktop = this.width > BREAKPOINT_DESKTOP;
    this.isTablet =
      this.width < BREAKPOINT_DESKTOP && this.width > BREAKPOINT_TABLET;
    this.isPhone = this.width < BREAKPOINT_TABLET;

    //
    this.loadPage();
    this.initLenis();
    this.initBarba();
    this.resize();
    this.update(0);

    this.isPhone && globalLog("isPhone");
    this.isTablet && globalLog("isTablet");
    this.isDesktop && globalLog("isDesktop");

    globalLog(`App initialized`);
  }
  /**
   * Core.
   */
  createPages() {
    //   this.about = new About();
    if (this.template === "/") {
      this.home = new Home();
    }

    this.pages = {
      "/": this.home,
      // "/about": this.about,
    };

    this.page = this.pages[this.template];
  }

  initBarba() {
    const loadPage = this.loadPage.bind(this);
    const _resetScroll = () =>
      this.lenis.scrollTo("top", {
        offset: 0,
        lerp: 0,
        duration: 0,
        easing: null,
        immediate: true,
        lock: true,
        force: true,
        onComplete: null,
      });

    barba.init({
      debug: !!window.__vlow_settings["debug"],
      sync: true,
      transitions: [
        {
          async leave(data) {
            const { barbaNamespace } = data.current.container.dataset;
            globalLog("barbaNamespace", barbaNamespace);

            const done = this.async();
            pageTransition(data);
            await delay(1500);

            done();
          },

          async enter(data) {
            _resetScroll();
            const { barbaNamespace } = data.next.container.dataset;
            globalLog("barbaNamespace", barbaNamespace);
            _onChange();

            const body = document.querySelector("body");

            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(
              data.next.html.replace(
                /(<\/?)body( .+?)?>/gi,
                "$1notbody$2>",
                data.next.html
              ),
              "text/html"
            );
            let bodyClasses = htmlDoc
              .querySelector("notbody")
              .getAttribute("class");
            body.setAttribute("class", bodyClasses);

            contentAnimation();
          },
          after(data) {
            loadPage(data.next.container);
          },
          async once() {
            contentAnimation();
          },
        },
      ],
    });
  }

  initSwiper() {
    this.imageSliders = [...document.querySelectorAll(".swiper")].map(() => {
      new Swiper(".swiper", {
        slidesPerView: "auto",

        spaceBetween: 30,
        grabCursor: true,
        slidesOffsetBefore: window.innerWidth / 3,
        freeMode: {
          enabled: true,
          sticky: true,
          momentum: true,
          momentumRatio: 2,
          momentumBounce: true,
          momentumBounceRatio: 2,
          momentumVelocityRatio: 2,
        },
      });
    });
  }

  initVideoControls() {
    const videoWrappers = document.querySelectorAll('[class$="video-wrapper"]');

    videoWrappers.forEach((videoW) => {
      const playButton = videoW.querySelector('[class$="play-button"]');
      const fullscreen = videoW.querySelector('[class$="fullscreen-button"]');
      const exitFullscreen = videoW.querySelector(
        '[class$="exit-fullscreen-button"]'
      );
      const videoOverlay = videoW.querySelector('[class$="video-overlay"]');
      if (!videoOverlay) return;

      exitFullscreen.style.display = "none";
      const video = videoW.querySelector("video");
      video.addEventListener("playing", () => {
        globalLog(`playing`);
        // if the video is playing and the play button is visible, hide it
        if (!playButton.classList.contains("is-playing")) {
          playButton.classList.add("is-playing");
          video.muted = false;
          videoW.addEventListener("click", pauseVideo);
        }
      });

      function pauseVideo(e) {
        e.stopPropagation();
        globalLog(`pause`);
        playButton.classList.remove("is-playing");
        video.pause();
        videoW.removeEventListener("click", pauseVideo);
      }

      function playVideo(e) {
        e.stopPropagation();
        globalLog(`play`);
        playButton.classList.add("is-playing");
        video.play();
        video.muted = false;
        videoW.addEventListener("click", pauseVideo);
      }
      function toggleFullScreen(e) {
        e.stopPropagation();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
          // Need this to support Safari
          document.webkitExitFullscreen();
        } else if (video.webkitRequestFullscreen) {
          // Need this to support Safari
          video.webkitRequestFullscreen();
        } else {
          video.requestFullscreen();
        }
      }

      playButton.addEventListener("click", playVideo, false);
      fullscreen.addEventListener("click", toggleFullScreen, false);
      exitFullscreen.addEventListener("click", toggleFullScreen, false);
    });
  }

  initScrollButtons() {
    const modules = document.querySelectorAll('section[class*="module-"]');

    modules.forEach((module, idx, arr) => {
      const scrollButton = module.querySelector(".scroll-button");
      if (!scrollButton) return;

      scrollButton.addEventListener("click", () => {
        const nextModule = arr[idx + 1];

        if (module.classList.contains("module-homepage-hero")) {
          const scrollDepth = window.innerHeight * 0.8;

          window.scrollBy({ top: scrollDepth, behavior: "smooth" });
          return;
        }

        if (!nextModule) return;
        nextModule.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
    });
  }

  initLenis() {
    this.lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    this.lenis.on("scroll", ScrollTrigger.update);
  }

  /**
   * Reactors.
   */
  loadPage(docData) {
    this.pageModules = getPageModules();
    this.siemaInstances = this.siemaInstances || [];
    this.template = window.location.pathname;

    try {
      this.createPages();
      globalLog(`createdPages`);
      this.initVideoControls();
      globalLog(`initVideoControls`);
      this.initScrollButtons();
      globalLog(`initScrollButtons`);
      this.initSwiper();
      globalLog(`initSliders`);
    } catch (error) {
      console.error(error);
    }
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;

    globalLog("resizing");
  }

  /**
   * Events.
   */
  onPreloaded() {
    this.onResize();

    this.canvas.onPreloaded();

    this.page.show();
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    });
  }

  // async onChange({ url, push = true }) {
  async onChange() {
    this.template = window.location.pathname;
  }

  onResize() {
    this.resize();
  }

  onTouchDown(event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event);
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event);
    }
  }

  onTouchMove(event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event);
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchMove(event);
    }
  }

  onTouchUp(event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event);
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchUp(event);
    }
  }

  onWheel(event) {
    const normalizedWheel = NormalizeWheel(event);

    if (this.canvas && this.canvas.onWheel) {
      this.canvas.onWheel(normalizedWheel);
    }

    if (this.page && this.page.onWheel) {
      this.page.onWheel(normalizedWheel);
    }
  }

  /***
   * Listeners.
   */
  addEventListeners() {
    window.addEventListener("popstate", this.onPopState.bind(this));
    window.addEventListener("mousewheel", this.onWheel.bind(this));

    window.addEventListener("mousedown", this.onTouchDown.bind(this));
    window.addEventListener("mousemove", this.onTouchMove.bind(this));
    window.addEventListener("mouseup", this.onTouchUp.bind(this));

    window.addEventListener("touchstart", this.onTouchDown.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this));
    window.addEventListener("touchend", this.onTouchUp.bind(this));

    window.addEventListener("resize", this.onResize.bind(this));
  }

  addLinkListeners() {
    const links = document.querySelectorAll("a");

    each(links, (link) => {
      const isLocal = link.href.indexOf(window.location.origin) > -1;

      const isNotEmail = link.href.indexOf("mailto") === -1;
      const isNotPhone = link.href.indexOf("tel") === -1;

      if (isLocal) {
        link.onclick = (event) => {
          event.preventDefault();

          this.onChange({
            url: link.href,
          });
        };

        link.onmouseenter = () => this.onLinkMouseEnter(link);
        link.onmouseleave = () => this.onLinkMouseLeave(link);
      } else if (isNotEmail && isNotPhone) {
        link.rel = "noopener";
        link.target = "_blank";
      }
    });
  }

  /**
   * Loop.
   */
  update(time = this.time) {
    // Objects that can be hovered

    if (this.lenis) {
      this.lenis.raf(time);
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
}

// new App();

export default App;
