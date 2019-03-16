// When the document is ready
$(document).ready(function() {
  // List of images
  // Source of Images: NAISAC
  var images = [
    "images/image1.jpg", //taken by Alex Curran
    "images/image2.jpeg", //taken by Alex Curran
    "images/image3.jpeg", //taken by Alex Curran
    "images/image4.jpeg", // Taken by John from Brown University
    "images/image5.jpeg", //Taken by Alex Curran
    "images/image6.jpeg", // Taken by Alex Curran
    "images/insta1.jpg", //Taken by Alex Curran
  ];

  var captions = [
    "Hiking at Taughannock Falls State Park \n Taken by Alex Curran",
    "Pumpkin carving with NAISAC \n Taken by Alex Curran",
    "Halloween with NAISAC \n Taken by Alex Curran",
    "Ivy Native Council Fall Summit 2018 \n Taken by John of Brown University",
    "Painting with Akwesasne Freedom School \n Taken by Alex Curran",
    "Clubfest 2018 \n Taken by Alex Curran",
    "Last G-Body meeting of the semester \n Taken by Alex Curran"
  ]

  // The index of the image that is currently displayed
  var currentIndex = 0;

  changeImgs();

  function circleBack(ind) {
    if(ind<0){
      ind = images.length-1;
    }
    if(ind>=images.length){
      ind = 0;
    }
    return ind;
  }

  function changeImgs(){
    var indexLeft = circleBack(currentIndex-1);
    var indexRight = circleBack(currentIndex+1);

    var pic = document.getElementById("slideshowImage");
    //var capt = document.getElementById("galCaption");

    pic.src = images[currentIndex];
    pic.alt = captions[currentIndex];
    //capt.innerText = captions[currentIndex];
  }

  // When the next button is clicked
  $("#galNext").click(function () {
    var oldMain = document.getElementById("oldImg");
    oldMain.src = images[currentIndex];


    currentIndex++;
    currentIndex = circleBack(currentIndex);


    oldMain.classList.add("swipeLeft");
    changeImgs();

    setTimeout(function() {
        oldMain.classList.remove("swipeLeft");
    }, 500);
  });

  $("#galBack").click(function () {
    var oldMain = document.getElementById("oldImg");
    oldMain.src = images[currentIndex];

    currentIndex--;
    currentIndex = circleBack(currentIndex);
    changeImgs();

    oldMain.classList.add("swipeRight");
    changeImgs();

    setTimeout(function() {
        oldMain.classList.remove("swipeRight");
    }, 500);
  });


});
