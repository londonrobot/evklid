(() => {
  document.addEventListener('DOMContentLoaded', () => {

    // slider
    const swiper = new Swiper('.hero-slider', {
      loop: true,
      speed: 1000,
      autoplay: {
      delay: 3000,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      scrollbar: {
        hide: true,
      },

    });


    // accordion
        $(".js-accordion").accordion({
        collapsible: true,
        active: false,
        icons: false,
        heightStyle: 'content'
      });



    // burger
    document.querySelector(".header__burger").addEventListener('click', () => {
      if (document.querySelector(".burger__nav-list").style.display == 'flex')
      {
        document.querySelector(".burger__nav-list").style.display = 'none';
        document.querySelector(".header__burger").classList.remove("active");
      }
      else {
        document.querySelector(".burger__nav-list").style.display = 'flex';
        document.querySelector(".header__burger").classList.add("active");
      }
    });


    // search
    document.querySelector('.header__search').addEventListener('click', () => {
      const searchButton = document.querySelector('.header__search');
      searchButton.style.display = 'none';
      const form = document.querySelector('.search-form');
      form.style.display = 'inline-block';

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        searchButton.style.display = 'inline-block';
        form.querySelector('.search-form__input').value = "";
      });

      form.querySelector(".search__reset").addEventListener('click', () => {
        form.style.display = 'none';
        searchButton.style.display = 'inline-block';
      });

    });

    // tabs
    document.querySelectorAll('.work-tabs__button').forEach((tabsBtn) => {
      tabsBtn.addEventListener('click', (event)=> {
        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.work-desc__item').forEach((tabContent) => {
          tabContent.classList.remove('work-desc__visible');
        });

        document.querySelectorAll('.work-tabs__button').forEach((tabContent) => {
          tabContent.classList.remove('work-tabs__button-active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('work-desc__visible');
        document.querySelector(`[data-path="${path}"]`).classList.add('work-tabs__button-active');
      });

    });



  });
})();
