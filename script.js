// import Swiper bundle with all modules installed
import Swiper from './swiper/bundle';

// import styles bundle
import './swiper/css/bundle.main.css';

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});