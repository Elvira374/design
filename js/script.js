'use strict';

window.addEventListener('load', function() {
    // появление
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let elements = document.querySelectorAll('.element-animation');
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);

    for (let elem of elements) {
        observer.observe(elem);
    }
    if (document.documentElement.clientWidth < 900) {
        for (let elem of elements) {
            elem.classList.remove('element-animation');
        }
    }

     //menu
    let openBtn = document.getElementById('openBtn');
    let closeBtn = document.getElementById('closeBtn');
    let mySidenav = document.getElementById('mySidenav');

    openBtn.addEventListener('click', function () {
        mySidenav.style.height = '100%';
        mySidenav.style.opacity = '1';
    });
    closeBtn.addEventListener('click', function () {
        mySidenav.style.height = '0';
        mySidenav.style.opacity = '0';
    });
});