$(document).ready(function(){
    var $dropdownToggle = $(".dropdown-toggle");
    var $dropdownMenu = $(".dropdown-menu");
    $dropdownToggle.click(function(e) {
      e.stopPropagation();
      var $thisDropdownMenu = $(this).next();
      var isOpen = $thisDropdownMenu.hasClass("show");

      $dropdownMenu.removeClass("show"); 
      if (!isOpen) {
          $thisDropdownMenu.addClass("show"); 
      }
    });

    $dropdownMenu.click(function(e){
      e.stopPropagation();
    });
    
    $(".bg-yellow .long-text").click(function(e){
        e.stopPropagation();
        $(this).css( "white-space", "normal");
      })
      $(document).click(function() {
        $dropdownMenu.removeClass("show");
        $(".bg-yellow .long-text").css( "white-space", "nowrap")
    });
    $(".hamburger").click(function(){
        $(".header-buttons").slideToggle();
        $(this).toggleClass("show");
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('body').addClass('fixed-header');
        } else {
            $('body').removeClass('fixed-header');
        }
    });

    $(".toggle-button").click(function(){
      $(this).siblings(".contentzz").toggleClass("clamped");
      $(this).children("img").toggleClass("rotate180", $("#contentzz").hasClass("clamped"));
    });

 
    
    
  
    
    // $(".filters-mobile-slider").slick({
    //     mobileFirst: true,
    //jgijfr     responsive: [
    //         {
    //             breakpoint: 0,
    //             settings: {
    //                 slidesToShow: 7,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: "unslick"
    //         }
    //     ]
    // });
    // $(".radio-button-wrapper").click(function() {
    //     $(".radio-button-wrapper").removeClass("active").find(".form-check-input").prop("checked", false);
    //     $(this).addClass('active').find(".form-check-input").prop("checked", true);
    //   });
  //   function toggleVisibility(element) {
  //     var toggleIcon = element.querySelector('.toggle-icon');
  //     var toggleText = element.querySelector('.toggle-text');

  //     if (toggleText.textContent === "Show the notes field") {
  //         toggleText.textContent = "Hide the notes field";
  //         toggleIcon.classList.remove('defaultIcon');
  //         toggleIcon.classList.add('altIcon');
  //         element.classList.add('toggleActive');
  //     } else {
  //         toggleText.textContent = "Show the notes field";
  //         toggleIcon.classList.remove('altIcon');
  //         toggleIcon.classList.add('defaultIcon');
  //         element.classList.remove('toggleActive');
  //     }
  // }

  

      window.addEventListener("scroll", function() {
        var grayBox = document.querySelector(".gray-listing");
        var header = document.querySelector("header"); 
        var headerHeight = header.offsetHeight;
      
        if (window.pageYOffset > headerHeight) {
          grayBox.classList.add("sticky");
        } else {
          grayBox.classList.remove("sticky");
        }
      });
})

// const MAX_LENGTH = 20; // Maximum length of the displayed text

// function shortenText(text, maxLength) {
//   if (text.length <= maxLength) {
//     return text; // Text is already within the limit
//   } else {
//     const shortenedText = text.substring(0, maxLength - 3); // Subtract 3 to accommodate the ellipsis
//     return shortenedText + '...';
//   }
// }
// const longtext = document.querySelectorAll('#logoText');
// console.log(longtext);
// shortenText(longtext,MAX_LENGTH);
// const shortenedParagraph = shortenText(longtext, MAX_LENGTH);

// $(".radio-button-wrapper").click(function(){
//     $(".radio-button-wrapper").removeClass("active");
//     $(this).addClass("active");
// });




// function toggleVisibility(element) {
//   // Your existing function code here

//   // Use jQuery to update the class of the element
//   $(element).toggleClass('btn-gray btn-dark');
// }

function toggleVisibility(element) {
  var toggleIcon = element.querySelector('.toggle-icon');
  var toggleText = element.querySelector('.toggle-text');

  if (toggleText.textContent === "Show the notes field") {
    toggleText.textContent = "Hide the notes field";
    toggleIcon.classList.remove('defaulIcon');
    toggleIcon.classList.add('altIcon');
    element.classList.toggle('btn-gray');
        element.classList.toggle('btn-dark');
  } else {
    toggleText.textContent = "Show the notes field";
    toggleIcon.classList.remove('altIcon');
    toggleIcon.classList.add('defaulIcon');
    element.classList.toggle('btn-gray');
        element.classList.toggle('btn-dark');
  }
}


const checkboxes = document.getElementsByClassName('custom-checkbox');

function updateParentContainerClass() {
  for (const checkbox of checkboxes) {
    const parentContainer = checkbox.closest('.select-card');
    if (checkbox.checked) {
      parentContainer.classList.add('active');
    } else {
      parentContainer.classList.remove('active');
    }
  }
}

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', updateParentContainerClass);
}

updateParentContainerClass();
