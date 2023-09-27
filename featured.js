// Get references to HTML elements
const sliderContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".left-slide");
const slidesRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Calculate the total number of slides
const slidesLength = slidesRight.querySelectorAll("div").length;

// Initialize the active slide index
let activeSlidesIndex = 0;

// Set initial position for left slides
slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event listeners to up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change the active slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  // Update the transform property to change the slide position
  slidesRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
  slidesLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
};
