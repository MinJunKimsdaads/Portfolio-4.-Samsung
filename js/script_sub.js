window.onload=function(){
    const wrap=document.getElementById('wrap');
    const loading=document.getElementsByClassName('loadingio-spinner-spinner-3b1t6err0ft').item(0);
    setTimeout(function(){
        loading.style.display='none'
        wrap.style.display='block';
    },1000);

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
                    .to('#imgbox1',2,{top:'60%'})
                    .to('#cutton2',2,{top:'30%'})
                    .to('#imgbox1',2,{top:'50%'})
                    .to('#cutton2',2,{top:'20%'})
                    .to('#cutton2',1,{opacity:'0'})
                    .to('#imgbox1',5,{top:'10%'})
                    .to('#textbox1',5,{top:'32.5%'})
                    .to('#textbox1',5,{top:'-35%'})
                    .to('#img1',1,{opacity:'0'})
                    .to('#textbox2',5,{top:'32.5%'})
                    .to('#textbox2',5,{top:'-35%'})
                    .to('#img2',1,{opacity:'0'})
                    .to('#textbox3',5,{top:'32.5%'})
                    .to('#textbox3',5,{top:'-35%'})
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

    const gray=document.getElementById('gray');
    const green=document.getElementById('green');
    const bronze=document.getElementById('bronze');
    let color=document.getElementById('color');
    var arr=['gray','green','bronze'];
    gray.addEventListener('click',function(){
        color.innerHTML='미스틱 그레이'
        img4.setAttribute('src','./image/sub/slider3/'+arr[0]+'/'+1+'.png');
        img5.setAttribute('src','./image/sub/slider3/'+arr[0]+'/'+2+'.png');
        color.className='gray';
        return color.className;
        
        
    })
    green.addEventListener('click',function(){
        color.innerHTML='미스틱 그린'
        img4.setAttribute('src','./image/sub/slider3/'+arr[1]+'/'+1+'.png');
        img5.setAttribute('src','./image/sub/slider3/'+arr[1]+'/'+2+'.png');
        color.className='green';
        return color.className;
        
        
    })
    bronze.addEventListener('click',function(){
        color.innerHTML='미스틱 브론즈'
        img4.setAttribute('src','./image/sub/slider3/'+arr[2]+'/'+1+'.png');
        img5.setAttribute('src','./image/sub/slider3/'+arr[2]+'/'+2+'.png');
        color.className='bronze';
        return color.className;
    })

    console.log(color.className);


    let firstnumber=document.getElementById('firstnumber');
    let number = firstnumber.innerText;
    const right=document.getElementById('right');
    const left=document.getElementById('left');
    let img4=document.getElementById('img4');
    let img5=document.getElementById('img5');
    let picture3=document.getElementById('picture3');
    let imgbox6=document.getElementById('imgbox6');

    right.addEventListener('click',function(){
        if(number<3){
            number++;

        } else if(number>=3){
            number=1;
        }
        img4.style.animationName='disappear';
        img5.style.animationName='disappear';
        firstnumber.innerText=number;
        setTimeout(function(){
            var subnumber=number+1;
            if (subnumber>=4){
                subnumber=1;
            }
            console.log(color.className);
            img4.style.animationName='appear';
            img5.style.animationName='appear';
            img4.setAttribute('src','./image/sub/slider3/'+color.className+'/'+number+'.png');
            img5.setAttribute('src','./image/sub/slider3/'+color.className+'/'+subnumber+'.png');
        },700)
    })

    left.addEventListener('click',function(){
        if(number>1){
            number--;
        } else if(number<=1){
            number=3;
        }
        img4.style.animationName='disappear';
        img5.style.animationName='disappear';
        firstnumber.innerText=number;
        setTimeout(function(){
            var subnumber=number+1;
            if (subnumber>=4){
                subnumber=1;
            }
            img4.style.animationName='appear';
            img5.style.animationName='appear';
            img4.setAttribute('src','./image/sub/slider3/gray/'+number+'.png');
            img5.setAttribute('src','./image/sub/slider3/gray/'+subnumber+'.png');
            console.log(img5.getAttribute);
        },700)
    })

    




    

    var slider4 = document.querySelector('#slider4')
    var cutton3 = document.querySelector('#cutton3')
    var cutton4 = document.querySelector('#cutton4')

    var controller4 = new ScrollMagic.Controller();
    var animation4 = new TimelineMax();
                    animation4
                    .to('#cutton3',2,{opacity:'0'})
                    .to('#cutton3',0.1,{zIndex:'-10'})
                    .from('#subtitle,#contentbox',2,{marginTop:'30%',opacity:'0'})
                    .to('#subtitle',5,{marginTop:'0',opacity:'1'})
                    .to('#contentbox',5,{marginTop:'0',opacity:'1'})
                    .to('#cutton4',20,{top:'-100%'})
                    .from('.balloon1,.balloon2',1,{opacity:'0',transform:'scale(0)'})
                    .to('.balloon1,.balloon2',20,{opacity:'1',transform:'scale(1)'})
                    
    var scene = new ScrollMagic.Scene({
    duration: 3500,
    triggerElement: slider4,
    triggerHook: 0
    })
    // .addIndicators()
    .setTween(animation4)
    .setPin(slider4)
    .addTo(controller4)
    // .addIndicators();
}





