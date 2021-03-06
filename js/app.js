window.onload = function () {
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
  let emailInput = document.getElementsByClassName('email-modal__input')[0];
  let emailButton = document.getElementsByClassName('email-modal__button')[0];

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Adding Event listener to GET Form value
  emailButton.addEventListener('click', () => {
    // Creating email conditional for validation
    if (emailIsValid(emailInput.value)) {
      console.log(emailInput.value);
    } else {
      /* Both of these elements are only used inside of this conditional and will never be used again */
      document
        .getElementsByClassName('email-modal__form-group')[0]
        .classList.add('email-modal__form-group--error');
      document
        .getElementsByClassName('email-modal__error-message')[0]
        .classList.add('email-modal__error-message--active');
    }
  });

  console.log(closeModal);
  console.log(emailModal);

  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
  });

  let showModal = () => {
    if (emailState === false) {
      emailModal.classList.add('email-modal--visible');
      emailState = true;
    }
  };

  document.body.addEventListener('mouseleave', () => {
    showModal();
  });

  console.log(document);
};
