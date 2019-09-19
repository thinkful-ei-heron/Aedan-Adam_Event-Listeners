'use strict';
$('.thumbnail').on('click', e => {
    let targetCat = $(e.target);
    let untargetCat = $('.thumnail').not(targetCat);

    $('.')

    $('.hero').find('img').attr('src', targetCat.attr('src'));
    $('.hero').find('img').attr('alt', targetCat.attr('alt'));


    // console.log(e.target);
    console.log($(e.target).attr('src'));
  });
  