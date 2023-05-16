// PAGE 1

// timer
(() => {
  const cstGcDateYear = 2023;
  const cstGcDateMonth = 4;
  const cstGcDateDay = 31;
  const cstGcDateHours = 17;
  const cstGcDateMinutes = 00;

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
        responsive: [{
          breakpoint: 600,
          settings: {
            arrows: false,
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
