var navLinks = document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right = "0";
}   
function hidemenu(){
    navLinks.style.right = "-200px";
}

// --- AUTOSCROLLING BANNER LOGIC ---
const header = document.querySelector('.header');

// Array holding your Main Images
const images = [
    // Main Image 1
    "https://123-321-123-321.s3.ap-southeast-2.amazonaws.com/sri_ramdeobaba_kamla_nehru_engineering_college_katol_road_cover.jpg",
    // Main Image 2
    "https://123-321-123-321.s3.ap-southeast-2.amazonaws.com/Untitled-design.jpg",
    // Main Image 3 (Replace this link when you get the 3rd image)
    "https://123-321-123-321.s3.ap-southeast-2.amazonaws.com/sri_ramdeobaba_kamla_nehru_engineering_college_katol_road_cover.jpg" 
];

let currentIndex = 0;

function changeBackgroundImage() {
    // Apply the new background image with the dark gradient overlay to make text readable
    header.style.backgroundImage = `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url('${images[currentIndex]}')`;

    // Move to the next image, loop back to the first image if at the end
    currentIndex = (currentIndex + 1) % images.length;
}

// Check if we are on the homepage (where the .header exists) before running the autoscroller
if (header) {
    // Run immediately when the page loads
    changeBackgroundImage();
    
    // Change the image automatically every 4000 milliseconds (4 seconds)
    setInterval(changeBackgroundImage, 4000);
}