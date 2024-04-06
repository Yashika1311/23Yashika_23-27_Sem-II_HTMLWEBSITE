let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slideshow-image");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.flexitem8 img').addEventListener('click', function() {
        window.location.href = 'https://www.anayra.net/?utm_source=ThroughWHP'; // Replace 'page1.html' with the URL of the page you want to redirect to
    });

    document.querySelector('.flexitem9 img').addEventListener('click', function() {
        window.location.href = 'https://www.swarnak.com/?utm_source=ThroughWHP'; // Replace 'page2.html' with the URL of the page you want to redirect to
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the slideshow buttons
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    // Add click event listeners to the buttons
    prevButton.addEventListener("click", function() {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", function() {
        plusSlides(1);
    });
});


    // Array of words to replace "Every"
    var occasions = ["Occasions", "Season", "Reason", "Emotion", "Profession"];
    var currentIndex = 0;
    var occasionElement = document.getElementById("occasion");
    
    function changeWord() {
        fadeOut(occasionElement, function() {
            occasionElement.textContent = occasions[currentIndex];
            fadeIn(occasionElement);
            currentIndex = (currentIndex + 1) % occasions.length;
        });
    }
    
    function fadeIn(element) {
        var opacity = 0;
        var timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += 0.05;
        }, 50);
    }
    
    function fadeOut(element, callback) {
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0) {
                clearInterval(timer);
                callback();
            }
            element.style.opacity = opacity;
            opacity -= 0.05;
        }, 50);
    }
    
    // Call the function initially
    changeWord();
    
    // Call the function every 2 seconds (you can adjust this interval as needed)
    setInterval(changeWord, 2000);

      // JavaScript code to pause the animation on hover
    const marquee = document.querySelector('.marquee');

    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
    
    