// ハンバーガーメニューを閉じるアクション

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelectorAll(".navi-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.checked = false;
    });
  });
});






// purposeの波線アクション

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.text1');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // 一度だけアニメーション
        }
      });
    }, {
      threshold: 0.6
    });
  
    targets.forEach(target => {
      observer.observe(target);
    });
});

// voiceのslide-in

$(window).scroll(function () {
  $(".inview-slide-left ,.inview-slide-right").each(function () {

    var scroll = $(window).scrollTop();

    // var target = $(this).offset().top;

    var windowHeight = $(window).height();

    var elementTop = $(this).offset().top;

    var elementHeight = $(this).outerHeight();

    if (scroll + windowHeight > elementTop + elementHeight * 0.4) {
      if($(this).hasClass("inview-slide-left")){
        $(this).addClass("slide-left");
      }else if ($(this).hasClass("inview-slide-right")){
        $(this).addClass("slide-right");
      }
    }
  });
});


// GALLERY

$(function(){
  $(window).scroll(function(){
    $(".work-img").each(function() {

      var scroll = $(window).scrollTop();

      var blockPosition = $(this).offset().top;

      var windowHeight =$(window).height();

      if (scroll > blockPosition - windowHeight  + 150 ) {
        $(this).addClass("blockIn");
      }
    })
  })
})

