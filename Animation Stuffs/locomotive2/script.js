const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();


gsap.from("#page1 .box",{
    scale:0,
    duration:1,
    opacity:0,
    delay:1
})

gsap.from("#page2 .box",{
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"#main",
        start:"top 50%",
        markers:true
    }
})
