import gsap from "gsap";

function animateTableFilter(filter) {
  const filterButton = filter.querySelector(".table-filter__button");
  const list = filter.querySelectorAll(".table-filter__items");
  const items = filter.querySelectorAll(".table-filter__item");
  const buttonIcon = filterButton.querySelector(".table-filter__button-icon");
  const menuUp = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  const menuDown = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  let menuOpen = false;

  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.2, ease: "power1.inOut" },
  });

  tl.fromTo(buttonIcon, { rotation: 0 }, { rotation: 180 }, 0)
    .fromTo(
      list,
      { clipPath: menuUp, visibility: "hidden" },
      { clipPath: menuDown, visibility: "visible" },
      0
    )
    .fromTo(
      [...items],
      { opacity: 0, y: "0.5em", stagger: 0.1 },
      { opacity: 1, y: "0em", stagger: 0.1 }
    );

  filterButton.addEventListener("click", () => {
    if (!menuOpen) {
      tl.play();
      menuOpen = true;
    } else {
      tl.reverse();
      menuOpen = false;
    }
  });
}

export { animateTableFilter };
