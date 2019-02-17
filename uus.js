        //        $("#navbar2 ul li a[href^='#']").on('click', function(e) {
        //
        //            e.preventDefault();
        //
        //            var hash = this.hash;
        //
        //            $('html, body').animate({
        //                scrollTop: $(hash).offset().top - 160
        //            }, 600, function() {
        //
        //
        //                window.location.hash = '#';
        //            });
        //
        //        });
                
        $('#navbar2, .nav-link, .navbar-brand, .new-button').click(function() {
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top -100
            }, 600);
        });
        
        const nav = document.querySelector('#navbar2');
        const topOfNav = nav.offsetTop;

        function fixNav() {
            if (window.scrollY >= topOfNav) {
                document.body.classList.add('fixed-nav');
            } else {
                document.body.classList.remove('fixed-nav');
            }
        }

        window.addEventListener('scroll', fixNav);

        $(document).click(function(e) {
            if (!$(e.target).is('.navbar-toggler')) {
                $('.collapse').collapse('hide');
            }
        });
