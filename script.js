let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.classList.remove("show"); // Hide all slides
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Reset to first slide if at the end

  slides[slideIndex - 1].classList.add("show"); // Show the current slide

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);


//popup

// Open the pop-up based on clicked box
function openPopup(testType) {
  document.getElementById(testType + 'Popup').style.display = 'flex';
}

// Close the pop-up
function closePopup(testType) {
  document.getElementById(testType + 'Popup').style.display = 'none';
}

// Handle form submission
document.getElementById("bloodTestForm").onsubmit = function(event) {
  event.preventDefault();
  
  // Show the download link after successful submission
  document.getElementById("downloadReceipt").style.display = 'block';
};

// Restrict available dates to Monday to Friday
document.getElementById("date").addEventListener("input", function(event) {
  let selectedDate = new Date(event.target.value);
  let dayOfWeek = selectedDate.getDay();  // Sunday - 0, Monday - 1, ..., Saturday - 6
  
  // Disable weekends (Saturday and Sunday)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert("Please select a date between Monday and Friday.");
      event.target.value = "";  // Reset the date field if weekend is selected
  }
});

// Example function to generate a confirmation receipt (you can customize this)
function generateReceipt(testType) {
  const receiptContent = `
      <h3>Confirmation for ${testType} Booking</h3>
      <p>Thank you for booking a ${testType}. Your appointment has been confirmed. We will see you on the scheduled date and time.</p>
  `;
  const receiptWindow = window.open('', '', 'width=600,height=400');
  receiptWindow.document.write(receiptContent);
  receiptWindow.document.close();
}

// Example of download link behavior
document.getElementById('downloadReceipt').addEventListener('click', function() {
  generateReceipt('Blood Test');
});
