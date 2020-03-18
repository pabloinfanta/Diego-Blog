$(document).ready(function() {

  $("a").click(function(event){
    if (this.hash !== "") {

      event.preventDefault();

       var gato= this.hash;

       $("html, body").animate({
       scrollTop: $(gato).offset().top}, 700, function(){
       window.location.hash= gato;
   });
  }
 });
});
