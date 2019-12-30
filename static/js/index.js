var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function changeColor(){
    document.body.style.backgroundColor = 'white';
    document.getElementById('oneone').style.color = 'black';
    document.getElementById('threethree').style.color = 'black';
    document.getElementById('fourfour').style.color = 'black';
    document.getElementById('welcome').style.color = 'black';
    document.getElementById('helloIam').style.color = 'black';
    document.getElementById('thankyou').style.color = 'black';
    document.getElementById('sig').style.color = 'black';
    document.getElementById('email').style.color = 'black';
    document.getElementById('pleasefeel').style.color = 'black';
    document.getElementById('pleasefeel2').style.color = 'black';
    document.getElementById('lstnme').style.color = 'black';
    document.getElementById('frstnme').style.color = 'black';
    document.getElementById('eml').style.color = 'black';
    var x = document.getElementsByClassName("nav22");
    var i;
    for (i = 0; i < x.length; i++) {
         x[i].style.backgroundColor = "black";
    }
    document.getElementById('changeColor').hidden =true;
}
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.scrolldown').fadeOut();
     }
    else
     {
      $('.scrolldown').fadeIn();
     }
 });
