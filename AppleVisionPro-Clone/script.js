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


    gsap.to('.h1',{
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
        // pin:true,
        scrub:1,
        // markers:true
    }
})
gsap.to('.h1',{
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
    }
})