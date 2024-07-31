// to = initail to finalstate 
// gsap.to("#box", {
//     x: 1000,
//     duration : 1,
//     delay : 1,
//     backgroundColor: "blue",
//     rotate : 360,
//     borderRadius : "50%",
//     repeat : 1,  // repeat element 2 times (1 bar to khud se chalega frr repeat 1 hoga) 
//     yoyo : true  // yoyo element ko initial se final frr final se inital karga element ko
// })


// from =  final to initial state
// gsap.from("#box", {
//     x: 1000,
//     duration : 3,
//     delay : 1,
//     backgroundColor: "blue",
//     rotate : 360,
//     borderRadius : "50%"
// })


// gsap.from("h1", {
//     opacity : 0,
//     color:  'red',
//     duration: 3,
//     y : 120,
//     delay: 1,
//     stagger : 1 // stagger - same name ke eleement ko ek ek karke chalta h  

// })


// timeline 

// var tl = gsap.timeline();

// tl.to("#box1", {
//     x:1500,
//     duration: 1.5,
//     backgroundColor: "blue",
//     delay : 1,
// })

// tl.to("#box2", {
//     x:1500,
//     duration: 1.5,
//     backgroundColor: "blue"
// })

// tl.to("#box3", {
//     x:1500,
//     duration: 1.5,
//     backgroundColor: "blue"
// })

// var nav = gsap.timeline();

// nav.from('h2',{
//     y:-20,
//     opacity : 0,
//     duration : 1,
//     delay : 0.5
// })

// nav.from('h4', {
//      y: -20,
//      opacity: 0,
//      duration: 1.5,
//      stagger : 0.3
// })

// gsap.from("#page1 #box",{
//       scale:0,
//       delay:1,
//       duration: 2,
//       rotate: 180
// } )

// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration: 2,
//     rotate: 180,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers : true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub : 2 ,// scrub ki value ya toh true 0r fasle or 1 to 5 they sakte h scrub smottness ke kaam ata h
//         pin : true // 
//     }
// } )


// gsap.to("#page2 h1",{
//     transform : "translateX(-180%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller: "body",
//         markers : true,
//         start :"top 0%",
//         end : "top -150%",
//         scrub : 2,
//         pin: true
//     }
// })



// SVG

// var initailPath = `M 10 100 Q 500 100 990 100`;

// var finalPath = `M 10 100 Q 500 100 990 100`;

// var string = document.querySelector("#string");

// string.addEventListener("mousemove", function(dets){
//       initailPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100` ;
//       gsap.to("svg path", {
//         attr : {d:initailPath},
//         duration : 0.3,
//         ease : "power3.out",
//       })
// })

// string.addEventListener("mouseleave", function(){
//     gsap.to("svg path", {
//       attr : {d:finalPath},
//       duration : 1.5,
//       ease : "elastic.out(1,0.2)",
//     })
// })
  

// CURSOR

// var main = document.querySelector("#main");
// var cursor = document.querySelector("#cursor");
// var image = document.querySelector("#image");

// main.addEventListener("mousemove", function (dets){
//         gsap.to(cursor, {
//             x: dets.x,
//             y: dets.y,
//             duration : 1,
//             ease : "back.out"
//         })
// });

// image.addEventListener("mouseenter", function (dets){
//   cursor.innerHTML = "View More"
//     gsap.to(cursor, {
//       scale : 4,
//       duration : 1,
//       backgroundColor : '#ffffff5c'
      
//     })
// });

// image.addEventListener("mouseleave", function (dets){
//   cursor.innerHTML = ""
//   gsap.to(cursor, {
//     scale : 1,
//     duration : 1,
//      backgroundColor : 'white'
   
//   })
// });



// Navbar with timeline

// var menuicon = document.querySelector("#nav i");
// var crossicon = document.querySelector("#full i");

// var tl  = gsap.timeline();

// tl.to("#full",{
//   right : 0,
//   duration : 0.5
// })

// tl.from("#full h4",{
//     x : 200,
//     duration: 0.5,
//     stagger : 0.28,
//     opacity : 0
// })

// tl.from("#full i",{
//   opacity : 0
// })

// tl.pause();

// menuicon.addEventListener("click", function() {

//   tl.play();
// });

// crossicon.addEventListener("click", function() {
//     tl.reverse()
// });



// // TEXt animation 

// function textbreaker(){
//   //what is will do ex u wrote rohan - r o h a n in spantag
//     var h1 =  document.querySelector("h1");
//     var h1text = document.querySelector("h1").textContent;
//     var splittext = h1text.split('');
//     var clutter = '';

//      splittext.forEach(function (e, idx){
//       if(idx < 5){
//         clutter +=  `<span class='a'>${e}</span>`;
//       }else {
//         clutter +=  `<span class='b'>${e}</span>`;
//       } 
// });

// h1.innerHTML = clutter;

// }

// textbreaker()
// gsap.from("h1 .a", {
//    y : 50,
//    opacity : 0,
//    duration : 2,
//    delay: 1,
//    stagger: 0.15,
//    color: 'yellow'
// })

// gsap.from("h1 .b", {
//   y : 50,
//   opacity : 0,
//   duration : 2,
//   delay: 1,
//   stagger: -0.15,
//   color: 'red'
// })



// TEXt animation with scroll

// window.addEventListener("wheel", function(dets) {
//        if(dets.deltaY > 0 ){
//            gsap.to(".marque",{
//               transform : 'translateX(-200%)',
//               duration :5,
//               ease : 'none',
//               repeat : -1,
             
//            })

//            gsap.to(".marque img",{
//             rotate : 180  ,
//             duration : 1
//          })
//        }
//        else {
//         gsap.to(".marque",{
//           transform : 'translateX(0%)',
//           duration :5,
//           ease : 'none',
//           repeat : -1,
//        })

//        gsap.to(".marque img",{
//         rotate : 0 ,
//         duration : 1, 
//      })
//        }
// })