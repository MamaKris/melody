$(document).ready(function () {
  var cureentFloor = 2;
  var floorPath = $('.home-image path')
  var counterUp = $('.counter-up')
  var counterDown = $('.counter-down')
  var modal = $('.modal')
  var modalCloseBtn = $('.modal-close-btn')
  var viewFlatsBtn = $('.view-flats')


  floorPath.on('mouseover',function(){
     floorPath.removeClass('current-floor')
  cureentFloor = $(this).attr('data-floor')
  $('.counter').text(cureentFloor)
  });

  floorPath.on('click',toggleModal)
  modalCloseBtn.on('click',toggleModal)
  viewFlatsBtn.on('click',toggleModal)
  
  counterUp.on('click',function(){
   if(cureentFloor < 18){
     cureentFloor++;
    usCurrentFloor = cureentFloor.toLocaleString('en-us',{minimumIntegerDigits: 2, useGrouping: false})
    $('.counter').text(usCurrentFloor)
    floorPath.removeClass('current-floor')
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')

   }
  });
  counterDown.on('click',function(){
    if (cureentFloor > 2){
      cureentFloor--;
       usCurrentFloor = cureentFloor.toLocaleString('en-us',{minimumIntegerDigits: 2, useGrouping: false})
        $('.counter').text(usCurrentFloor)
         floorPath.removeClass('current-floor')
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
   

    }

  })
  function toggleModal (){
    modal.toggleClass('is-open')
  }
});