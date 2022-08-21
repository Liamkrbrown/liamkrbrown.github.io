const pages = document.querySelectorAll('.page');
const aboutPage = pages[0];
const projectsPage = pages[1];


let onProjects = false;
let translate  = 0;
const translateAmount = 100;

const slide = () => { 

    if (onProjects === false) { 
        //Slide to projects page
        translate -= translateAmount;
        onProjects = true;
        movePages();
    } else {
        //Do nothing, on projects page already
        onProjects = false;
        translate += translateAmount;
        movePages();
    }
}

const movePages = () => { 
    //loop through pages array and shift by translate amount.
    pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`));
}

//Mobile Page Toggle Switch

const toggleSwitch = document.querySelector('.page-switch input[type="checkbox"]');

const switchPage = (e) => { 
    if (e.target.checked) { 
        slide();
    } 
}

toggleSwitch.addEventListener('change', slide, false);

//Script for sliding up a page wipe on click of Hire me
//Var to check if the wipe is currently running
let transistioning = false;

const hireMeTransition = () => { 
    //If slide isnt running, run
    if (!transistioning) { 
        //Create new panel, assign properties
        const panel = document.createElement('div');
        panel.style.width = '100vw';
        panel.style.height = '100vh';
        panel.style.backgroundColor = 'var(--yellow)';
        panel.style.position = 'absolute';
        panel.style.top = '100vh;'
        panel.style.zIndex = '20';
        //Give panel an ID
        panel.setAttribute('id', 'hire-me-transition');
        //Add panel to DOM
        document.getElementById('main').appendChild(panel);
        //Transition has now started
        transistioning = true;
        let hireMeSlide = document.getElementById('hire-me-transition');
        //Being animation
        hireMeSlide.style.animation = 'slideUp 0.4s ease-in-out both'
        //Listen for end of animation and move to new HTML file
        hireMeSlide.addEventListener('animationend', () => { 
            window.location.href = "./hireme.html";
        })


    }
}


/* ---      UNFINISHED     ---

    Need to find a way to ensure user isn't swiping
    on the SwiperJS elements. 

//Listening for page swipes to switch pages.
let touchStartX = 0
let touchEndX = 0

function checkDirection() { 
    //Left Swipe
    if (touchEndX < touchStartX - 30){ 
        slide();
        toggleSwitch.checked = !toggleSwitch.checked
    }
    //Right Swipe
    if (touchEndX > touchStartX + 30){ 
        slide();
        toggleSwitch.checked = !toggleSwitch.checked
    }
}
//Event listeners for horizontal swiping
document.addEventListener('touchstart', e => { 
    touchStartX = e.changedTouches[0].screenX
})
document.addEventListener('touchend', e => { 
    touchEndX = e.changedTouches[0].screenX
    checkDirection()
})

*/

