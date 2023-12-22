let  images = [
    "images/pexels-alana-sousa-3294249.jpg",
    "images/pexels-brett-sayles-1434625.jpg",
    "images/pexels-josh-sorenson-995301.jpg",
    "images/pexels-rdne-stock-project-7020686.jpg",
    "images/pexels-vishnu-r-nair-1105666.jpg",
];

let  currentIndex = 0;
let  imageContainer = document.getElementById("imageContainer");
let  arrowLeft = document.querySelector(".arrowLeft");
let  arrowRight = document.querySelector(".arrowRight");

arrowLeft.addEventListener("click", function() {
    changeImageToLeft();

});

arrowRight.addEventListener("click", function() {
   changeImageToRight();
});


function changeImageToRight() {
    currentIndex = (currentIndex + 1);
    displayCurrentImages();
}

function changeImageToLeft() {
    /* (currentIndex - 1 + images.length) ajout la longueur du tableau pour que l'index reste positif
    m^me si current index devient négétif avec la décrémentation */
    currentIndex = (currentIndex - 1 + images.length);
    displayCurrentImages();
}


function displayCurrentImages() {
    let htmlContent = '';

    for (let i = 0; i < 3; i++) {
        let index = (currentIndex + i) % images.length;
        htmlContent += `
        <div class="card cards-display">
                <div class="card-image rounded-image">
                  <figure class="image" id="figure">
                    <img src="${images[index]}" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Partenaire n ${index}</p>
                    </div>
                  </div>
                </div>
            </div>
        `
    }

    imageContainer.innerHTML = htmlContent;
}


displayCurrentImages();
