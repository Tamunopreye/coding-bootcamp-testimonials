// main.js
console.log("Hello World");

// Sample data for slides
const slides = [
    {
        imageSrc: "/images/image-tanya.jpg",
        quote: `" I've been intrested in coding for a while but never
    taken the jump, until now. I couldnt' recommend this
    course enough. I'm now in the job of my dreams and so
    excited about the future. "`,
        user: "Tanya Sinclair",
        profession: "UX Engineer",
    },
    {
        imageSrc: "/images/image-john.jpg",
        quote: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
        user: "John Tarkpor",
        profession: "Junior Front-end Developer",
    },
];

let currentSlideIndex = 0;

// Function to update the slide content
const updateSlideContent = () => {
    const userImage = document.getElementById("user-img");
    const slideQuote = document.getElementById("slide-quote");
    const slideUser = document.getElementById("user-name");
    const slideProfession = document.getElementById("user-profession");
    // Update image source and quote text
    userImage.src = slides[currentSlideIndex].imageSrc;
    slideQuote.textContent = slides[currentSlideIndex].quote;
    slideUser.textContent = slides[currentSlideIndex].user;
    slideProfession.textContent = slides[currentSlideIndex].profession;
};

// Initialize the slide content
updateSlideContent();

// Function to handle the "Next Slide" button click
document.getElementById("next").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Wrap around to the first slide if at the end
    updateSlideContent();
});

// Function to handle the "Previous Slide" button click
document.getElementById("prev").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Wrap around to the last slide if at the beginning
    updateSlideContent();
});
