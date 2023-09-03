function setDarkTheme() {
    document.body.style.backgroundColor = "#333";
  }

  function setLightTheme() {
    document.body.style.backgroundColor = "white";
  }





  // JavaScript to handle photo expansion

const photos = document.querySelectorAll('.photo');
const fullPhotoOverlay = document.querySelector('.full-photo-overlay');
const fullPhoto = document.querySelector('.full-photo');
const closeBtn = document.querySelector('.close-btn');

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        // Set the src of the full photo to the clicked photo
        fullPhoto.src = photos[index].querySelector('img').src;
        
        // Show the full photo overlay
        fullPhotoOverlay.style.display = 'block';
    });
});

function closeFullPhoto() {
    // Hide the full photo overlay when the close button is clicked
    fullPhotoOverlay.style.display = 'none';
}
