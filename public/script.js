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

async function fetchRandomActivity(price) {
  try {
    // Construct the API URL with filters
    const apiUrl = `https://www.boredapi.com/api/activity?type=recreational&relaxation&price=${price}`;

    const response = await fetch(apiUrl);
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

// Function to update the activity on the webpage with filters
async function updateActivityOnPage() {
  // Get selected filter values 
  const selectedPrice = document.getElementById('price').value

  // Fetch a random activity with filters
  const randomActivity = await fetchRandomActivity(selectedPrice);

  const activityElement = document.getElementById('activity');
  activityElement.textContent = randomActivity;
}

// Event listener for the "Generate Random Activity" button
const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', updateActivityOnPage);
