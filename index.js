'use strict';
$('.thumbnail').on('click',  e => {
    let targetCat = $(e.currentTarget).find('img');
    let untargetCat = $('.js-cat');

    untargetCat.attr('aria-pressed', false);
    targetCat.attr('aria-pressed', true);

    $('.hero').find('img').attr('src', targetCat.attr('src'));
    $('.hero').find('img').attr('alt', targetCat.attr('alt'));


    console.log(untargetCat);
    console.log($(e.target).attr('src'));
  });
  