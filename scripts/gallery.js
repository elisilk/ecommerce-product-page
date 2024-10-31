const Gallery = ({ gallerySelector, slideSelector }) => {
  /*
   * Gather the core HTML elements.
   */

  // Find the gallery element in the DOM
  const container = document.querySelector(gallerySelector);
  // If gallery element is not found, log an error and exit.
  if (!container) {
    console.error("Specify a valid selector for the gallery.");
    return null;
  }

  // Find all slides within the gallery
  const slides = container.querySelectorAll(slideSelector);
  // If no slides are found, log an error and exit.
  if (!slides.length) {
    console.error("Specify a valid selector for slides.");
    return null;
  }

  // Set default active slide index
  let activeSlideIndex = -1;

  /*
   * Core Functions
   */

  const isValidSlideIndex = (index) => {
    return index >= 0 && index < slides.length;
  };

  const getActiveSlideIndex = () => {
    return activeSlideIndex;
  };

  const setActiveSlideIndex = (index) => {
    if (!isValidSlideIndex(index)) return;
    activeSlideIndex = index;
    return activeSlideIndex;
  };

  const getPhotoIndexOfCurrentSlidePosition = () => {
    return Array.from(slides).findIndex((slide) => {
      return container.scrollLeft <= slide.offsetLeft;
    });
  };

  const getPhotoIndexOfCurrentActiveSlide = () => {
    return Array.from(slides).findIndex((slide) =>
      slide.classList.contains("active")
    );
  };

  // Assumes current slide position is correct, then
  // updates the active slide to reflect that position
  const updateActiveSlide = () => {
    // Find the slide where the slider is currently positioned
    const photoIndexOfCurrentSlidePosition =
      getPhotoIndexOfCurrentSlidePosition();

    // Find the slide currently listed as "active"
    let photoIndexOfCurrentActiveSlide = getPhotoIndexOfCurrentActiveSlide();

    console.log(container);
    console.log(
      `Updating active slide - slide position (${photoIndexOfCurrentSlidePosition}) - active slide (${photoIndexOfCurrentActiveSlide})`
    );

    if (photoIndexOfCurrentSlidePosition === photoIndexOfCurrentActiveSlide)
      return;

    if (photoIndexOfCurrentActiveSlide !== -1)
      // Remove "active" class from previous active slide
      slides[photoIndexOfCurrentActiveSlide].classList.remove("active");
    // What if more than one slide is currently listed as active? Loop through this and clear all first?

    // Add "active" class to current active slide
    slides[photoIndexOfCurrentSlidePosition].classList.add("active");

    // Update active slide index state variable
    setActiveSlideIndex(photoIndexOfCurrentSlidePosition);

    // Report success
    if (
      !(
        photoIndexOfCurrentSlidePosition ===
        Array.from(slides).findIndex((element) =>
          element.classList.contains("active")
        )
      )
    )
      console.error("Error: Slide index not updated.");
  };

  // Helper function to wait until scrolling on the
  // container has ended
  const onScrollStop = (callback) => {
    let isScrolling;
    container.addEventListener(
      "scroll",
      (e) => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          callback();
        }, 150);
      },
      false
    );
  };

  // Assumes designated index is where the slide should be,
  // then updates slide position to reflect that
  const updateSlidePosition = (index) => {
    if (!isValidSlideIndex(index)) return;
    // Move container scroll to the current active slide
    container.scrollTo({
      top: 0,
      left: slides[index].offsetLeft,
      behavior: "instant",
    });
  };

  const moveToSlide = (index) => {
    // Wait for scrolling to finish
    updateSlidePosition(index);
    onScrollStop(() => {
      updateActiveSlide();
    });
    return;
  };

  const moveToNextSlide = () => {
    moveToSlide(getActiveSlideIndex() + 1);
  };

  const moveToPreviousSlide = () => {
    moveToSlide(getActiveSlideIndex() - 1);
  };

  /*
   * Initialize the gallery
   */

  let initialSlideIndex = Array.from(slides).findIndex((element) =>
    element.classList.contains("initial")
  );
  // If no initial slide specified, then set it to the first one
  if (initialSlideIndex === -1) initialSlideIndex = 0;
  moveToSlide(initialSlideIndex);
  updateActiveSlide();

  return {
    container: container,
    slides: slides,
    numSlides: slides.length,
    initialSlideIndex: initialSlideIndex,
    activeSlideIndex: activeSlideIndex,
    getActiveSlideIndex,
    setActiveSlideIndex,
    updateActiveSlide,
    updateSlidePosition,
    moveToSlide,
    moveToNextSlide,
    moveToPreviousSlide,
    onScrollStop,
  };
};

export { Gallery };
