$('.answer').hide();

$('h4').click((e) => {
    display(e.target);
})

$('.arrow').click((e) => {
    display(e.target);
})

function display(input) {
    let id = input.classList[0];
    let answer = $('.answer').eq(id);
    let arrow = $('.arrow').eq(id);
    answer.slideToggle();
    $('.answer').not(answer).slideUp();

    arrow.toggleClass('rotated');
    $('.arrow').not(arrow).removeClass('rotated');
}