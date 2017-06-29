console.log('Welcome to larbreapages.fr');

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
