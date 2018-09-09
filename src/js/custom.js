$('.person .person__image-wrapper').on('mouseover',function() {
    $('.person__image-wrapper.active').removeClass('active');
    $('.person__image-wrapper.clicked').removeClass('clicked');
    $(this).addClass('active');
});
$('.person .person__image-wrapper').on('click',function() {
    $(this).addClass('clicked');
});
$('.person .person__image-wrapper').on('mouseout',function() {
    $(this).removeClass('active');
});

$('#exampleModal').on('hidden.bs.modal', function () {
    $('.person__image-wrapper.active').removeClass('active');
    $('.person__image-wrapper.clicked').removeClass('clicked');
});