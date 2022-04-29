$(document).ready(function(){
    popup('.btn01', '.popup01');
})

function popup(btn, popup){
 $(btn).click(function(){
     $(popup).addClass('active')
     $('body').addClass('scollNone')
 });

 $(popup).click(function(){
     $(popup).removeClass('active');
     $('body').removeClass('scrollNone')
  })

  $(popup + ' , ' + popup + ' > div .material-icons-outlined').click(function(){
     $(popup).removeClass('active');
     $('body').removeClass('scrollNone')
 })
  
 $(popup + ' > div').click(function(e){
     e.stopPropagation();
 })  
}