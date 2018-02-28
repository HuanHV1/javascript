$(document).ready(function () {
    $('.user-btn-more').click(function () {
        $('.user-more').toggle();
        var text = '';
        var value = $('.user-btn-more').text();
        text = value == 'more' ? 'less' : 'more';
        $('.user-btn-more').text(text);
    });
    $(window).resize(function () {
        $('.user-more').removeAttr('style')
    });

    // initialise if .accordion is on the page
    if ($('.accordion')[0]) {

        // non-mobile
        if ($(window).width() > 768) {

            // Hide all but first tab content on larger viewports
            $('.accordion-content:not(:first)').hide();

            // Activate first tab
            $('.accordion-title:first-child').addClass('active');

        } else {
            // Hide all content items on narrow viewports
            $('.accordion-content').hide();
        };


        // The clicking action
        $('.accordion-title').on('click', function () {

            // non-mobile
            if ($(window).width() > 768) {

                $('.accordion-content').hide(); // hide all content
                $(this).next().show().prev().addClass('active').siblings().removeClass('active');

                return false; // stop browser jumping when tabs clicked

            } else {

                // narrow viewports
                //$('.accordion-content').hide(); // hide all content
                $(this).next().toggle().prev().toggleClass('active');

                return false; // stop browser jumping when tabs clicked
            };
        });
    }
});