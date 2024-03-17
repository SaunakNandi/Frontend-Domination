var tl=gsap.timeline()
tl.to('#box1',{
    x:1200,
    rotate:360,
    scale: 0.5,
    duration:2,
    delay:1,
})
tl.to('#box2',{
    x:1200,
    rotate:360,
    scale: 0.5,
    duration:2,
})
tl.to('#box3',{
    x:1200,
    rotate:360,
    scale: 0.5,
    duration:2,
})


// using stagger
// gsap.to('.box',{
//     x:1200,
//     scale:0.5,
//     rotate:360,
//     duration:2,
//     stagger:1,
// })