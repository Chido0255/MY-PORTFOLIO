const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('glowing');
    setTimeout(() => {
      link.classList.remove('glowing');
    }, 1000); // remove glowing class after 1 second
  });
});

// Get the text element
const glowText = document.getElementById('glow-text');

// Create a glowing effect on the text box
setInterval(() => {
  glowText.style.boxShadow = `0 0 10px rgba(0, 128, 0, ${Math.random() * 0.5 + 0.5})`;
}, 50);

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('comment').value;

  // LinkedIn API settings
  const apiKey = 'YOUR_LINKEDIN_API_KEY';
  const apiSecret = 'YOUR_LINKEDIN_API_SECRET';
  const accessToken = 'YOUR_LINKEDIN_ACCESS_TOKEN'; // obtain this by authenticating with LinkedIn API
  const recipientId = 'https://www.linkedin.com/in/chido0255/'; // your LinkedIn profile ID

  // Create a new message
  const messageData = {
    'comment': message,
    'subject': subject,
    'recipients': {
      'values': [
        {
          'person': {
            '_path': `/people/~(${recipientId})`
          }
        }
      ]
    }
  };

  // Send the message using LinkedIn API
  fetch(`https://api.linkedin.com/v2/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageData)
  })
  .then(response => response.json())
  .then(data => console.log(`Message sent successfully!`, data))
  .catch(error => console.error(`Error sending message:`, error));
});

// Add event listeners to the image wraps
document.querySelectorAll('.image-wrap').forEach((wrap) => {
  wrap.addEventListener('mouseover', () => {
    wrap.classList.add('hovered');
  });
  wrap.addEventListener('mouseout', () => {
    wrap.classList.remove('hovered');
  });
  wrap.addEventListener('click', () => {
    // Add your link opening logic here
    window.open(wrap.querySelector('a').href, '_blank');
  });
});