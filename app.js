const nav = document.querySelector('nav');
const openMenu = document.querySelector('.open__menu-bar');
const bar1 = document.querySelector('.bar__1');
const bar2 = document.querySelector('.bar__2');
const bar3 = document.querySelector('.bar__3');
const navMenu = document.querySelector('.nav__menu');
const acts = document.querySelectorAll('.act');
const sections = document.querySelectorAll('section');
const alls = document.querySelectorAll('.all');
const destination = document.querySelector('.destination');
const technology = document.querySelector('.technology');
const one = document.querySelectorAll('.one');
const tech = document.querySelectorAll('.tech');
const crew = document.querySelector('.crew');
const div = document.querySelectorAll('div');
const a = document.querySelectorAll('.a');

navMenu.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        acts.forEach((act) => {
            act.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrollY')
    } else {
        nav.classList.remove('scrollY')
    }
})

crew.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        div.forEach((item) => {
            item.classList.remove('active__crew');
        })
        const element = document.getElementById(id);
        element.classList.add('active__crew');

        a.forEach((item) => {
            item.classList.remove('btn__act')
        })
        e.target.classList.add('btn__act');
    }
})

destination.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        alls.forEach((item) => {
            item.classList.remove('active__section');
        })
        const element = document.getElementById(id);
        element.classList.add('active__section');

        one.forEach((item) => {
            item.classList.remove('active__btn');
        })
        e.target.classList.add('active__btn')
    }
})

technology.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        div.forEach((item) => {
            item.classList.remove('active__tech');
        })
        const element = document.getElementById(id);
        element.classList.add('active__tech');

        tech.forEach((item) => {
            item.classList.remove('tech__act');
        })
        e.target.classList.add('tech__act')
    }
})


openMenu.addEventListener('click', () => {
    bar1.classList.toggle('flip');
    bar2.classList.toggle('disappear');
    bar3.classList.toggle('flat');
    navMenu.classList.toggle('show')
})

navMenu.addEventListener('click', () => {
    bar1.classList.remove('flip');
    bar2.classList.remove('disappear');
    bar3.classList.remove('flat');
    navMenu.classList.remove('show')
})