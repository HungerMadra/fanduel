'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const navLinks = document.querySelector('.nav__links');
const hiddenLine = document.querySelectorAll('.hidden__line');



const btmLists = document.querySelectorAll('.link-text');

btmLists.forEach(list => {
  list.addEventListener('click', function (e) {
    e.preventDefault();
    
  })

});




tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});






const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();



// upcoming

const entriesDraft = document.querySelectorAll('.entries__drafts li')



entriesDraft.forEach(e => {
  e.addEventListener('click', function (e) {
    e.preventDefault();
    //  e.target.classList.add('entry--active');
    // console.log(e);


  })
})
const draftDropdown = document.querySelector('.draft__dropdown');
const entry = document.querySelector('.entry-tab');
const draft = document.querySelector('.draft-tab');
const entryDisplayWrapper = document.querySelector('.entries__display--wrapper');

entryDisplayWrapper.classList.add('entries__display--active');
entry.classList.add('entry--active');




entry.addEventListener('click', function () {
  entryDisplayWrapper.classList.add('entries__display--active');
  draftDropdown.classList.remove('draft__dropdown--active');
  entry.classList.add('entry--active');
  draft.classList.remove('entry--active');

})

draft.addEventListener('click', function () {
  entryDisplayWrapper.classList.remove('entries__display--active')

  draftDropdown.classList.add('draft__dropdown--active')
  entry.classList.remove('entry--active')
  draft.classList.add('entry--active');
  entry.classList.remove('entry--active');
})





// fading effect

const tab1 = document.querySelector('.operations__tab--1');
const operationContent1 = document.querySelector('.operations__content--1');

tab1.addEventListener('click', function () {
  operationContent1.classList.add('fadein')
})


const elipsisCover = document.querySelector('.ellipsis__cover');
const live = document.querySelector('.live');
const liveMain=document.querySelector('.live__main');
const liveSecondary=document.querySelector('.live__secondary');
const nbaGameTable= document.querySelector('.NBA__game--table');
const history=document.querySelector('.history');
const historyLists=document.querySelector('history__lists');

const ellipsisHistoryLists=document.querySelector('.ellipsis__history--lists');
// const historyElipsis=documnet.querySelector('.')



live.addEventListener('click', function () {
  const liveTimeOut=setTimeout(function () {
    liveSecondary.classList.add('removelivesec');
    liveMain.classList.add('display__livemain');
    elipsisCover.classList.add('exit__elipsisLoader');
  }, 5000);
  
})

history.addEventListener('click', function () {
  setTimeout(function () {
    nbaGameTable.classList.add('NBA__game--show');
    ellipsisHistoryLists.classList.add('remove__history--lists');
    elipsisCover.classList.add('exit__elipsisLoader');
  }, 5000);
  
})

const mainContest=document.querySelector('.main__context');
const overlayContest=document.querySelector('.overlay__context');
const createContest=document.querySelector('.create__contest');
const overlayContextToggle=document.querySelector('.overlay__context--toggle')


// createContest.addEventListener('click',function(){
//   overlayContest.classList.add('show__overlay--context')
// });

// overlayContextToggle.addEventListener('click',function(){
//   overlayContest.classList.remove('show__overlay--context')
// });



// upcoming__lobby

const upcomingLobby=document.querySelector('.upcoming__lobby');
const operationsContent1=document.querySelector('.operations__content--1');
const operationsContent2=document.querySelector('.operations__content--2');


// upcomingLobby.addEventListener('click',function(e){
//   e.preventDefault();
//   operationsContent1.classList.remove('operations__content--active');
//   operationsContent2.classList.add('operations__content--active');

// })