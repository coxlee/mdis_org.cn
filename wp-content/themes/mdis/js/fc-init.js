/** js need to be loaded before document load **/
/*  for add this  */
if ($.browser.msie) {
  var addthis_config = { ui_offset_top: 30 }
} else {
  var addthis_config = { ui_offset_top: 20 }
}
/** End of js need to be loaded before document load **/

/* for others during document load */
$(document).ready(function () {
  /* css hack for IE */
  if ($.browser.msie) {
    /*  common  */
    var ieVersion = parseInt($.browser.version, 10);
    if (ieVersion == 8) {
      /* top school and academic  */
      $('#divSchoolAndAcademicHoverMenu').css({ 'margin-left': '830px', 'width': '108px', 'padding-left': '13px' })

      //last child of school menu at top menu
      $('#tblSchoolAndAcademicMenu td:last').hover(
        function () { $(this).css('border-right', '1px solid #ffffff'); },
        function () {
          if ($(this).hasClass('selected')) {
            $(this).css('border-right', '1px solid #ffffff');
          }
          else {
            $(this).css('border-right', '1px solid #cccccc');
          }
        }
      );
      $('#tblSchoolAndAcademicMenu td:last').click(function () {
        $(this).css('border-right', '1px solid #ffffff');
      });
      if ($('#tblSchoolAndAcademicMenu td:last').hasClass('selected')) {
        $('#tblSchoolAndAcademicMenu td:last').css('border-right', '1px solid #ffffff');
      }

      $('#divCorpMenu').css({ 'margin-top': '38px', 'margin-left': '5px' });
    }
    else if (ieVersion == 7) {      			
      $('#divSchoolAndAcademicHoverMenu').css({ 'margin-left': '8px', 'width': '108px', 'padding-left': '13px' });
      $('#divSchoolAndAcademicContent').css({ 'margin-left': '-590px' });			
    }
  }
  /* End of css hack for IE */

  /*  Home school and academic  */
  //set equal height first before hide, write equal height script by ourself if client cant accept refresh in IE  
  $('#divSchoolAndAcademicContent .tblProgramme').each(function (index) {
    //cant contain padding or margin
    $('#divSchoolAndAcademicContent .tblProgramme:eq(' + index + ') td a').equalHeightColumns();
  });
  //$('.divSchoolAndAcademicProgWrapper').equalHeightColumns();  //IE does not work
  //hack
  $('#divSchoolAndAcademicContent').css('right', 'auto').hide();

  $('#divSchoolAndAcademic').mouseover(function () {
    $('#divSchoolAndAcademicHoverMenu, #divSchoolAndAcademicContent').fadeIn();
  });
  $('#divSchoolAndAcademic, #divSchoolAndAcademicHoverMenu, #divSchoolAndAcademicContent').hover(
    function () { $('#divSchoolAndAcademicHoverMenu, #divSchoolAndAcademicContent').show() },
    function () { $('#divSchoolAndAcademicHoverMenu, #divSchoolAndAcademicContent').hide() }
  );

  $('#divSchoolAndAcademicContent .divSchoolWrapper').hide();
  $('#divSchoolAndAcademicContent .divSchoolWrapper:first').show();
  $('#divSchoolAndAcademicContent #tblSchoolAndAcademicMenu td').click(function () {
    var selIndex = $("#divSchoolAndAcademicContent #tblSchoolAndAcademicMenu td").index(this);
    $("#divSchoolAndAcademicContent #tblSchoolAndAcademicMenu td").removeClass('selected');
    $(this).addClass('selected');
    $('#divSchoolAndAcademicContent .divSchoolWrapper').hide();
    var currSelEle = $('#divSchoolAndAcademicContent .divSchoolWrapper').get(selIndex);
    $(currSelEle).fadeIn();
  });

  $('.divSchoolWrapper .divSchoolAndAcademicProgWrapper').hide();
  $('.divSchoolWrapper').each(function (index) {
    $('.divSchoolWrapper:eq(' + index + ') .divSchoolAndAcademicProgWrapper:first').show();
  });

  $('.divSchoolWrapper .tblTypeMenu td span').click(function () {
    var parentIndex = $('.divSchoolWrapper').index($(this).parents('.divSchoolWrapper'));
    $('.divSchoolWrapper:eq(' + parentIndex + ') .tblTypeMenu td span').removeClass('selected');
    $(this).addClass('selected');
    $('.divSchoolWrapper:eq(' + parentIndex + ') .divSchoolAndAcademicProgWrapper').hide();
    var selIndex = $('.divSchoolWrapper:eq(' + parentIndex + ') .tblTypeMenu td span').index(this);
    var currSelEle = $('.divSchoolWrapper:eq(' + parentIndex + ') .divSchoolAndAcademicProgWrapper').get(selIndex);
    $(currSelEle).fadeIn();
  });
  /*  End of Home school and academic  */

  /*  hack cms menu */
  var vHighest = 0;
  $('#divContentMenu ul li a').each(function () {
    var h = $(this).height();
    if (h > vHighest) {
      vHighest = h;
    }
  });

  $('#divContentMenu ul li a').each(function () {
    if ($(this).height() != vHighest) {
      var vPaddingTop = parseInt((vHighest - $(this).height()) / 2);
     $(this).css('height', (vHighest - vPaddingTop) + 'px');
      $(this).css('padding-top', vPaddingTop + 'px');
    }

    //add wanted padding now after all done
    $(this).css('height', $(this).height() + 20 + 'px'); //for pad bottom height       
    var iCurrPadTop = parseInt($(this).css('padding-top').replace("px", ""));
    $(this).css('padding-top', (iCurrPadTop + 4) + 'px');
  });

  var iLiBgHeightAndPadTopBtm = 6 + 14; //6px for rounded bg
  $('#divContentMenu ul li.empty span').css('height', vHighest + iLiBgHeightAndPadTopBtm + 'px');

  //can do better by redirect link when parent of a which is li is clicked
  /*  end of hack menu */

  /*  side listing  */
  $('#ulSideProgListing ul').hide();
  $('#ulSideProgListing ul:first').show();
  $('#ulSideProgListing li span').click(function () {
    $(this).parent().children("ul").slideToggle('slow');
  });
  /*  side listing  */


  /* Animated menu */
  var menuTimer;
  $('ul#topMenu > li').hover(
		function () {
		  if (menuTimer) {
		    clearTimeout(menuTimer);
		  }
		  $('ul#topMenu > li > ul').hide();
		  $(this).children('ul').slideDown(300);
		},
		function () {
		  menuTimer = setTimeout(function () {
		    $('ul#topMenu > li > ul').slideUp(300);
		  }, 350);
		}
	);
  /* End of Animated menu */
});