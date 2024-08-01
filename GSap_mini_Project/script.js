// cursor logic

var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (dets){
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration : 1,
            ease : "back.out"
        })
});

// 


// svg

var initailPath = `M 100 100 Q 600 100 1400 100`;

var finalPath = `M 100 100 Q 600 100 1400 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", function(dets){
      initailPath = `M 100 100 Q ${dets.x}  ${dets.y} 1400 100` ;
      gsap.to("svg path", {
        attr : {d:initailPath},
        duration : 0.5,
        ease : "power3.out",
      })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
      attr : {d:finalPath},
      duration : 2,
      ease : "elastic.out(1,0.2)",
    })
})


// 






var tl = gsap.timeline()
tl.from('nav h1 , nav h4, nav button', {
    y : -40,
    opacity : 0,
    delay :0.5,
    duration : 0.3,
    stagger : 0.5
})

tl.from(".centerpart1 h1" , {
    x : -400,
    opacity: 0,
    duration : 0.8
})

tl.from(".centerpart1 p ,  .centerpart1 button" , {
    x : -100,
    opacity: 0,
    duration : 0.8,
    delay : 0.8
})

tl.from(".centerpart2 img", {
    opacity : 0,
    duration: 0.4,
    y : -200
}, '-=0.5')



tl.from(".section1bottom img", {
    opacity : 0,
    y :  30,
    stagger : 0.5,
    duration : 0.5
})



var tl2 = gsap.timeline({
     scrollTrigger : {
        trigger : '.section2',
        scroller : 'body',
        start : 'top 80%',
        scrub : 2,
        end : 'top -50'
     }
})

tl2.from(".services", {
    y : 40, 
    opacity : 0,
    duration : 1
})

tl2.from(".elem.line1.left", {
     x : -800,
     opacity: 0,
     duration: 0.8
},'kuchbhi')

tl2.from(".elem.line1.right", {
    x : 800,
    opacity: 0,
    duration: 0.8
},'kuchbhi')

tl2.from(".elem.line2.left", {
    x : -800,
    opacity: 0,
    duration: 0.8
},'thikh')

tl2.from(".elem.line2.right", {
    x : 800,
    opacity: 0,
    duration: 0.8
},'thikh')




