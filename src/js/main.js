import 'zenscroll';

console.log('Welcome to larbreapages.fr');

// Move menu during scroll
const getYPosition = el => el.getBoundingClientRect().top + window.scrollY;

const scrollEvent = () => {
    const scrollpos = window.scrollY;

    document.querySelectorAll('#home, #services, #portfolio, #testimonials, #contact, #about').forEach((el) => {
        const id = el.getAttribute('id');

        if (scrollpos >= (getYPosition(document.querySelector(`#${id}`)) - document.querySelector('.nav').offsetHeight)) {
            document.querySelector(`a[href="#${id}"]`).classList.add('is-active');
            document.querySelectorAll(`.nav a:not([href="#${id}"])`).forEach(e => e.classList.remove('is-active'));
        }
    });

    if (scrollpos > (getYPosition(document.querySelector('#services')) - document.querySelector('.nav').offsetHeight)) {
        document.querySelector('.nav').classList.add('nav-scrolled');
    } else {
        document.querySelector('.nav').classList.remove('nav-scrolled');
    }
}

window.addEventListener('scroll', scrollEvent);
scrollEvent();

// Tab

const selectTab = (tab) => {
    document.querySelectorAll('#gallery div').forEach(el => el.classList.add('hide'));
    document.querySelectorAll(`.${tab}`).forEach(el => el.classList.remove('hide'));
    document.querySelectorAll('.tabs ul li').forEach(el => el.classList.remove('is-active'));
};

document.querySelectorAll('.tabs ul li').forEach(e => e.addEventListener('click', () => {
    const currentTab = e.classList[0];
    selectTab(currentTab);
    e.classList.add('is-active');
}));
