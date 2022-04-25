gsap.set(".main", {
  position: "fixed",
  background: "#fff",
  width: "100%",
  maxWidth: "1200px",
  height: "100%",
  top: 0,
  left: "50%",
  x: "-50%",
});

gsap.set(".scrollDist", { width: "100%", height: "200%" });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scrollDist",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  })
  .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
  .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
  .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
  .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
  .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
  .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
  .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

$("#arrowBtn").on("mouseenter", (e) => {
  gsap.to(".arrow", {
    y: 10,
    duration: 10,
    ease: "back.inOut(3)",
    overwrite: "auto",
  });
});
$("#arrowBtn").on("mouseleave", (e) => {
  gsap.to(".arrow", {
    y: 0,
    duration: 10,
    ease: "power3.out",
    overwrite: "auto",
  });
});
$("#arrowBtn").on("click", (e) => {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 10,
    ease: "power1.inOut",
  });
}); // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

/*new*/

const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});
