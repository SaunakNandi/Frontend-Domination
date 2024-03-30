gsap.set(".slidesm", {
  scale: 3,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    markers: true,
    end: "bottom -10%",
    pin: true,
    scrub: 2,
  },
});
tl.to(
  ".videodiv",
  {
    "--clip": "0%",
    ease: Power2,
  },
  "flag"
).to(
  ".slidesm",
  {
    scale: 1,
    ease: Power2,
  },
  "flag"
);
tl.to(
  ".lft",
  {
    xPercent: -20,
    ease: Power4,
  },
  "flag1"
);
tl.to(
  ".rgt",
  {
    xPercent: 20,
    ease: Power4,
  },
  "flag1"
);
