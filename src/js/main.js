import 'zenscroll';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';

console.log('Welcome to larbreapages.fr');

// Move menu during scroll
const getYPosition = el => el.getBoundingClientRect().top + window.scrollY;

const scrollEvent = () => {
    const scrollpos = window.scrollY;

    document.querySelectorAll('section').forEach((el) => {
        const id = el.getAttribute('id');

        if (scrollpos >= (getYPosition(document.querySelector(`#${id}`)) - document.querySelector('.nav').offsetHeight)) {
            document.querySelector(`a[href="#${id}"]`).classList.add('is-active');
            document.querySelectorAll(`.nav a:not([href="#${id}"])`).forEach(e => e.classList.remove('is-active'));
        }
    });

    if (scrollpos > document.querySelector('.nav').offsetHeight) {
        document.querySelector('.nav').classList.add('nav-scrolled');
    } else {
        document.querySelector('.nav').classList.remove('nav-scrolled');
    }
};

window.addEventListener('scroll', scrollEvent);
scrollEvent();

// Tab
const selectTab = (tab) => {
    document.querySelectorAll('#gallery div').forEach(el => el.classList.add('hide'));
    document.querySelectorAll(`.${tab}`).forEach(el => el.classList.remove('hide'));
    document.querySelectorAll('.tabs ul li').forEach(el => el.classList.remove('is-active'));
};

document.querySelectorAll('#portfolio .tabs ul li').forEach(e => e.addEventListener('click', () => {
    const currentTab = e.classList[0];
    selectTab(currentTab);
    e.classList.add('is-active');
}));

// Iframe
window.onload = () => {
    const defer = document.getElementsByTagName('iframe');
    for (let i = 0; i < defer.length; i += 1) {
        if (defer[i].getAttribute('data-src')) {
            defer[i].setAttribute('src', defer[i].getAttribute('data-src'));
        }
    }
};
