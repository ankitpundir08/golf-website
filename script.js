var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x -8.5+ "px"
    crsr.style.top = dets.y -8.5 + "px"
    
    blur.style.left = dets.x -145 + "px"
    blur.style.top = dets.y -140 + "px"
})

var h5all = document.querySelectorAll("#nav h5");
h5all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 3.5
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function() {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "black",
    height: "75px",
    duration:0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub:1
    } 
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 60%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    opacity: 0,

    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 1
    }
})

gsap.from("#colon-1", {
    y: -70,
    x: -70,

    scrollTrigger: {
        trigger: "#colon-1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    },
})

gsap.from("#colon-2", {
    x: 70,
    y: 70,

    scrollTrigger: {
        trigger: "#colon-2",
        scroller: "body",
        start: "top 65%",
        end: "top 65%",
        scrub: 3
    },
})

gsap.from("#page4 h1", {
    y:70,

    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 85%",
        end: "top 65%",
        scrub: 3
    }
})



