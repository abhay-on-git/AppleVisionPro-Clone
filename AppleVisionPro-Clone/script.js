const page1 = document.querySelector('.page1');
const videoContainer1 = document.querySelector('#videoContainer1');

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

// video2Animation code
