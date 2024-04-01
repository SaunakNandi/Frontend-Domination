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
tl2.to(
  "video",
  {
    width: "60%",
  },
  "change"
);


// var img1=document.querySelector("#img1");
// var img2=document.querySelector("#img2");
// var img3=document.querySelector("#img3");
// // var img2=document.querySelector("#img2");
// var text1=document.querySelector('#text1')
// var text2=document.querySelector('#text2')
// var text3=document.querySelector('#text3')
 
// text1.addEventListener("mouseenter",()=>{
//   img1.style.opacity="1";
//   img1.style.transform="translateY(0%) rotate(0deg)"
//   // img2.style.visibilty="visible";
// })
// text1.addEventListener("mouseleave",()=>{
//   img1.style.opacity="0";
// })
// text2.addEventListener("mouseenter",()=>{
//   img2.style.opacity="1";
//   // img2.style.visibilty="visible";
// })
// text2.addEventListener("mouseleave",()=>{
//   img2.style.opacity="0";
// })
// text3.addEventListener("mouseenter",()=>{
//   img3.style.opacity="1";
//   // img2.style.visibilty="visible";
// })
// text3.addEventListener("mouseleave",()=>{
//   img3.style.opacity="0";
// })


  const textDiv = document.querySelector('.text-div');
  // const images = document.querySelectorAll('.elem img');

  // textDiv.addEventListener('mouseenter', function() {
  //   images.forEach(img => 
  //     {
  //       img.style.opacity = 1
  //       img.style.transform = 'translateY(0) rotate(0deg)';
  //     });
  // });

  // textDiv.addEventListener('mouseleave', function() {
  //   images.forEach(img =>{
  //     img.style.opacity = 0
  //     img.style.transform = 'translateY(10%) rotate(2deg)';
  //   });
  // });

  function showImages(h1) {
    const images = h1.parentNode.parentNode.querySelectorAll('.elem img');
    images.forEach(img => {
      img.style.opacity = 1;
      img.style.transform = 'translateY(0) rotate(0deg)';
    });
  }
  
  function hideImages(h1) {
    const images = h1.parentNode.parentNode.querySelectorAll('.elem img');
    images.forEach(img => {
        img.style.opacity = 0
        img.style.transform = 'translateY(10%) rotate(2deg)';
    });
  }

