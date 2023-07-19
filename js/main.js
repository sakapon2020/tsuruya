{
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    autoplay:  {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    effect: 'slide',
    centeredSlides: true,
    centerInsufficientSlides: true,
    slidesPerView: 1,
    breakpoints: {
        560: {
        centeredSlides: false,
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
          centeredSlides: true,
          slidesPerView: 3,
          spaceBetween: 20,
      },
    },
    spaceBetween: 20,
    speed: 1000,
    // initialSlide: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
// {
//   document.addEventListener('DOMContentLoaded', () => {
//     const mediaQuery769 = window.matchMedia('(min-width: 769px)');
//     const mediaQuery1 = window.matchMedia('(max-width: 768px)');
  
//     const handleBreakpoint769 = () => {
//       if (mediaQuery769.matches) {
//         const spImages = document.querySelectorAll('.sp-img');
//         spImages.forEach((image) => {
//           image.src = image.src.replace('-sp', '-pc');
//         });
//       }
//     };
  
//     const handleBreakpoint1 = () => {
//       if (mediaQuery1.matches) {
//         const spImages = document.querySelectorAll('.sp-img');
//         spImages.forEach((image) => {
//           image.src = image.src.replace('-pc', '-sp');
//         });
//       }
//     };
  
//     mediaQuery769.addEventListener('change', handleBreakpoint769);
//     mediaQuery1.addEventListener('change', handleBreakpoint1);
//   });
// }

// {
//   const handleBreakpoint769 = (mediaQuery769) => {
//     if (mediaQuery769.matches) {
//       const spImages = document.querySelectorAll('.sp-img');
//       spImages.forEach((image) => {
//         image.src = image.src.replace('-sp', '-pc');
//       });
//     }
//   };
  
//   const handleBreakpoint1 = (mediaQuery1) => {
//     if (mediaQuery1.matches) {
//       const spImages = document.querySelectorAll('.sp-img');
//       spImages.forEach((image) => {
//         image.src = image.src.replace('-pc', '-sp');
//       });
//     }
//   };
  
//   const setupMediaQueryListeners = () => {
//     const mediaQuery769 = window.matchMedia('(min-width: 769px)');
//     const mediaQuery1 = window.matchMedia('(max-width: 768px)');
  
//     mediaQuery769.addEventListener('change', () => handleBreakpoint769(mediaQuery769));
//     mediaQuery1.addEventListener('change', () => handleBreakpoint1(mediaQuery1));
//   };
  
//   document.addEventListener('DOMContentLoaded', setupMediaQueryListeners);
// }

// {
//   const handleBreakpoint769 = (mediaQuery769) => {
//     if (mediaQuery769.matches) {
//       const spImages = document.querySelectorAll('.sp-img');
//       spImages.forEach((image) => {
//         image.src = image.src.replace('-sp', '-pc');
//       });
//     }
//   };
  
//   const handleBreakpoint1 = (mediaQuery1) => {
//     if (mediaQuery1.matches) {
//       const spImages = document.querySelectorAll('.sp-img');
//       spImages.forEach((image) => {
//         image.src = image.src.replace('-pc', '-sp');
//       });
//     }
//   };
  
//   const setupMediaQueryListeners = () => {
//     const mediaQuery769 = window.matchMedia('(min-width: 769px)');
//     const mediaQuery1 = window.matchMedia('(max-width: 768px)');
  
//     mediaQuery769.addEventListener('change', () => handleBreakpoint769(mediaQuery769));
//     mediaQuery1.addEventListener('change', () => handleBreakpoint1(mediaQuery1));
//   };
  
//   const setupListeners = () => {
//     document.addEventListener('DOMContentLoaded', setupMediaQueryListeners);
//     window.addEventListener('load', setupMediaQueryListeners);
//   };
  
//   setupListeners();
  
// }

{
  const handleBreakpoint769 = (mediaQuery769) => {
    const spImages = document.querySelectorAll('.sp-img');
    if (mediaQuery769.matches) {
      spImages.forEach((image) => {
        image.src = image.src.replace('-sp', '-pc');
      });
    } else {
      spImages.forEach((image) => {
        image.src = image.src.replace('-pc', '-sp');
      });
    }
  };
  
  const handleBreakpoint1 = (mediaQuery1) => {
    const spImages = document.querySelectorAll('.sp-img');
    if (mediaQuery1.matches) {
      spImages.forEach((image) => {
        image.src = image.src.replace('-pc', '-sp');
      });
    } else {
      spImages.forEach((image) => {
        image.src = image.src.replace('-sp', '-pc');
      });
    }
  };
  
  const setupMediaQueryListeners = () => {
    const mediaQuery769 = window.matchMedia('(min-width: 769px)');
    const mediaQuery1 = window.matchMedia('(max-width: 768px)');
  
    mediaQuery769.addEventListener('change', () => handleBreakpoint769(mediaQuery769));
    mediaQuery1.addEventListener('change', () => handleBreakpoint1(mediaQuery1));
  
    // ウィンドウのリサイズ時に画像を切り替える
    window.addEventListener('resize', () => {
      handleBreakpoint769(mediaQuery769);
      handleBreakpoint1(mediaQuery1);
    });
  
    // 初期状態で適切な画像に変更する
    handleBreakpoint769(mediaQuery769);
    handleBreakpoint1(mediaQuery1);
  };
  
  const setupListeners = () => {
    document.addEventListener('DOMContentLoaded', setupMediaQueryListeners);
    window.addEventListener('load', setupMediaQueryListeners);
  };
  
  setupListeners();
  
}
