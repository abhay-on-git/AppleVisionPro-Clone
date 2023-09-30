const page1 = document.querySelector('.page1');
const videoContainer1 = document.querySelector('#videoContainer1');

// video1 Animation Code 👇
gsap.to('#video1',{
    onStart:()=>{
        document.querySelector('#video1').play();
    },
    scrollTrigger:{
        trigger:'.page1in',
        scroller:'body',
        start:'1% top',
        // markers:true
    },
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
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.page1in',
        scroller:'body',
        start:'top top',
        end:'bottom top',
        pin:true,
        scrub:1,
        markers:true
    },
    
})
tl.to(videoContainer1,{
    top:'-20%',
    height:'140%',
    width:'140%',
})