// Add JavaScript functionality here, such as form submission handling
document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Add code to handle form submission, e.g., sending data to a server

    // Get the form data
    const formData = new FormData(this);
    
    // Access form fields
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create an object to hold additional data (if needed)
    // const additionalData = {
    //   someKey: 'someValue', // Example additional data
    // };

    // Combine form data and additional data into a single object
    const combinedData = { ...Object.fromEntries(formData) };

    // Send the data to the server using the Fetch API
    fetch('/submit-form', {
      method: 'POST', // Use POST method to send data
      body: JSON.stringify(combinedData), // Convert data to JSON format
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response if needed
    })
    .then((data) => {
      // Handle the server's response data (if needed)
      console.log(data);
    })
    .catch((error) => {
      console.error('Error sending data to server:', error);
    });

    // Display a confirmation message (optional)
    const confirmationMessage = 'Form submitted successfully!';
    alert(confirmationMessage);

    // Optionally, clear the form fields
    this.reset();
  });
      
    
    
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});


// Function to fetch a random activity from the Bored API with price range
async function fetchRandomActivity(priceRange) {
  try {
      const response = await fetch(`https://www.boredapi.com/api/activity?type=recreational&type=relaxation&${priceRange}`);
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
  // Get the selected price range from the dropdown
  const priceDropdown = document.getElementById('price');
  const selectedPrice = priceDropdown.value;

  // Define the price range based on the selected option
  let priceRange = '';
  switch (selectedPrice) {
      case '0':
          // Free
          priceRange = 'price=0';
          break;
      case '0.2':
          // Cheap
          priceRange = 'minprice=0.1&maxprice=0.2';
          break;
      case '0.3':
          // Expensive
          priceRange = 'minprice=0.3';
          break;
      default:
          // Default to Free
          priceRange = 'price=0';
          break;
  }

  const randomActivity = await fetchRandomActivity(priceRange);
  const activityElement = document.getElementById('activity');
  activityElement.textContent = randomActivity;
}

// Event listener for the button click
const randomBtn = document.getElementById('randomBtn');
randomBtn.addEventListener('click', updateActivityOnPage);
