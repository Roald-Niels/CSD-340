window.onload = function() {
  // Get the images
  const fightImage = document.getElementById('Fight');
  const spaceImage = document.getElementById('Space');

  // Helper function to create the popup
  function showPopup(imageId, src, width, height) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.onclick = function() {
      document.body.removeChild(overlay);
      document.body.removeChild(popup);
    };

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <h3>Image Details</h3>
      <p>File: ${src}</p>
      <p>Resolution: ${width} x ${height}</p>
      <button onclick="document.body.removeChild(document.querySelector('.popup')); document.body.removeChild(document.querySelector('.popup-overlay'));">Close</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
  }

  // Function to handle image click
  function handleClick(event) {
    const img = event.target;
    const src = img.src.substring(img.src.lastIndexOf('/') + 1);
    const image = new Image();
    image.onload = function() {
      const width = image.width;
      const height = image.height;
      showPopup(img.id, src, width, height);
    };
    image.src = img.src;
  }

  // Set up hover effects for the fight image
  fightImage.onmouseover = function() {
    fightImage.src = 'Fight_2.jpg';
  };
  
  fightImage.onmouseout = function() {
    fightImage.src = 'Fight_1.jpg';
  };
  
  // Set up hover effects for the space image
  spaceImage.onmouseover = function() {
    spaceImage.src = 'Space_2.jpg';
  };
  
  spaceImage.onmouseout = function() {
    spaceImage.src = 'Space_1.jpg';
  };
  
  // Add click event listeners to the images
  fightImage.onclick = handleClick;
  spaceImage.onclick = handleClick;
};