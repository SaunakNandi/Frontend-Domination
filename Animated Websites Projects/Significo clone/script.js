function homePageAnimation() {
  gsap.set(".slidesm", {
    scale: 5,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      // end: "bottom -10%",
      end: "bottom bottom",
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
}

function slider() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function ourTeam() {
  document.querySelectorAll(".listelem").forEach((e) => {
    e.addEventListener("mousemove", function (pos) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, pos.clientX),
        ease: Power2,
        duration: 0.5,
      });
    });
    e.addEventListener("mouseleave", function (pos) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power2,
        duration: 0.5,
      });
    });
  });
}

function paraAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power2,
  });
}

(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsule",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: -200,
    ease: Power4,
  });
}

function bodyColorChange()
{
  document.querySelectorAll(".section").forEach(function (e){
    console.log(e.dataset)
    
    ScrollTrigger.create({
      trigger:e,
      start:"top 50%",
      end:"bottom 50%",
      scrub: 1,
      onEnter:()=>{
        document.body.setAttribute("theme",e.dataset.color)
      },
      onEnterBack:()=>{
        document.body.setAttribute("theme",e.dataset.color)
      }
    })
  })
}

// document.querySelectorAll(".card").forEach((x)=>{
//   ScrollTrigger.create({
//     trigger:x,
//     start:"top 60%",
//     end:"bottom -20%",
//     markers:true,
//     // scrub: 1,
//     onEnter:()=>{
//       x.style.width='90%'
//       x.style.backgroundColor='black'
//       x.style.color='white'
//       x.style.transition='all ease-out 0.5s'
//     },
//     onLeave: () => {
//       x.style.width='70%'
//       x.style.backgroundColor='transparent'
//       x.style.color='white'
//     },
//     onEnterBack:()=>{
//       x.style.width='70%'
//       x.style.backgroundColor='transparent'
//       x.style.color='white'
//     }
//   })
// })
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.abc',
      start: "top 60%",
      end: "bottom 10%",
      scrub: 2,
      markers:true,
  },
});
tl2.to('.card1',{
    width:"90%",
    backgroundColor:"black",
    color:"white",
    // ease:Power2
    // duration:0.1,
  })

  tl2.to('.card2',{
    width:"90%",
    backgroundColor:"black",
    color:"white",
    // duration:0.1,
  })
  tl2.to('.card3',{
    width:"90%",
    backgroundColor:"black",
    color:"white",
    // duration:0.1,
  })
  tl2.to('.card4',{
    width:"90%",
    backgroundColor:"black",
    color:"white",
    // duration:0.1,
  })

homePageAnimation();
slider();
ourTeam();
paraAnimation();
capsuleAnimation()
bodyColorChange()