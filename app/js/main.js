$(function(){

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-3");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-4");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-5");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-6");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

var acc = document.getElementsByClassName("accordion-7");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      panel.style.maxHeight = "250px";
      panel.style.padding = "30px";
    }
  });
}

$(".accordion").click(function(e){
  e.preventDefault();
  $(".questions__box-item").toggleClass('bg');
});

$(".accordion-1").click(function(e){
  e.preventDefault();
  $(".questions__box-item1").toggleClass('bg');
});

$(".accordion-2").click(function(e){
  e.preventDefault();
  $(".questions__box-item2").toggleClass('bg');
});

$(".accordion-3").click(function(e){
  e.preventDefault();
  $(".questions__box-item3").toggleClass('bg');
});

$(".accordion-5").click(function(e){
  e.preventDefault();
  $(".questions__box-item5").toggleClass('bg');
});

$(".accordion-6").click(function(e){
  e.preventDefault();
  $(".questions__box-item6").toggleClass('bg');
});

$(".accordion-7").click(function(e){
  e.preventDefault();
  $(".questions__box-item7").toggleClass('bg');
});

$(".accordion-4").click(function(e){
  e.preventDefault();
  $(".questions__box-item4").toggleClass('bg');
});

});