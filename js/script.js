$(function(){

    // Include header
    $('.header-include').load('header.html')

    // Include footer
    $('.footer-include').load('footer.html')




    // main slide banner
    var baseSwiper = new Swiper('.baseSlide', {
        loop:true,

        speed:600,
        pagination: {
            el: '.baseSlide .swiper-pagination',
            type: 'bullets',
            clickable : 'true',
        },
    });

      // optionImg slide banner
      var optionImg = new Swiper('.tableImg', {
        loop:true,

        speed:600,
        pagination: {
            el: '.tableImg .swiper-pagination',
            type: 'bullets',
            clickable : 'true',
        },
    });

});



// option calculator

function calc(event)
{
  var result = 0;
  var obj;
  // var form_obj = document[event.form.name];
  var form_obj = event.form;
  var form_length = form_obj['checkbox'].length;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  for ( var i=0; i<form_length; i++ )
  {
    obj = form_obj['checkbox'][i];
    if ( obj.checked == true ) {
      result += parseInt(obj.getAttribute('value'));
    }
  }
  form_obj['result'].value=numberWithCommas(result);
  
}




