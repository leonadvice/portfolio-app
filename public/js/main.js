const openCV = () => {
  document.getElementById('cv-button').click();
};

const openProjects = () => {
  document.getElementById('projects-button').click();
};

const chatForm = document.getElementById('chatForm');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  (async () => {
    const request = await fetch('./post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: e.target.elements.email.value,
        name: e.target.elements.name.value,
        message: e.target.elements.message.value
      })
    });
    const response = await request.json();

    const resDiv = document.getElementById('response');
    resDiv.innerHTML = '';
    let newRes = document.createElement('div');

    if (response.status == 'ok') {
      newRes.classList.add('ok');
      newRes.textContent =
        'Message sent successfully. Please check your email for comfirmation.';

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      newRes.classList.add('err');
      newRes.textContent = response.status;
    }

    resDiv.appendChild(newRes);
  })();
});
