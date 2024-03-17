gsap.to("#page2 h1",{
    transform:"translateX(-130%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:1,
        markers:true,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
})
