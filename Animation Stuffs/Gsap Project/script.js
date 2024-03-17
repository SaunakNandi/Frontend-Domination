var tl = gsap.timeline();
tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.5,  // h1 will come 1 by 1
});

tl.from("#main h1", {
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
