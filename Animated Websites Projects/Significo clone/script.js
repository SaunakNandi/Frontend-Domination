
const downArrow = document.querySelector('.down-arrow');

const downArrowAnchor = document.querySelector('.down-arrow a');
let currentPageId='page1'
// Get the position of each page relative to the viewport

// Add event listener to the window's scroll event
window.addEventListener('scroll', function() {
  // Get the position of the .down-arrow relative to the viewport
  const downArrowRect = downArrow.getBoundingClientRect();
  const page1Rect = document.getElementById('page1').getBoundingClientRect();
  const page2Rect = document.getElementById('page2').getBoundingClientRect();
  const page3Rect = document.getElementById('page3').getBoundingClientRect();
  const page4Rect = document.getElementById('page4').getBoundingClientRect();
  const page5Rect = document.getElementById('page5').getBoundingClientRect();

  // Raise an alert message showing the id of the page currently touched
  if (page1Rect.top >= 0 && page1Rect.top <= window.innerHeight) {
    downArrow.style.display='initial'
    currentPageId = 'page1';
  }
  else if (downArrowRect.top <= page2Rect.bottom && downArrowRect.top > page2Rect.top) {
    downArrow.style.display='initial'
    currentPageId = 'page2';
    console.log(currentPageId);
  } else if (downArrowRect.top <= page3Rect.bottom && downArrowRect.top > page3Rect.top) {
    downArrow.style.display='none'
    currentPageId = 'page3';
    console.log(currentPageId);
  } else if (downArrowRect.top <= page4Rect.bottom && downArrowRect.top > page4Rect.top) {
    currentPageId = 'page4';
    downArrow.style.display='none'
    console.log(currentPageId);
  } else if (downArrowRect.top < page5Rect.bottom && downArrowRect.top > page5Rect.top) {
    currentPageId = 'page5';
    downArrow.style.display='none'
    console.log(currentPageId);
  }
  

  // Check if the .down-arrow touches the bottom border of the window
  // if (downArrowRect.bottom >= window.innerHeight) {
  //   // Raise an alert message indicating the border is touched
  //   alert('The down-arrow touched the border line');
  // }
});
function jumpToNextParent()
{
  if (currentPageId==='page1' || currentPageId==='page2') {
    const nextPageId = 'page' + (parseInt(currentPageId.substring(4)) + 1);
    downArrowAnchor.href = 'http://127.0.0.1:5500/Significo%20clone/index.html#' + nextPageId;
    console.log(nextPageId)
  }
}


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
    // console.log(e.dataset.color)
    
    ScrollTrigger.create({
      trigger:e,
      start:"top 50%",
      end:"bottom 50%",
      scrub: 1,
      onEnter:()=>{
        // jumpArrow.style.display='none'
        document.body.setAttribute("theme",e.dataset.color)
      },
      onEnterBack:()=>{
        document.body.setAttribute("theme",e.dataset.color)
      }
    })
  })
}

// function jumpToNextParent(element) {
//   console.log(element.parentElement.nextElementSibling)
//   var parent = element.parentElement.nextElementSibling;
//   if (parent) {
//       parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }
// }

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