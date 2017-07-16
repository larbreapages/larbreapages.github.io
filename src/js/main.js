console.log('Welcome to larbreapages.fr');

// Move menu during scroll
const getYPosition = el => el.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;

    if (scrollpos > (getYPosition(document.querySelector('#services')) - document.querySelector('.nav').offsetHeight)) {
        document.querySelector('.nav').style.backgroundColor = '#f8f8f8';
        Array.prototype.map.call(document.querySelectorAll('.nav a'), el => (el.style.color = 'black'));
    } else {
        Array.prototype.map.call(document.querySelectorAll('.nav a'), el => (el.style.color = 'inherit'));
        document.querySelector('.nav').style.backgroundColor = 'inherit';
    }
});

// Tab

const selectTab = (tab) => {
    Array.prototype.map.call(document.querySelectorAll('#portfolio div'), el => el.classList.add('hide'));
    Array.prototype.map.call(document.getElementsByClassName(tab), el => el.classList.remove('hide'));
    Array.prototype.map.call(document.querySelectorAll('.tabs ul li'), el => el.classList.remove('is-active'));
};

[].forEach.call(document.querySelectorAll('.tabs ul li'), e => e.addEventListener('click', () => {
    const currentTab = e.classList[0];
    selectTab(currentTab);
    e.classList.add('is-active');
}));
