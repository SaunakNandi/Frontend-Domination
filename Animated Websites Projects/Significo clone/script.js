const jumpArrow = document.querySelector('.down-arrow');

document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.parent-div');
  const pageIds = Array.from(pages).map(page => page.id); // Array of page IDs
  let currentPageIndex = 0;
  
  // Function to show or hide jump arrow based on scroll position
  function toggleJumpArrow() {
    // if(currentPageIndex===-1)
    //   jumpArrow.style.display='none'
    // else 
    if (currentPageIndex < pages.length - 1) {
      jumpArrow.style.display = 'initial';
    } else {
      jumpArrow.style.display = 'none';
    }
  }

  // Initial call to toggle jump arrow visibility
  //toggleJumpArrow();

  // Function to determine the current page index based on scroll position
  function getCurrentPageIndex() {
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const pageTop = page.offsetTop;
      const pageBottom = pageTop + page.offsetHeight;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + window.innerHeight;
      
      // console.log("page ",page)
      // console.log("pageTop ",pageTop)
      // console.log("pageBottom ",pageBottom)
      // console.log("windowTop ",windowTop)
      // console.log("windowBottom ",windowBottom)

      if (windowTop >= pageTop && windowBottom <= pageBottom) {
        return i;
      }
    }
    return -1; // No page found
  }

  // Scroll event listener to update jump arrow visibility and detect current page
  window.addEventListener('scroll', function() {
    currentPageIndex = getCurrentPageIndex();
    console.log(currentPageIndex)
    toggleJumpArrow();

    // Log the ID of the current page
    if (currentPageIndex !== -1) {
      console.log("Current page:", pageIds[currentPageIndex]);
      console.log("currentPageIndex ",currentPageIndex)
      toggleJumpArrow();
    }
  });

  // Function to handle scrolling to the next page
  function scrollToNextPage() {
    let currentPage=getCurrentPageIndex()
    console.log("this is current page ",currentPage)
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      console.log("When jumped to next page ",currentPageIndex)
      toggleJumpArrow()
      pages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
    }
    if(currentPageIndex>=2) currentPageIndex=0
  }

  // Click event listener on the jump arrow to scroll to the next page
  jumpArrow.addEventListener('click', function() {
    scrollToNextPage();
  });
});



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

function jumpToNextParent(element) {
  console.log(element.parentElement.nextElementSibling)
  var parent = element.parentElement.nextElementSibling;
  if (parent) {
      parent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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