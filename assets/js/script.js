document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide'); // Select all slides
    const prevButton = document.querySelector('.prev'); // Select the "Previous" button
    const nextButton = document.querySelector('.next'); // Select the "Next" button
    let currentIndex = 0; // Track the current slide index
  
    // Function to show the slide at the given index
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); // Add 'active' class to the current slide and remove from others
      });
    }
  
    // Function to go to the previous slide
    function prevSlide() {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; // Wrap around if at the first slide
      showSlide(currentIndex); // Show the updated slide
    }
  
    // Function to go to the next slide
    function nextSlide() {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; // Wrap around if at the last slide
      showSlide(currentIndex); // Show the updated slide
    }
  
    // Attach event listeners to the buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    // Initialize the slider by showing the first slide
    showSlide(currentIndex);
  });
  
