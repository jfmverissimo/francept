function adjustWidth() {
    var parentwidth = $(".asideContent").width();
    $(".propertyContactForm").width(parentwidth);
}

$(document).ready(function () {

    headerToForm = $('.PropertyBasicDetail .mainContent').offset().top-85;



    $(window).resize(
        function () {
            adjustWidth();
        });

    $(window).scroll(
        function () {
            var mBool = true;
            if ($(window).innerWidth() > 768) {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var HImos = (headerToForm + $('.PropertyBasicDetail .mainContent').height()) - $('.propertyContactForm .elementContainer').height();

                if (mBool) {
                    if ($(".PropertyBasicDetail").length) {
                        if (scrollTop > HImos) {
                            $('.Element.PropertyBasicDetail .propertyContactForm').addClass('fixA');
                        } else {
                            $('.Element.PropertyBasicDetail .propertyContactForm').removeClass('fixA');
                        }
                        if (scrollTop > HImos) {
                            $('.Element.PropertyBasicDetail .asideContent').addClass('fixB');
                            mBool = false;
                            $('.Element.PropertyBasicDetail .propertyContactForm').removeClass('fixA');
                        } else {
                            $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                        }
                    }
                }
                /**/
                if (scrollTop < HImos) {
                    mBool = true;
                    $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                }
            }
        });
});

