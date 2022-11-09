"use strict";
addEventListener('load', () => {
    let mainHeader = document.querySelectorAll('.megaMenu');
    for (let index = 0; index < mainHeader.length; index++) {
        let element = mainHeader[index];
        ['mouseover', 'mouseout'].forEach((value) => {
            element.addEventListener(value, (e) => {
                element.classList.toggle('active');
            });
        });
    }
    document.querySelectorAll('.icon').forEach((el) => {
        el.addEventListener('click', () => {
            let Element = document.querySelector('header.header nav');
            Element.classList.toggle('open');
        });
    });
});