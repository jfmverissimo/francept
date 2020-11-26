function adjustWidth() {
    var parentwidth = $(".asideContent").width();
    $(".propertyContactForm").width(parentwidth);
}

function calculateHeight(){
    var topMargin = $('.PropertyBasicDetail .mainContent');
    if (topMargin){
        headerToForm=topMargin.offset().top-85;
        return headerToForm;
    }
    else {
        console.log('Já foste');
    }
}

$(document).ready(function () {
 
    $(window).resize(
        function () {
            adjustWidth();
    });  
   
    if ($(".PropertyBasicDetail").length) {        
        $(window).scroll(
        function () {
            var mBool = true;
            if ($(window).innerWidth() > 768) {
                headerToForm = calculateHeight();
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var HImos = (headerToForm + $('.PropertyBasicDetail .mainContent').height()) - $('.propertyContactForm .elementContainer').height();

                if (mBool) {
                        if (scrollTop > headerToForm) {
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
                /**/
                if (scrollTop < HImos) {
                    mBool = true;
                    $('.Element.PropertyBasicDetail .asideContent').removeClass('fixB');
                }
            }
        });
};
});
