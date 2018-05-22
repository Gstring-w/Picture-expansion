var time = setTimeout(function () {
    $('.wrapper').removeClass('init');
}, 200);
$('.items').on("click",function () {
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active');
});
$('.close').on('click',function (e) {
    e.stopPropagation();
    $('.items').removeClass('active');
    $('.wrapper').removeClass('wrapper-active');
})