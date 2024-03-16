gsap.from("#page1 .circle",{
    scale:0,
    delay:0.2,
    duration:2,
})

gsap.from("#page2 .circle",{
    scale:0,
    delay:1,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 .circle",
        scroll:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})

