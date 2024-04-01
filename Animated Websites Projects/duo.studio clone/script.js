function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

var crsr = document.querySelector("#crsr");
var main = document.querySelector("#main");
main.addEventListener("mousemove", (coord) => {
  crsr.style.left = coord.x + "px";
  crsr.style.top = coord.y + "px";
});

gsap.from(".page1 h1,.page1 h2", {
  y: 70,
  rotate: 4,
  opacity: 0,
  delay: 0.3,
  duration: 0.8,
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers: true,
    start: "top 25%",
    end: "top 0",
    scrub: 2,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -80,
  },
  "flag"
)
  .to(
    ".page1 h2",
    {
      x: 100,
    },
    "flag"
  )
  .to(
    ".page1 video",
    {
      width: "90%",
    },
    "flag"
  );

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    // markers: true,
    start: "top -110%",
    end: "top -120%",
    scrub: 1,
  },
});
tl2.to(
  "#main",
  {
    backgroundColor: "#fff",
  },
  "change"
);
tl2.from(
  "video",
  {
    width: "90%",
  },
  "change"
);
