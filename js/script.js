window.onload = function(){

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
    
    const slider1 = document.getElementById('slider1');
    const image1 = document.getElementById('image1');
    const pic1 = document.getElementById('pic1');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const description = document.getElementById('description');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');

    btn1.addEventListener('click', function(){
        image1.style.animationName = 'disappear';
        title1.style.animationName = 'disappear';
        title2.style.animationName = 'disappear';
        description.style.animationName = 'disappear';
        setTimeout(function(){
            slider1.style.animationName='bgcolor1'
        })
        setTimeout(function(){
            title1.innerHTML='Galaxy';
            title2.innerHTML='Galaxy Z Flip3';
            description.innerHTML='접어서 주머니에 쏙. 스키니 진에도 슥. 작은 가방에도 딱,'+
            '꺼내어 펼치면 풀스크린 스마트폰으로 플렉스!<br>'+
            '원하는 각도로 자유롭게 펼칠 수도 있죠.'
            pic1.setAttribute('src','./image/slider_1/1.png');
            image1.style.animationName = 'appear';
            title1.style.animationName = 'appear';
            title2.style.animationName = 'appear';
            description.style.animationName = 'appear';
        },700);
    })
    
    btn2.addEventListener('click', function(){
        image1.style.animationName = 'disappear';
        title1.style.animationName = 'disappear';
        title2.style.animationName = 'disappear';
        description.style.animationName = 'disappear';
        setTimeout(function(){
            slider1.style.animationName='bgcolor2'
        })
        setTimeout(function(){
            title1.innerHTML='Buds';
            title2.innerHTML='Galaxy Buds2';
            description.innerHTML='균형 잡힌 사운드와 지금껏 경험하지 못한 편안함,'+
            '액티브 노이즈 캔슬링, 그리고 갤럭시 디바이스와의 끊김 없는 연결까지.'+
            '사운드 경험의 새로운 시대가 시작됩니다.';
            pic1.setAttribute('src','./image/slider_1/2.png');
            image1.style.animationName = 'appear';
            title1.style.animationName = 'appear';
            title2.style.animationName = 'appear';
            description.style.animationName = 'appear';
        },700);
    })

    btn3.addEventListener('click', function(){
        image1.style.animationName = 'disappear';
        title1.style.animationName = 'disappear';
        title2.style.animationName = 'disappear';
        description.style.animationName = 'disappear';
        setTimeout(function(){
            slider1.style.animationName='bgcolor3'
        })
        setTimeout(function(){
            title1.innerHTML='Watch';
            title2.innerHTML='Galaxy Watch4';
            description.innerHTML='이제 갤럭시 워치4가 체성분까지 간편하게 측정합니다,<br>'+
            '건강함을 위해 체지방량부터 골격근량, 체수분까지,<br>'+
            '삼성 바이오센서가 불러온 엄청난 혁신을 만나보세요'
            pic1.setAttribute('src','./image/slider_1/3.png');
            image1.style.animationName = 'appear';
            title1.style.animationName = 'appear';
            title2.style.animationName = 'appear';
            description.style.animationName = 'appear';
        },700);
    })

    btn4.addEventListener('click', function(){
        image1.style.animationName = 'disappear';
        title1.style.animationName = 'disappear';
        title2.style.animationName = 'disappear';
        description.style.animationName = 'disappear';
        setTimeout(function(){
            slider1.style.animationName='bgcolor4'
        })
        setTimeout(function(){
            title1.innerHTML='Laptop';
            title2.innerHTML='Book Pro 360';
            description.innerHTML='11세대 Intel 프로세서와<br>'+
            'NVIDIA 외장그래픽이 탑재되어,<br>'+
            '놀라운 퍼포먼스를 자랑합니다.'
            pic1.setAttribute('src','./image/slider_1/4.png');
            image1.style.animationName = 'appear';
            title1.style.animationName = 'appear';
            title2.style.animationName = 'appear';
            description.style.animationName = 'appear';
        },700);
    })

    btn5.addEventListener('click', function(){
        image1.style.animationName = 'disappear';
        title1.style.animationName = 'disappear';
        title2.style.animationName = 'disappear';
        description.style.animationName = 'disappear';
        setTimeout(function(){
            slider1.style.animationName='bgcolor5'
        })
        setTimeout(function(){
            title1.innerHTML='Kitchen';
            title2.innerHTML='BESPOKE';
            description.innerHTML='나만의 맞춤형 디자인으로, 주방을 남다르게<br>'+
            '트렌디한 주방을 완성할 수 있습니다.'
            pic1.setAttribute('src','./image/slider_1/5.png');
            image1.style.animationName = 'appear';
            title1.style.animationName = 'appear';
            title2.style.animationName = 'appear';
            description.style.animationName = 'appear';
        },700);
    })

    const section1 =  document.getElementById('section1');
    const video = document.getElementById('video1');
    const description2 = document.getElementById('description2');
    const description3 = document.getElementById('description3');
    section1.addEventListener('mouseover', function(){
        
            description2.style.top = "30%";
            description2.style.left = "50%";
            description2.style.color = "white";
            description2.style.fontSize = '4vw';
            description3.style.color = 'white';
        video.style.animationName = 'animation1_after';
        video.style.animationPlayState = 'running';
    
    });
    section1.addEventListener('mouseleave', function(){
        description2.style.top = "50%";
        description2.style.left = "70%";
        description2.style.color = "black";
        description2.style.fontSize = '2vw';
        description3.style.color = 'black';
        video.style.animationName = 'animation1_before'
        video.style.animationDuration = '1.5s'
        video.style.animationFillMode = 'forwards';
    });

    let imgbox=document.getElementsByClassName('imgbox');
    // let img1=imgbox.item(0).getElementsByTagName('img').item(0);
    // let img2=imgbox.item(0).getElementsByTagName('img').item(0);
    // let img3=imgbox.item(0).getElementsByTagName('img').item(0);
    // let img4=imgbox.item(0).getElementsByTagName('img').item(0);
    for(var i=0;i<imgbox.length;i++){
        eval('var img'+i+"= imgbox.item(i).getElementsByTagName('img').item(0)");
    }
    img0.addEventListener('mouseover',function(){
        img0.setAttribute('src','./image/section2/1_1.png');
        img0.addEventListener('mouseleave', function(){
            img0.setAttribute('src','./image/section2/1.png');
        })
    });
    img1.addEventListener('mouseover',function(){
        img1.setAttribute('src','./image/section2/2_1.png');
        img1.addEventListener('mouseleave', function(){
            img1.setAttribute('src','./image/section2/2.png');
        })
    });
    img2.addEventListener('mouseover',function(){
        img2.setAttribute('src','./image/section2/3_1.png');
        img2.addEventListener('mouseleave', function(){
            img2.setAttribute('src','./image/section2/3.png');
        })
    });
    img3.addEventListener('mouseover',function(){
        img3.setAttribute('src','./image/section2/4_1.png');
        img3.addEventListener('mouseleave', function(){
            img3.setAttribute('src','./image/section2/4.png');
        })
    });
    
    

    
    
    
    
    

    

    const slider2 = document.getElementById('slider2');
    const test1 = document.getElementById('test1');
    const container1 = document.getElementById('container1')
    const item2 = container1.getElementsByClassName('item');
    

    slider2.addEventListener('mouseover', function(){
        container1.style.animationName='slide1';
        container1.addEventListener('animationstart',function(){
            var clone = container1.cloneNode(true);
            test1.append(clone);
        })
        container1.addEventListener('animationend', function(){
            container1.remove();
        })
        
    })

    var controller = new ScrollMagic.Controller();
    var animation = new TimelineMax();
                 animation
                 .to('#cuttontilte',1,{opacity:'0'})
                 .to('#cutton',1,{height:'0'})
                //  .to('.item',1,{x:'-200%'})
                              

    var scene3 = new ScrollMagic.Scene({
                 triggerElement: '#slider2',
                 triggerHook: 0,
                 duration: '800'
    })
    .setPin('#slider2')
    .setTween(animation)
    .addTo(controller)
// .addIndicators();

}