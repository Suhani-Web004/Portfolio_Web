// Predefined achievement details
const achievements = {
    "Award Winning Project": "This project received top honors at the XYZ Awards, showcasing excellence in innovative design and development.",
    "Top Speaker": "Delivered a keynote at the ABC Tech Conference, inspiring hundreds of professionals with insights on emerging technologies.",
    "Certified Expert": "Achieved certification as a professional in the field, recognized globally for knowledge and expertise."
};

// Function to display achievement detail
function showAchievementDetail(achievementName) {
    const achievementDetail = document.getElementById('achievement-detail');
    const achievementTitle = document.getElementById('achievement-title');
    const achievementDescription = document.getElementById('achievement-description');

    achievementTitle.textContent = achievementName;
    achievementDescription.textContent = achievements[achievementName];
    
    achievementDetail.style.display = 'block';
}

// Function to close the achievement detail
function closeAchievementDetail() {
    document.getElementById('achievement-detail').style.display = 'none';
}


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
