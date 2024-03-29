document.addEventListener("DOMContentLoaded", function () {

    el_autohide = document.querySelector('.autohide');
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight; 
    document.body.style.paddingTop = navbar_height + 'px';
    

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                // hide
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                // show
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

        });
        // window.addEventListener

    }

    el_autohide_footer = document.querySelector('.autohideFooter');
    footer_height = document.querySelector('.footer').offsetHeight;
    console.log(footer_height)
    document.body.style.paddingBottom = footer_height + 'px';

    if (el_autohide_footer) {
        var last_scroll_top2 = 0;
        window.addEventListener('scroll', function () {
            let scroll_top2 = window.scrollY;
            if (scroll_top2 > last_scroll_top2 && scroll_top2 > 500) {

                el_autohide_footer.classList.remove('scrolled-up');
                el_autohide_footer.classList.add('scrolled-down');
                // console.log(scroll_top2 + " " + last_scroll_top2);
            }
            else {
                el_autohide_footer.classList.remove('scrolled-down');
                el_autohide_footer.classList.add('scrolled-up');
                // console.log(scroll_top + " " + last_scroll_top2);
            }
            last_scroll_top2 = scroll_top2;

        });
        // window.addEventListener

    }
    // if

});
// DOMContentLoaded  end