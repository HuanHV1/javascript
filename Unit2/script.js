$(document).ready(function () {
   $('.user-btn-more').click(function(){
        $('.user-more').toggle();
        var text = '';
        var value = $('.user-btn-more').text();
        text = value=='more' ? 'less' : 'more';

        $('.user-btn-more').text(text);
   });
});