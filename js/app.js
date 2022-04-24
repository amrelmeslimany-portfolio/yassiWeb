/* 
  - Global Const Variabls
  - Global Let Variabls
  - Main Navbar
  - Home Page
  - Order New Consultation
*/

$(function () {
  // General
  const fullpageWrapper = $(".wrap-fullpage");
  const navbar = $(".navbar");
  const txtIconWrap = $(".hidetext-anm");
  const boxMenu = $(".boxmenu-wrap");
  // Navbar
  // Topnavbar
  const topNavbarOpener = $(".navbar .navbar-toggler");
  const topnavbarCloser = $(".offcanvas .btn-close-offcanvas");

  // Search box
  const searchToggler = $(".btn-search");
  const boxSearch = $(".box-search");
  let toggleSearch = true;

  // Enabel Plugins
  if ($(".subjects-list").length) {
    $(".subjects-list").owlCarousel({
      rtl: true,
      autoWidth: true,
      margin: 20,
      nav: false,
      dots: false,
    });
  }

  // Handle Animations
  if (boxMenu.length) {
    boxMenu.each(function () {
      let menuBTN = $(this).find(".boxmenu-btn");
      let menuBody = $(this).find(".box-menu");
      menuBody.slideUp(1);

      let active = true;
      menuBTN.click(function () {
        let svg = $(this).find("svg");
        if (active) {
          svg.find("g").removeClass("share");
          svg.find("g").addClass("close");
          svg.find(".svg-rct1").attr("rx", "1");
          svg.find(".svg-rct2").attr("rx", "1");
          svg.find("circle").attr("r", "1");
          gsap.to(svg, {
            duration: 0.2,
            attr: { viewBox: "0 0 9.942 9.942" },
          });
          active = false;
        } else {
          svg.find("g").removeClass("close");
          svg.find("g").addClass("share");
          svg.find(".svg-rct1").removeAttr("rx");
          svg.find(".svg-rct2").removeAttr("rx");

          svg.find("circle").attr("r", "2.5");

          gsap.to(svg, {
            duration: 0.2,
            attr: { viewBox: "0 0 16 18" },
          });

          active = true;
        }
        menuBody.slideToggle(600, "easeInOutBack");
      });
    });
  }
  if (txtIconWrap.length) {
    txtIconWrap.each(function () {
      let text = $(this).find(".text");
      text.hide(1);

      $(this).hover(
        function () {
          text.show(200);
        },
        function () {
          text.hide(200);
        }
      );
    });
  }

  // Navbar
  fullpageWrapper.css({
    paddingTop: navbar.innerHeight() + 20,
  });
  topNavbarOpener.click(function () {
    $(this).addClass("active");
    fullpageWrapper.addClass("opened");
  });
  topnavbarCloser.click(() => {
    topNavbarOpener.removeClass("active");
    fullpageWrapper.removeClass("opened");
  });

  // Search box
  searchToggler.click(function () {
    let icon = $(this).find("i");

    $(this)
      .addClass("anm-icon")
      .delay(600)
      .queue(function (next) {
        $(this).removeClass("anm-icon");
        next();
      });

    if (toggleSearch) {
      boxSearch.addClass("active");
      icon.removeClass("fa-search");
      icon.addClass("display-lg");
      icon.removeClass("display-omd");
      icon.addClass("fa-times");
      toggleSearch = false;
    } else {
      boxSearch.removeClass("active");
      icon.addClass("fa-search");
      icon.addClass("display-omd");
      icon.removeClass("display-lg");
      icon.removeClass("fa-times");
      toggleSearch = true;
    }
  });
});
