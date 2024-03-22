const feedbackForm = document.querySelector('.feedback-form');
let formData = {};

feedbackForm.addEventListener('input', saveFormData);

function saveFormData(event) {
  event.preventDefault();

  formData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', function () {
  const localData = localStorage.getItem('feedback-form-state');
  if (localData) {
    const localDataInput = JSON.parse(localData);

    document.querySelector('input[name="email"]').value = localDataInput.email;
    document.querySelector('textarea[name="message"]').value =
      localDataInput.message;
  }
});

feedbackForm.addEventListener('submit', submitFormData);

function submitFormData(event) {
  event.preventDefault();
  const emailValue = feedbackForm.elements.email.value.trim();
  const messageValue = feedbackForm.elements.message.value.trim();

  if (messageValue === '' || emailValue === '') {
    alert('Please write your email and message in the input field');
    return;
  }
  console.log({ email: emailValue, message: messageValue });

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}
