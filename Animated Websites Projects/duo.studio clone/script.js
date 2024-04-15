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
document.addEventListener("mousemove", (coord) => {
  crsr.style.left = coord.x+ 10 + "px";
  crsr.style.top = coord.y+ 10 + "px";
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
    end: "top -117%",
    scrub: 2,
  },
});
tl2.to(
  "#main",
  {
    backgroundColor: "#fff",
    ease:Power4
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
var tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: "#main",
      markers:true,
      start: "top -200%",
      end: "top -220%",
      scrub: 3
  }
})

tl3.to('.page3 h1',{
  color:"#fff"
},"change")
tl3.to("#main",{
  backgroundColor:"#0F0D0D"
},"change")
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

var boxes=document.querySelectorAll(".box")
boxes.forEach((box)=>{
  box.addEventListener("mouseenter",()=>{
    var att=box.getAttribute("data-image")
    // box.style.backgroundColor="red"
    crsr.style.width="300px"
    crsr.style.height="250px"
    crsr.style.borderRadius="0"
    crsr.style.backgroundImage=`url(${att})`
    crsr.style.mixBlendMode="normal"
  })
  box.addEventListener("mouseleave",()=>{
    // box.style.backgroundColor="transparent"
    crsr.style.backgroundImage="none"
    crsr.style.borderRadius="50%"
    crsr.style.height= "15px";
    crsr.style.width= "15px";
    crsr.style.mixBlendMode="difference"
  })
})


var h4=document.querySelectorAll('#nav h4')
var purple=document.querySelector('#purple')
h4.forEach((elem)=>{
  elem.addEventListener('mouseenter',()=>{
    purple.style.display='block'
    purple.style.opacity="1"
  })
  elem.addEventListener('mouseleave',()=>{
    purple.style.display='none'
    purple.style.opacity="0"
  })
})

function playVideo()
{
  const video=document.querySelector('.page3-part1 video')

  video.addEventListener('mouseenter',()=>{
    video.play()
  })
  video.addEventListener('mouseleave',()=>{
    video.pause()
  })
}
playVideo()