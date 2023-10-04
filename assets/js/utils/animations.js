import gsap from "gsap";

export function pageTransition(data) {
  const tl = gsap.timeline();
  tl.to(data.current.container, {
    opacity: 0,
  }).to(
    "ul.transition li",
    {
      duration: 0.5,
      scaleY: 1,
      scaleX: 1.1,
      transformOrigin: "1% 100%",
      stagger: 0.2,
    },
    "-=25%"
  );
  tl.to("ul.transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "1% 100%",
    stagger: 0.2,
    delay: 0.1,
  });
}
export function contentAnimation() {
  const tl = gsap.timeline();
  tl.to("img.anim__image-reveal--start", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  });
}

export function delay(delay = 1000) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, delay);
  });
}
