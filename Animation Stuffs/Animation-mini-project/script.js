
// For one element
// var h1Text = document.querySelector("#firsth1").textContent;
// var splitedText = h1Text.split("");
// var clutter = "";
// splitedText.forEach(function (e) {
//   clutter += `<span>${e}</span>`;
// });

// document.querySelector("#firsth1").innerHTML = clutter;

// for multiple elements


function locoScroll()
{
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

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
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());



  
}

function textSplitting()
{
  var allH1 = document.querySelectorAll("#page2 h1");
  allH1.forEach((e)=>{
    var h1Text=e.textContent
    var clutter=""
    var splitedText=h1Text.split("")
    splitedText.forEach((e)=>{
      clutter += `<span>${e}</span>`
    })
    e.innerHTML=clutter
  })
}
function gsapAnimaton()
{
  gsap.to("#page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      scrub: 2,
      markers: true,
      start: "top 60%",
      end: "top -10%",
    },
  });
}

textSplitting()
gsapAnimaton();
//locoScroll()