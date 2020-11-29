$(document).ready(function() {
    $('.propertyContactForm').scrollToFixed({ marginTop: $('.PageHeader').height(), limit: $('.mainContent ').offset().top+ $('.mainContent ').height() - $('.propertyContactForm').height(),  offsets: true});
});


/* function adjustWidth() {
    var parentwidth = $(".asideContent").width();
    $(".propertyContactForm").width(parentwidth);
}

$(document).ready(function () {


    var lockFormOnProperty ={
        firstLock = null;
        secondLock = null;
        formSize = null;
        formWidth = $('.asideContent').width();
    }

    $(window).resize(
        function () {
            adjustWidth();
        });

    $(window).scroll(

        function () {
            if ($(window).innerWidth() < 801) {
                $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                $('.Element.PropertyBasicDetail .propertyContactForm').removeClass('fixA');
            }
            else {
                var mBool = true;
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;                
                var lockFormHeight = $('.PropertyBasicDetail .mainContent').offset().top - $('.PageHeader').height()
                var formSize = $('.propertyContactForm .elementBorder.BoxStyle').height();
                var secondLockHeight = $('.PropertyBasicDetail .mainContent').height() + $('.PropertyBasicDetail .mainContent').offset().top - formSize;


                //imos 
                if (mBool) {
                    if ($(".PropertyBasicDetail").length) {
                        if (scrollTop > lockFormHeight) {
                            $('.Element.PropertyBasicDetail .propertyContactForm').addClass('fixA');
                        } else {
                            $('.Element.PropertyBasicDetail .propertyContactForm').removeClass('fixA');
                        }
                        if (scrollTop > secondLockHeight) {
                            $('.Element.PropertyBasicDetail .asideContent').addClass('fixB');
                            mBool = false;
                            $('.Element.PropertyBasicDetail .propertyContactForm').removeClass('fixA');
                        } else {
                            $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                        }
                    }
                }


                if (scrollTop < secondLockHeight) {
                    mBool = true;
                    $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                }
            }
        });
});
 */