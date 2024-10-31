/**
 * JavaScript Carousel
 *
 * Adapted from: https://github.com/c99rahul/js-carousel
 *
 */

class Carousel {
  currentSlideIndex = 0;
  container;
  slides;
  moving = true;
  isScrolling = null;

  constructor({ carouselSelector, slideSelector }) {
    /*
     * Initialize variables to keep track of carousel state and
     * references to different elements.
     */
    this.currentSlideIndex = 0;

    // Find the carousel element in the DOM.
    this.container = document.querySelector(carouselSelector);

    // If carousel element is not found, log an error and exit.
    if (!this.container) {
      console.error("Specify a valid selector for the carousel.");
      return null;
    }

    // Find all slides within the carousel
    this.slides = this.container.querySelectorAll(slideSelector);

    // If no slides are found, log an error and exit.
    if (!this.slides.length) {
      console.error("Specify a valid selector for slides.");
      return null;
    }
    this.slides[0].classList.add("active");

    let initialSlideIndex = Array.from(this.slides).findIndex((element) =>
      element.classList.contains("initial")
    );
    // If no initial slide specified, then set it to the first one
    if (initialSlideIndex == -1) initialSlideIndex = 0;

    this.moveToSlide(initialSlideIndex);
    this.attachEventListeners();

    // Set moving to false now that the carousel is ready
    this.moving = false;
  }

  adjustSlidePosition() {
    const prevSlideIndex = Array.from(this.slides).findIndex((element) =>
      element.classList.contains("active")
    );
    if (prevSlideIndex >= 0) {
      this.slides[prevSlideIndex].classList.remove("active");
    }

    this.container.scrollTo({
      top: 0,
      left: this.slides[this.currentSlideIndex].offsetLeft,
      behavior: "smooth",
    });
    this.slides[this.currentSlideIndex].classList.add("active");
  }

  updateCarouselState() {
    this.adjustSlidePosition();
  }

  getCurrentSlidePosition() {
    console.log(this.container.scrollLeft);
  }

  moveToSlide(index) {
    // no need to make any adjustments
    if (index == this.currentSlideIndex) return;
    // index out of bounds
    if (index < 0 || index >= this.slides.length) {
      console.error("Invalid slide index: " + index);
      return;
    }
    this.currentSlideIndex = index;
    this.updateCarouselState();
  }

  throttled(delay, fn) {
    let lastCall = 0;
    return function wrapper(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }

  handleCarouselScroll(event) {
    //console.log("scroll");
    //console.log(event.target);
    //console.log(event.target.scrollLeft);

    if (this.isScrolling !== null) {
      clearTimeout(this.isScrolling);
    }
    this.isScrolling = setTimeout(function () {
      // Your code to execute when scrolling stops
      console.log("Scrolling has stopped.");
      this.getCurrentSlidePosition();
    }, 150); // Adjust the delay as needed
  }

  attachEventListeners() {
    /* this.container.addEventListener(
      "scroll",
      this.throttled(1000, this.handleCarouselScroll)
    ); */
    this.container.addEventListener("scroll", this.handleCarouselScroll);
  }
}

export { Carousel };
