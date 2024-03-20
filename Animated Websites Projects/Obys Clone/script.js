function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.5,
    delay: 0.2,
  });
  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
      var h5time = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          grow++;
          h5time.textContent = grow;
        } else {
          h5time.textContent = 100;
        }
      }, 15);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 2,
    duration: 0.2,
    display: "none",
  });
  tl.from("#page1", {
    y: 1600,
    delay: 0.2,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  tl.from('#nav',{
    opacity: 0,
  })
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:140,
    stagger: 0.2,
  })
}

function crsrAnimation() {
  document.addEventListener("mousemove", (e) => {
    gsap.to("#crsr", {
      left: e.x,
      top: e.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });
}

loadingAnimation();
crsrAnimation();
