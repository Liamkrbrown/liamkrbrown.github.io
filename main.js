const pages = document.querySelectorAll('.page');
const aboutPage = pages[0];
const projectsPage = pages[1];


let onProjects = false;
let translate  = 0;

const slide = () => { 

    if (onProjects === false) { 
        //Slide to projects page
        translate -= 100;
        onProjects = true;
        movePages();
    } else {
        //Do nothing, on projects page already
        onProjects = false;
        translate += 100;
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