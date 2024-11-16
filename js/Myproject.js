// Function to show achievement details
function showAchievementDetail(achievementName) {
    const achievementDetail = document.getElementById('achievement-detail');
    const achievementTitle = document.getElementById('achievement-title');
    const achievementDescription = document.getElementById('achievement-description');
    
    // Set title and description based on the clicked achievement
    switch (achievementName) {
        case 'Certified Expert1':
            achievementTitle.innerText = 'Online test System';
            achievementDescription.innerText = 'This project can give the link of the test which the student can appear. In it me add the test link of various website of aptitude question, logical reasoning, technical questions and may more..';
            break;
        case 'Certified Expert2':
            achievementTitle.innerText = 'This Project is Machine Learning Base project';
            achievementDescription.innerText = 'In this project we use to predict through the dataset, that the person is eligible for taking the loan or not!!';
            break;
        case 'Certified Expert3':
            achievementTitle.innerText = 'About My self(Normal HTML, CSS and Javascript Base Project)';
            achievementDescription.innerText = 'Invited as a keynote speaker at a major tech conference, sharing knowledge on industry trends and innovations';
            break;
        default:
            achievementTitle.innerText = 'Achievement Title';
            achievementDescription.innerText = 'Detailed description of the achievement will appear here.';
    }
    
    // Show the achievement detail section
    achievementDetail.style.display = 'block';
}

// Function to close achievement details
function closeAchievementDetail() {
    const achievementDetail = document.getElementById('achievement-detail');
    achievementDetail.style.display = 'none';
}


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

