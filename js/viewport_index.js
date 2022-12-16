function phoneView(xs){
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


    if (xs.matches) { // If media query matches
         document.querySelector('.lets_talk').style.display = 'none';
         topNavTablet.style.display = 'none';
         topNavPhone.style.display='flex';

         var swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
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
      else if(x.matches){
        topNavComputer.style.display = 'none';
        topNavTablet.style.display = 'flex';
        bottomNavComputer.style.display = 'none';
        bottomNavTablet.style.display = 'flex';
        arrowComputer.style.display = 'none';
        arrowTablet.style.display = 'flex';
        tabletNo.style.display= 'none';
        tabletNoBtn.style.display= 'none';
        tabletShow.style.display='flex';

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
      else
      
      {
      topNavPhone.style.display='none';
      topNavTablet.style.display='none';
      topNavComputer.style.display='flex';
      bottomNavComputer.style.display='flex';
      bottomNavTablet.style.display='none';
      arrowComputer.style.display = 'flex';
      arrowTablet.style.display = 'none';
      tabletNo.style.display= 'flex';
      tabletNoBtn.style.display= 'flex';
      tabletShow.style.display='none';
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

let xs = window.matchMedia("(max-width: 725px)")
phoneView(xs) // Call listener function at run time
xs.addListener(phoneView) // Attach listener function on state changes


let x = window.matchMedia("(max-width: 1280px)")
tabletView(x) // Call listener function at run time
x.addListener(tabletView) // Attach listener function on state changes