$(function(){
  $('.menu-u').each(function(){
      $(this).on('click',function(){
        $(this).toggleClass('openlink');
          $("+.menu-p",this).slideToggle();
          return false;
      });
  });
});
