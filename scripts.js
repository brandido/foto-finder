var titleInput = document.querySelector('.title-input');
var captionInput = document.querySelector('.caption-input');
var fileInput = document.querySelector('.file-input');
var submitButton = document.querySelector('.submit-button');
var gallerySection = document.querySelector('.gallery');

submitButton.addEventListener('click', uploadPhoto);


function uploadPhoto() {

      var file = fileInput.files[0];
      var imageType = /image.*/;

      if (file.type.match(imageType)) {
        var reader = new FileReader();

        reader.onload = function(e) {

          var img = new Image();
          img.src = reader.result;

          gallerySection.appendChild(img);
        }
        reader.readAsDataURL(file); 
      } else {
        gallerySection.innerHTML = "File not supported!"
      }
    };

    // do createElement template literal for the card

