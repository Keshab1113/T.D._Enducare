let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  // navbar.classList.toggle('active');
};

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  document.querySelector('.mobileNavbar').classList.toggle('display-none');
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle('active');

    // Close other open FAQs
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
};

var swiper = new Swiper('.testimonial-slider', {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 2 } /* Show 2 slides on tablets */,
    1024: { slidesPerView: 3 } /* Show 3 slides on large screens */,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper('.course-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1000, // Slides every 3 seconds
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var teachersSwiper = new Swiper('.teachers-slider', {
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

var swiper = new Swiper('.reviews-slider', {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1000, // Slides every 3 seconds
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Function to pause autoplay on hover
function addHoverPause(swiperInstance, sliderClass) {
  document.querySelectorAll(sliderClass + ' .swiper-slide').forEach((slide) => {
    slide.addEventListener('mouseenter', () => swiperInstance.autoplay.stop());
    slide.addEventListener('mouseleave', () => swiperInstance.autoplay.start());
  });
}

addHoverPause(teachersSwiper, '.teachers-slider');

/* ================ light and dark mood ============*/
const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const options = {
    threshold: 0.1,
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    section.classList.add('hidden');
    revealOnScroll.observe(section);
  });
});


// Color change
// Get the select element
const colorSelect = document.getElementById('color');

// Function to change theme
function changeTheme(color) {
  // Remove all previous theme classes
  document.body.classList.remove('red-theme', 'green-theme', 'orange-theme');

  // Add new theme class if a valid color is selected
  if (color && color !== 'null') {
    document.body.classList.add(`${color}-theme`);
  }
}

// Event listener for color selection
colorSelect.addEventListener('change', (event) => {
  const selectedColor = event.target.value;
  changeTheme(selectedColor);

  // Optional: Save the selection to localStorage
  localStorage.setItem('selectedTheme', selectedColor);
});

// Optional: Load saved theme on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    colorSelect.value = savedTheme;
    changeTheme(savedTheme);
  }})