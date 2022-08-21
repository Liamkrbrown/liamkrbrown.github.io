var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  updateOnWindowResize: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    '@0.75': {
        direction: 'horizontal',
    },
    '@1.00': { 
        direction: 'vertical',
    },
    '@1.50': { 
        direction: 'vertical',
    },
  }
});

let cardIndex;

var cardSwiper = new Swiper(".cardSwiper", {
  effect: "cards",
  grabCursor: true,
  on: { 
    //Function to set inner HTML of project header and description to the index of card
    slideChange: function () { 
        cardIndex = cardSwiper.activeIndex;
        projectHead.innerHTML = projectHeaderDict[cardIndex]
        projectDesc.innerHTML = projectDescDict[cardIndex];
    }
  }
});


const projectHead = document.getElementById('project-header')
const projectDesc = document.getElementById('project-description')

//Object containing Project headers
const projectHeaderDict = { 
    0 : "Portfolio Website",
    1 : "Digital NoteBook",
    2 : "Project 3",
    3 : "Project 4"
}
//Object containing Project Description
const projectDescDict = { 
    0 : "A Website built to show a range of work that I have completed, built using vanilla JS with help from the SwiperJS API to display these project cards",
    1 : "A Digital Notebook to write down notes during my time completing online courses for Front-End-Development, A place to implement ideas and techniques as I learn them",
    2 : "No Description",
    3 : "No Description"
}

