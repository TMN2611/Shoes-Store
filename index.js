const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const iconSearch = $(".icon_search");
const formSearch = $(".form__search");
const sliderImgs = $$(".slider__Img-link img");
const imgsItem = $$(".slider__Img-item");
const container = $(".container");
const slider = $(".slider__Img");
const controlDot = $$(".control__dot");
const featuredNavItems = $$(".detail__nav-item");
const collectionFeatured = $(".main__featured");
const featuredImg = $(".featured__img img");
console.log([collectionFeatured]);
const App = {
  SlideCurrentIndex: 0,
  handleEvent: function () {
    // btn Search
    iconSearch.onclick = function (e) {
      formSearch.classList.toggle("active");
    };

    //  Xóa hiện tượng nổi bọt
    formSearch.onclick = function (e) {
      e.stopPropagation();
    };

    //  Xét chiều rộng ảnh Slide
    sliderImgs.forEach(function (img) {
      img.style.width = slider.clientWidth + "px";
    });
    window.onresize = function () {
      sliderImgs.forEach(function (img) {
        img.style.width = slider.clientWidth + "px";
      });
    };
    controlDot.forEach(function (dot, index) {
      dot.onclick = function (e) {
        const dotActived = $(".control__dot.active").classList.remove("active");
        const imgActived = $(".slider__Img-item.active").classList.remove(
          "active"
        );
        controlDot[index].classList.add("active");
        imgsItem[index].classList.add("active");
      };
    });
    setInterval(this.autoClick, 5000);

    // tab UI featuredContentItem
    featuredNavItems.forEach(function (item, index) {
      item.onclick = function (e) {
        const featuredcontentItemActive = $(".detail__content-item.active");
        $(".detail__nav-item.active").classList.remove("active");
        featuredcontentItemActive.classList.remove("active");

        e.target.closest(".detail__nav-item").classList.add("active");
        $$(".detail__content-item")[index].classList.add("active");
      };
    });

    window.onscroll = function () {
      // featured__img scroll
      const h2Height = $(".featured__img h2").clientHeight;
      const imgHeight = $(".featured__img img").clientHeight;
      const featured__imgHeight = h2Height + imgHeight;
      const B_collectionFeaturedOffsetTop =
        collectionFeatured.offsetTop + featured__imgHeight / 2;
      const A_windowScrollTop =
        window.scrollY + window.innerHeight - featured__imgHeight / 2;
      const distanceAB = B_collectionFeaturedOffsetTop - A_windowScrollTop;

      if (distanceAB < 0) {
        $(".featured__img").classList.add("active");
      }
      if (distanceAB > -100) {
        $(".featured__img").classList.remove("active");
      }
    };
  },
  autoClick: function () {
    if (App.SlideCurrentIndex == controlDot.length) {
      App.SlideCurrentIndex = 0;
    }
    if (App.SlideCurrentIndex < controlDot.length) {
      const dotActived = $(".control__dot.active").classList.remove("active");
      const imgActived = $(".slider__Img-item.active").classList.remove(
        "active"
      );
      controlDot[App.SlideCurrentIndex].classList.add("active");
      imgsItem[App.SlideCurrentIndex].classList.add("active");
    }
    App.SlideCurrentIndex++;
  },
  start: function () {
    //   sử lý sự kiện trong DOM
    this.handleEvent();
  },
};
App.start();
