// Animation For Large Screens
function animationForLargeScreens(){

// video1 Animation Code 
function video1Animation(){
    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1in',
            scroller:'body',
            start:'1% top',
            // markers:true
        },
        onStart:()=>{
            document.querySelector('#video1').play();
        },
    })
    tl1.to('.page1in .pg1-title',{
        delay:`1s`,
        opacity:`0`,
        ease:`ease`,
    })
    gsap.to('nav',{
        y:`-35%`,
        scrollTrigger:{
            trigger:`nav`,
            scroller:'body',
            start:'2% top',
            end:'50% top',
            scrub:true,
            // markers:true
        },
    })
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        
    })
    tl2.to(videoContainer1,{
        top:'-20%',
        height:'140%',
        width:'140%',
    })
}
video1Animation();

// video2Animation code
function video2Animation(){
    gsap.to('.page2 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page2in',
                    scroller:'body',
                    start:'-10% top',
                    end:'top top',
                    scrub:1,
                    // markers:true
                },
    })
        gsap.to('#videoContainer1',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page2in',
                    scroller:'body',
                    start:'-10% top',
                    end:'top top',
                    scrub:1,
                    // markers:true
                },
    })
    
    gsap.to('.pg2overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page2in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page2in').style.zIndex = 'initial';
        // }
    })

    gsap.fromTo('.page2 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })
    
    gsap.to('.page2 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
    })
}
video2Animation();

// video3 Aniamtaion
function video3Animation(){
    gsap.to('#videoContainer2',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            // pin:true,
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.pg3overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            // pin:true,
            scrub:1,
            // markers:true
        },
    })

    gsap.to('.page3 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page3in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom top',
                    scrub:1,
                    // markers:true
                },
    })

    gsap.fromTo('.page3 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.page3 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    

    gsap.fromTo('.pg3overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.5`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page3in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page3in').style.zIndex = 'initial';
        // }
    })
}
video3Animation();

function video4Animation(){
    gsap.to('#videoContainer3',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    gsap.to('.page4 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page4in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 80%',
                    scrub:1,
                    // markers:true
                },
    })

    gsap.to('.page4 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.fromTo('.page4 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'bottom 10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.pg4overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom 70%',
            scrub:1,
            // markers:true
        },
    })
    gsap.fromTo('.pg4overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.3`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    })
}
video4Animation();

// video5 Animation code
function video5Animation(){
    gsap.to('#videoContainer4',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    var tl3 = gsap.timeline();
    tl3.fromTo('.page5 #pg5h1a',
    {
        bottom:`-15%`,
    },
    {
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page5in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 80%',
                    scrub:1,
                    // markers:true
                },
    })

    tl3.to('.page5 #pg5h1a',
    {
        top:`-15%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'bottom 80%',
            end:'bottom 45%',
            scrub:1,
            // markers:true
        },
    })
    tl3.fromTo('.page5 #pg5h1b',
    {
        bottom:`-10%`,
    },
    {
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page5in',
                    scroller:'body',
                    start:'bottom 60%',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl3.to('.page5 #pg5h1b',
    {
        top:`-10%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.to('.pg5overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'top top',
            end:'bottom 50%',
            scrub:1,
            // markers:true
        },
    })
    gsap.fromTo('.pg5overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.1`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    })
}
video5Animation();

// Page6 Animation code
function page6Animation(){
    gsap.to('#videoContainer5',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'-5% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    var tl4 = gsap.timeline();
    tl4.from('.page6in #pg6img1',
    {
        y:`600%`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page6in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl4.from('.pg6Content h2',
    {
        opacity:`0`,
        y:`1500%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top top',
            end:'bottom 40%',
            scrub:1,
            // markers:true
        },
    })
    tl4.from('.page6 p',
    {
        opacity:`0`,
        y:`1600%`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page6in',
                    scroller:'body',
                    start:'top -5%',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl4.from('.page6 #pg6img2',
    {
        y:`100%`,
        ease:`Expo.ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top -10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.to('.pg6overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            pin:true,
            // markers:true
        },
    })
    // gsap.fromTo('.pg5overlay',
    // {
    //     opacity:`0`,
    // },
    // {
    //     opacity:`0.1`,
    //     ease:`ease`,
    //     scrollTrigger:{
    //         trigger:'.page5in',
    //         scroller:'body',
    //         start:'top top',
    //         end:'bottom top',
    //         pin:true,
    //         scrub:1,
    //         // markers:true
    //     },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    // })
}
page6Animation();

// Static Page Animation code
function staticPageAnimation(pageInDiv , h1InPageNo , videoContainer , pageNoOverlay){
var tl5 = gsap.timeline();
tl5.to(h1InPageNo,{
    y:`-250%`,
    ease:`ease`,
    scrollTrigger:{
        trigger:pageInDiv,
        scroller:`body`,
        start:`top top`,
        end:`bottom 50%`,
        scrub:1,
        pin:true,
    }
})
tl5.to([videoContainer,pageNoOverlay],{
    width:`90%`,
    ease:`ease`,
    scrollTrigger:{
        trigger:pageInDiv,
        scroller:`body`,
        start:`top -30%`,
        end:`bottom top`,
        scrub:1,
        // markers:true
    }
})
}

function staticPageAnimationCalls(){
    staticPageAnimation('.page7in','.page7 .h1','#videoContainer6','.pg7overlay');
    staticPageAnimation('.page8in','.page8 .h1','#videoContainer7','.pg8overlay');
    staticPageAnimation('.page9in','.page9 .h1','#videoContainer8','.pg9overlay');
    staticPageAnimation('.page10in','.page10 .h1','#videoContainer9','.pg10overlay');
}
staticPageAnimationCalls();

// Canvas WallPaper Code
function canvasWallpaperAnimation (){
    var tl = gsap.timeline();
   tl.to(['#pg12img'],{
    transform:`scale(0.8)`,
    ease:`ease`,
    scrollTrigger:{
        trigger:`#pg12img`,
        start:`top 40%`,
        end:`20% 20%`,
        scroller:`body`,
        scrub:1,
        // markers:true,
    }
   })
   tl.to(['#pg12img'],{
    opacity:`0`,
    ease:`ease`,
    scrollTrigger:{
        trigger:`#pg12img`,
        start:`top 20%`,
        end:`top top`,
        scroller:`body`,
        scrub:1,
        // markers:true,
    }
   })
}
canvasWallpaperAnimation();

// Canvas Code
function canvas(){
    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0199.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0100.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0050.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0150.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0025.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0075.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0125.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0175.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0012.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0038.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0063.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0088.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0113.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0138.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0163.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0188.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0006.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0019.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0032.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0044.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0057.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0069.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0082.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0094.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0107.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0119.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0132.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0144.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0157.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0169.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0182.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0194.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0003.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0009.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0016.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0022.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0029.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0035.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0041.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0047.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0054.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0060.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0066.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0072.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0079.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0085.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0091.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0097.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0104.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0110.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0116.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0122.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0129.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0135.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0141.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0147.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0154.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0160.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0166.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0172.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0179.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0185.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0191.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0197.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0001.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0005.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0008.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0011.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0014.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0018.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0021.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0024.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0027.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0031.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0034.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0037.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0040.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0043.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0046.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0049.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0052.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0056.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0059.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0062.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0065.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0068.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0071.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0074.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0077.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0081.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0084.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0087.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0090.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0093.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0096.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0099.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0102.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0106.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0109.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0112.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0115.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0118.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0121.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0124.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0127.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0131.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0134.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0137.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0140.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0143.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0146.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0149.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0152.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0156.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0159.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0162.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0165.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0168.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0171.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0174.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0177.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0181.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0184.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0187.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0190.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0193.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0196.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0002.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0004.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0007.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0010.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0013.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0015.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0017.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0020.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0023.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0026.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0028.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0030.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0033.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0036.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0039.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0042.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0045.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0048.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0051.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0053.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0055.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0058.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0061.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0064.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0067.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0070.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0073.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0076.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0078.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0080.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0083.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0086.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0089.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0092.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0095.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0098.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0101.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0103.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0105.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0108.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0111.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0114.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0117.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0120.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0123.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0126.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0128.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0130.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0133.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0136.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0139.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0142.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0145.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0148.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0151.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0153.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0155.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0158.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0161.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0164.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0167.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0170.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0173.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0176.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0178.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0180.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0183.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0186.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0189.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0192.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0195.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0198.jpg
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 200;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `ease`,
      scrollTrigger: {
        scrub: 1,
        trigger: canvas,
        //   set start end according to preference
        start: `top top`,
        end: `500% top`,
        scroller: `body`,
        // markers:true
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    // Ensure GSAP is properly initialized and imported

// Pin the canvas using GSAP
ScrollTrigger.create({
      trigger: canvas,  // Use the canvas itself as the trigger
      start: "top top",  // Start pinning when the top of the canvas reaches the top of the viewport
      end: "600% top",  // Stop pinning when the bottom of the canvas reaches the top of the viewport
      pin: true,
      scroller:`body`,
    //   markers:true
  });
  
}
canvas();

// Canvas bgpgs-h3 Animation Code
function canvasBgpgsH3Animation() {
    const canvasBgPgsH3 = document.querySelectorAll('.canvasbgpgs h3');

    canvasBgPgsH3.forEach((h3, index) => {
        gsap.from(h3, {
            opacity: 0,
            ease: 'ease',
            scrollTrigger: {
                trigger: h3,
                start: 'top center',
                end: `+=200`,
                scrub: 1,
                scroller: 'body'
            }
        });
    });
}

canvasBgpgsH3Animation();

}


// Animation For Small Screens
function animationForSmallScreens(){

// video1 Animation Code 
function video1Animation(){
    var tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1in',
            scroller:'body',
            start:'1% top',
            // markers:true
        },
        onStart:()=>{
            document.querySelector('#video1').play();
        },
    })
    tl1.to('.page1in .pg1-title',{
        delay:`1s`,
        opacity:`0`,
        ease:`ease`,
    })
    gsap.to('nav',{
        y:`-35%`,
        scrollTrigger:{
            trigger:`nav`,
            scroller:'body',
            start:'2% top',
            end:'50% top',
            scrub:true,
            // markers:true
        },
    })
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.page1in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        
    })
    tl2.to(videoContainer1,{
        top:'-20%',
        height:'140%',
        width:'220%',
    })
}
video1Animation();
// video2Animation code
function video2Animation(){
    gsap.to('.page2 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page2in',
                    scroller:'body',
                    start:'-10% top',
                    end:'top top',
                    scrub:1,
                    // markers:true
                },
    })
        gsap.to('#videoContainer1',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page2in',
                    scroller:'body',
                    start:'-10% top',
                    end:'top top',
                    scrub:1,
                    // markers:true
                },
    })
    
    gsap.to('.pg2overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page2in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page2in').style.zIndex = 'initial';
        // }
    })

    gsap.fromTo('.page2 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })
    
    gsap.to('.page2 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
    })
}
video2Animation();

// video3 Aniamtaion
function video3Animation(){
    gsap.to('#videoContainer2',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            // pin:true,
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.pg3overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            // pin:true,
            scrub:1,
            // markers:true
        },
    })

    gsap.to('.page3 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page3in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom top',
                    scrub:1,
                    // markers:true
                },
    })

    gsap.fromTo('.page3 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.page3 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    

    gsap.fromTo('.pg3overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.5`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page3in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page3in').style.zIndex = 'initial';
        // }
    })
}
video3Animation();

function video4Animation(){
    gsap.to('#videoContainer3',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    gsap.to('.page4 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page4in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 80%',
                    scrub:1,
                    // markers:true
                },
    })

    gsap.to('.page4 .h1',{
        top:`20%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.fromTo('.page4 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'bottom 10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })

    gsap.to('.pg4overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom 70%',
            scrub:1,
            // markers:true
        },
    })
    gsap.fromTo('.pg4overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.3`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page4in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    })
}
video4Animation();

// video5 Animation code
function video5Animation(){
    gsap.to('#videoContainer4',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'-1% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    var tl3 = gsap.timeline();
    tl3.fromTo('.page5 #pg5h1a',
    {
        bottom:`-15%`,
    },
    {
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page5in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 80%',
                    scrub:1,
                    // markers:true
                },
    })

    tl3.to('.page5 #pg5h1a',
    {
        top:`-15%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'bottom 80%',
            end:'bottom 45%',
            scrub:1,
            // markers:true
        },
    })
    tl3.fromTo('.page5 #pg5h1b',
    {
        bottom:`-10%`,
    },
    {
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page5in',
                    scroller:'body',
                    start:'bottom 60%',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl3.to('.page5 #pg5h1b',
    {
        top:`-10%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'bottom 20%',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.to('.pg5overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'top top',
            end:'bottom 50%',
            scrub:1,
            // markers:true
        },
    })
    gsap.fromTo('.pg5overlay',
    {
        opacity:`0`,
    },
    {
        opacity:`0.1`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page5in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            pin:true,
            scrub:1,
            // markers:true
        },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    })
}
video5Animation();

// Page6 Animation code
function page6Animation(){
    gsap.to('#videoContainer5',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'-5% top',
            end :`top top`,
            scrub:1,
            // markers:true
        }
    })
    var tl4 = gsap.timeline();
    tl4.from('.page6in #pg6img1',
    {
        y:`600%`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page6in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl4.from('.pg6Content h2',
    {
        opacity:`0`,
        y:`1500%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top top',
            end:'bottom 40%',
            scrub:1,
            // markers:true
        },
    })
    tl4.from('.page6 p',
    {
        opacity:`0`,
        y:`1600%`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page6in',
                    scroller:'body',
                    start:'top -5%',
                    end:'bottom 40%',
                    scrub:1,
                    // markers:true
                },
    })

    tl4.from('.page6 #pg6img2',
    {
        y:`100%`,
        ease:`Expo.ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top -10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    tl4.from('.pg6btn',
    {
        display:`block`,
        y:`210%`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top -10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        },
    })
    
    gsap.to('.pg6overlay',{
        opacity:`0`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page6in',
            scroller:'body',
            start:'top top',
            end:'bottom top',
            scrub:1,
            pin:true,
            // markers:true
        },
    })
    // gsap.fromTo('.pg5overlay',
    // {
    //     opacity:`0`,
    // },
    // {
    //     opacity:`0.1`,
    //     ease:`ease`,
    //     scrollTrigger:{
    //         trigger:'.page5in',
    //         scroller:'body',
    //         start:'top top',
    //         end:'bottom top',
    //         pin:true,
    //         scrub:1,
    //         // markers:true
    //     },
        // onStart: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 1;
        // },
        // onComplete: () => {
        //     // Change z-index to 1 when animation starts
        //     document.querySelector('.page4in').style.zIndex = 'initial';
        // }
    // })
}
page6Animation();

// Static Page Animation code
function staticPageAnimation(pageInDiv , h1InPageNo , videoContainer , pageNoOverlay){
var tl5 = gsap.timeline();
tl5.to(h1InPageNo,{
    y:`-250%`,
    ease:`ease`,
    scrollTrigger:{
        trigger:pageInDiv,
        scroller:`body`,
        start:`top top`,
        end:`bottom 50%`,
        scrub:1,
        pin:true,
    }
})
tl5.to([videoContainer,pageNoOverlay],{
    width:`90%`,
    ease:`ease`,
    scrollTrigger:{
        trigger:pageInDiv,
        scroller:`body`,
        start:`top -30%`,
        end:`bottom top`,
        scrub:1,
        // markers:true
    }
})
}

function staticPageAnimationCalls(){
    staticPageAnimation('.page7in','.page7 .h1','#videoContainer6','.pg7overlay');
    staticPageAnimation('.page8in','.page8 .h1','#videoContainer7','.pg8overlay');
    staticPageAnimation('.page9in','.page9 .h1','#videoContainer8','.pg9overlay');
    staticPageAnimation('.page10in','.page10 .h1','#videoContainer9','.pg10overlay');
}
staticPageAnimationCalls();

// Canvas WallPaper Code
function canvasWallpaperAnimation (){
    var tl = gsap.timeline();
   tl.to(['#pg12img'],{
    transform:`scale(0.6)`,
    ease:`ease`,
    scrollTrigger:{
        trigger:`#pg12img`,
        start:`top 40%`,
        end:`20% 20%`,
        scroller:`body`,
        scrub:1,
        // markers:true,
    }
   })
   tl.to(['#pg12img'],{
    opacity:`0`,
    ease:`ease`,
    scrollTrigger:{
        trigger:`#pg12img`,
        start:`top 20%`,
        end:`top top`,
        scroller:`body`,
        scrub:1,
        // markers:true,
    }
   })
}
canvasWallpaperAnimation();

// Canvas Code
function canvas(){
    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    
    function files(index) {
      var data = `
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0199.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0100.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0050.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0150.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0025.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0075.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0125.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0175.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0012.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0038.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0063.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0088.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0113.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0138.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0163.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0188.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0006.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0019.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0032.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0044.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0057.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0069.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0082.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0094.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0107.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0119.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0132.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0144.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0157.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0169.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0182.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0194.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0003.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0009.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0016.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0022.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0029.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0035.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0041.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0047.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0054.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0060.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0066.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0072.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0079.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0085.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0091.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0097.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0104.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0110.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0116.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0122.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0129.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0135.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0141.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0147.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0154.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0160.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0166.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0172.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0179.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0185.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0191.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0197.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0001.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0005.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0008.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0011.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0014.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0018.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0021.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0024.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0027.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0031.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0034.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0037.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0040.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0043.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0046.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0049.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0052.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0056.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0059.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0062.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0065.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0068.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0071.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0074.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0077.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0081.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0084.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0087.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0090.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0093.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0096.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0099.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0102.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0106.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0109.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0112.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0115.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0118.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0121.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0124.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0127.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0131.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0134.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0137.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0140.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0143.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0146.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0149.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0152.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0156.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0159.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0162.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0165.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0168.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0171.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0174.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0177.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0181.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0184.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0187.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0190.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0193.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0196.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0002.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0004.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0007.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0010.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0013.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0015.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0017.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0020.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0023.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0026.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0028.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0030.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0033.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0036.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0039.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0042.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0045.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0048.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0051.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0053.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0055.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0058.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0061.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0064.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0067.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0070.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0073.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0076.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0078.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0080.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0083.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0086.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0089.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0092.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0095.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0098.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0101.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0103.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0105.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0108.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0111.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0114.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0117.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0120.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0123.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0126.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0128.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0130.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0133.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0136.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0139.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0142.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0145.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0148.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0151.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0153.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0155.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0158.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0161.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0164.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0167.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0170.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0173.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0176.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0178.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0180.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0183.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0186.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0189.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0192.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0195.jpg
https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/0198.jpg
     `;
      return data.split("\n")[index];
    }
    
    const frameCount = 200;
    
    const images = [];
    const imageSeq = {
      frame: 1,
    };
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `ease`,
      scrollTrigger: {
        scrub: 1,
        trigger: canvas,
        //   set start end according to preference
        start: `top top`,
        end: `500% top`,
        scroller: `body`,
        // markers:true
      },
      onUpdate: render,
    });
    
    images[1].onload = render;
    
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
    
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    // Ensure GSAP is properly initialized and imported

// Pin the canvas using GSAP
ScrollTrigger.create({
      trigger: canvas,  // Use the canvas itself as the trigger
      start: "top top",  // Start pinning when the top of the canvas reaches the top of the viewport
      end: "600% top",  // Stop pinning when the bottom of the canvas reaches the top of the viewport
      pin: true,
      scroller:`body`,
    //   markers:true
  });
  
}
canvas();

// Canvas bgpgs-h3 Animation Code
function canvasBgpgsH3Animation() {
    const canvasBgPgsH3 = document.querySelectorAll('.canvasbgpgs h3');

    canvasBgPgsH3.forEach((h3, index) => {
        gsap.from(h3, {
            opacity: 0,
            ease: 'ease',
            scrollTrigger: {
                trigger: h3,
                start: 'top center',
                end: `+=200`,
                scrub: 1,
                scroller: 'body'
            }
        });
    });
}

canvasBgpgsH3Animation();
}

// Function to handle animation based on screen size 
function handleScreenAnimation() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 600) {
        animationForSmallScreens();
    } else {
        animationForLargeScreens();
    }
  }
  
  // Call the appropriate animation on page load and resize 
  document.addEventListener('DOMContentLoaded', () => {
    handleScreenAnimation();
  });
