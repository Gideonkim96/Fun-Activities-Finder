// Add JavaScript functionality here, such as form submission handling
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Add code to handle form submission, e.g., sending data to a server
    alert('Form submitted successfully!');
  });
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Function to fetch a random activity from the Bored API
async function fetchRandomActivity() {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity?type=recreational');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.activity;
  } catch (error) {
    console.error('Error fetching random activity:', error);
    return 'Failed to fetch activity. Please try again later.';
  }
}

// Function to update the activity on the webpage
async function updateActivityOnPage() {
  const randomActivity = await fetchRandomActivity();
  const activityElement = document.getElementById('activity');
  activityElement.textContent = randomActivity;
}

// Event listener for the button click
const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', updateActivityOnPage);

