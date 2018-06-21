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
  function createAlbumCard(ul) {
    console.log('works!');
    var albumCard = document.createElement('li');
    albumCard.innerHTML = `<section class='foto-album-card'>
      <section class='foto-title'>${titleInput.value}</section>
      <img class='chooseFile' src=${img.value} />
      <p class='foto-caption'>${captionInput.value}</p>
      <footer class='trash-heart-icons'>
        <button class='trash-btn' <img class='trash-btn' src='icons/delete.svg'></button>
        <button class='heart-btn' <img class='heart-btn' src='icons/favorite.svg'></button>
      </footer>
      </section>`;

  newAlbumCard.appendChild(albumCard);

};


