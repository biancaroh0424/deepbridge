const topNavPhone = document.getElementById('topnav_phone');
    const topNavTablet = document.getElementById('topnav_tablet');
    const topNavComputer = document.getElementById('topnav_computer');
    const bottomNavComputer = document.getElementById('bottom_nav_com');
    const bottomNavTablet = document.getElementById('bottom_nav_tablet');
    const arrowComputer = document.getElementById('arrow_com');
    const arrowTablet = document.getElementById('arrow_tablet');
    const tabletNo = document.querySelector('.tablet_no');
    const tabletNoBtn = document.querySelector('#tablet_no_btn');
    const tabletShow = document.querySelector('#tablet_show');



function tabletView(x){
    if (x.matches) { // If media query matches
        document.getElementById('topnav_computer').style.display = 'none';
        document.getElementById('topnav_tablet').style.display = 'flex';
        document.getElementById('bottom_nav_com').style.display = 'none';
        document.getElementById('bottom_nav_tablet').style.display ='flex';
        document.getElementById('arrow_com').style.display = 'none';
        document.getElementById('arrow_tablet').style.display = 'flex';
        document.querySelector('.tablet_no').style.display= 'none';
        document.querySelector('#tablet_no_btn').style.display= 'none';
        document.querySelector('#tablet_show').style.display='flex';

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
      }
    else{
        document.getElementById('topnav_computer').style.display = 'flex';
        document.getElementById('topnav_tablet').style.display = 'none'; 

        document.getElementById('bottom_nav_com').style.display = 'flex';
        document.getElementById('bottom_nav_tablet').style.display ='none';
        document.getElementById('arrow_com').style.display = 'flex';
        document.getElementById('arrow_tablet').style.display = 'none';

        document.querySelector('.tablet_no').style.display= 'flex';
        document.querySelector('#tablet_no_btn').style.display= 'flex';
        document.querySelector('#tablet_show').style.display='none';

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }
}

let x = window.matchMedia("(max-width: 1280px)")
tabletView(x) // Call listener function at run time
x.addListener(tabletView) // Attach listener function on state changes