// PAGE 1

// timer
(() => {
  const cstGcDateYear = 2023;
  const cstGcDateMonth = 5;
  const cstGcDateDay = 7;
  const cstGcDateHours = 17;
  const cstGcDateMinutes = 0;

  const countDownDate = new Date(Date.UTC(cstGcDateYear, cstGcDateMonth, cstGcDateDay, cstGcDateHours - 3, cstGcDateMinutes));

  let formatValue = (numb) => {
    if (numb < 10) {
      return '0' + numb;
    } else {
      return numb;
    }
  };

  let timerDays = document.querySelectorAll('.webinar-timer__num--days'),
    timerHours = document.querySelectorAll('.webinar-timer__num--hours'),
    timerMinutes = document.querySelectorAll('.webinar-timer__num--minutes'),
    timerSeconds = document.querySelectorAll('.webinar-timer__num--seconds');

  let refreshTimer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDays.forEach(e => e.innerHTML = formatValue(days));
    timerHours.forEach(e => e.innerHTML = formatValue(hours));
    timerMinutes.forEach(e => e.innerHTML = formatValue(minutes));
    timerSeconds.forEach(e => e.innerHTML = formatValue(seconds));

    if (distance < 0) {
      clearInterval(refreshTimer);
      timerDays.forEach(e => e.innerHTML = '00');
      timerHours.forEach(e => e.innerHTML = '00');
      timerMinutes.forEach(e => e.innerHTML = '00');
      timerSeconds.forEach(e => e.innerHTML = '00');
    }
  }, 1000);
})();

// author-video
(() => {
  const CLASS_HIDDEN = 'hidden';

  const btn = document.querySelector('.author__play-btn');
  const img = document.querySelector('.author__avatar-img-item');
  const video = document.querySelector('.author__avatar-video');

  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.add(CLASS_HIDDEN)
      img.classList.add(CLASS_HIDDEN)
      video.classList.remove(CLASS_HIDDEN)
    });
  }
})();

// reviews
(() => {
  const reviews = document.querySelector('.reviews-slider');

  if (reviews) {
    $(document).ready(function() {
      $(reviews).slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        responsive: [{
          breakpoint: 600,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 1
          }
        }]
      });
    });
  }
})();

// PAGE 2

// imp-message-video-box
(() => {
  const CLASS_HIDDEN = 'hidden';

  const btn = document.querySelector('.imp-message-video-box__play-btn');
  const img = document.querySelector('.imp-message-video-box__img-box');
  const video = document.querySelector('.imp-message-video-box__video-item');
  const txt = document.querySelector('.imp-message-video-box__title');

  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.add(CLASS_HIDDEN)
      img.classList.add(CLASS_HIDDEN)
      txt.classList.add(CLASS_HIDDEN)
      video.classList.remove(CLASS_HIDDEN)
    });
  }
})();


//utm

(() => {
  // const utm = location.search;
  // const btns = document.querySelectorAll('.btn');

  // if (utm) {
  //   for (const btn of btns) {
  //     if (btn.href.indexOf('http') !== -1 && btn.href.indexOf('#order') <= -1) {
  //       btn.href = btn.href + utm;
  //     }
  //   }
  // }

})();

// fbq events
const initiateCheckoutBtn = document.querySelector('#InitiateCheckout');
const addToCartBtn = document.querySelector('#AddToCart');
const completeRegistrationBtn = document.querySelector('#CompleteRegistration');

const setFbqEvents = (btn, events) => {
  if (btn) {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();

      fbq('track', events);
      window.open(btn.href);
    });
  }
};

setFbqEvents(initiateCheckoutBtn, 'InitiateCheckout');
setFbqEvents(addToCartBtn, 'AddToCartkout');
setFbqEvents(completeRegistrationBtn, 'CompleteRegistration');
