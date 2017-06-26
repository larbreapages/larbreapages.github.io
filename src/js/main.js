console.log('Welcome to larbreapages.fr');

window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;
    // console.log(scrollpos);

    if (scrollpos > 725) {
        document.querySelector('.nav').style.backgroundColor = '#f8f8f8';
        Array.prototype.map.call(document.querySelectorAll('.nav a'), el => (el.style.color = 'black'));
    } else {
        Array.prototype.map.call(document.querySelectorAll('.nav a'), el => (el.style.color = 'inherit'));
        document.querySelector('.nav').style.backgroundColor = 'inherit';
    }
});
