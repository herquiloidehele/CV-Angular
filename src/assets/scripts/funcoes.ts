import {ScrollEvent} from 'ngx-scroll-event';
import {ElementRef, Injectable} from '@angular/core';

declare let $: any;

$(document).ready(function () {
    const cabecalho = $('.hide-me')[0];
    $(cabecalho).animate({'opacity': '1'});
    $(cabecalho).addClass('animated slideOut');
});



    export function rolandoScroll() {
        $('.hide-me').each(function (posicoes: number) {

            const sessionElement: number = $(this).offset().top + $(this).outerHeight();
            const scrollPosition: number = $(window).scrollTop();


            if (sessionElement < (scrollPosition + $(this).height() + 500) && posicoes > 0){
                $(this).animate({'opacity': '1'}, 700);
                $(this).addClass('animated slideInUp');
            }

        });




    }

