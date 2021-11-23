window.onload=function(){
    const wrap=document.getElementById('wrap');
    const loading=document.getElementsByClassName('loadingio-spinner-spinner-3b1t6err0ft').item(0);
    setTimeout(function(){
        loading.style.display='none'
        wrap.style.display='block';
    },500);

    const hamburger=document.getElementById('hamburgerbtn');
    const hamburgermenu=document.getElementById('hamburgermenu');
    console.log(hamburgermenu);
    hamburger.addEventListener('click',function(){
        if(hamburgermenu.className=='hamburgermenuclass'){
            hamburgermenu.classList.remove('hamburgermenuclass');
            hamburgermenu.classList.add('hamburgermenutoggle');
        }else {
            hamburgermenu.classList.remove('hamburgermenutoggle');
            hamburgermenu.classList.add('hamburgermenuclass');
        }
    })

    var slider1 = document.querySelector('#slider1')
    var video =  slider1.querySelector('video')

    var controller1 = new ScrollMagic.Controller();
    var animation1 = new TweenMax.from('#cutton1',30, {
        opacity:"1"
    })
    var scene = new ScrollMagic.Scene({
    duration: 6200,
    triggerElement: slider1,
    triggerHook: 0
    })
    // .addIndicators()
    .setTween(animation1)
    .setPin(slider1)
    .addTo(controller1)
    // .addIndicators();

    var accelamount = 0.1;
    var scrollpos = 0;
    var delay = 0;

    scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
    })

    setInterval(() => {
    video.currentTime = scrollpos;
    }, 5);

    var slider2 = document.querySelector('#slider2')

    var controller2 = new ScrollMagic.Controller();
    var animation2 = new TimelineMax();
                    animation2
                    .to('#imgbox1',1,{top:'80%'})
                    .to('#cutton2, #imgbox1',5,{top:'10%'})
                    .to('#cutton2',1,{opacity:'0'})
                    .to('#textbox1',3,{top:'32.5%'})
                    .to('#textbox1',3,{top:'-35%'})
                    .to('#img1',3,{height:'0%'})
                    .to('#textbox2',3,{top:'32.5%'})
                    .to('#textbox2',3,{top:'-35%'})
                    .to('#img2',3,{height:'0%'})
                    .to('#textbox3',3,{top:'32.5%'})
                    .to('#textbox3',3,{top:'-35%'})
    var scene = new ScrollMagic.Scene({
    duration: 7000,
    triggerElement: slider2,
    triggerHook: 0
    })
    // .addIndicators()
    .setTween(animation2)
    .setPin(slider2)
    .addTo(controller2)
    // .addIndicators();
}