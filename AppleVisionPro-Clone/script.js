const page1 = document.querySelector('.page1');
const videoContainer1 = document.querySelector('#videoContainer1');

// video1 Animation Code 👇
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
        onStart: () => {
            // Change z-index to 1 when animation starts
            document.querySelector('.page2in').style.zIndex = 1;
        },
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
    
    gsap.fromTo('.page2 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0.7`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page2in',
            scroller:'body',
            start:'bottom 10%',
            end:'bottom top',
            scrub:1,
            // markers:true
        }
    })
}
video2Animation();

// video3 Aniamtaion
function video3Animation(){
    gsap.to('#videoContainer2',{
        opacity:`0.3`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'-0.5% top',
            end :`top top`,
            // pin:true,
            // end:'bottom top',
            scrub:1,
            // markers:true
        }
    })
    gsap.to('.page3 .h1',{
        opacity:`1`,
        ease:`ease`,
        scrollTrigger:{
                    trigger:'.page3in',
                    scroller:'body',
                    start:'top top',
                    end:'bottom 80%',
                    scrub:1,
                    // markers:true
                },
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
    
    gsap.fromTo('.page3 .h1',
    {
        opacity:`1`,
    },
    {
        opacity:`0.7`,
        ease:`ease`,
        scrollTrigger:{
            trigger:'.page3in',
            scroller:'body',
            start:'bottom 10%',
            end:'bottom top',
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
            end:'bottom 70%',
            // pin:true,
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
        onStart: () => {
            // Change z-index to 1 when animation starts
            document.querySelector('.page3in').style.zIndex = 1;
        },
    })
}
video3Animation();