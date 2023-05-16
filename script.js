window.addEventListener("DOMContentLoaded", () => {
  const thumbnailGrid = document.getElementById("thumbnail-grid");
  const chosenImage = document.getElementById("chosen-image");
  const chooseSpaceSection = document.getElementById("choose-space");
  const chooseFlavorSection = document.getElementById("choose-flavor");

  // Load thumbnails and set click event
  for (let i = 1; i <= 19; i++) {
    const thumbnailSrc = `Images/Thumbnails/${String(i).padStart(2, "0")}.jpg`;

    const thumbnailImg = document.createElement("img");
    thumbnailImg.setAttribute("src", thumbnailSrc);
    thumbnailImg.setAttribute("alt", `Thumbnail ${i}`);
    thumbnailImg.classList.add("thumbnail-img");

    thumbnailImg.addEventListener("click", () => {
      const fileName = thumbnailSrc.substring(thumbnailSrc.lastIndexOf("/") + 1, thumbnailSrc.lastIndexOf("."));
      const renderedImageSrc = `Images/Renders/${fileName}.png`;

      // Hide the "Choose your space" section
      chooseSpaceSection.classList.add("hidden");

      // Set the chosen image source
      chosenImage.setAttribute("src", renderedImageSrc);

      // Show the "Choose your flavor" section
      chooseFlavorSection.classList.remove("hidden");
    });

    thumbnailGrid.appendChild(thumbnailImg);
  }



});
