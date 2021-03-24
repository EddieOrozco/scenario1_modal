// All Modal Events
//  Adding function to window onload
window.onload = function () {
  let emailState = false;
  // Creating Variable from HTML Elements
  let emailModal = document.getElementsByClassName('email-modal')[0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
  // View on console if HTML element was selected
  console.log(closeModal);
  console.log(emailModal);

  // Event Listener Method
  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
  });

  // Created Function for event listener
  let showModal = () => {
    if (emailState === false) {
      // Adding classList via JS to HTML Element
      emailModal.classList.add('email-modal--visible');
      emailState = true;
    }
  };

  // Adding event listener to the HTML document w/ attached function
  document.body.addEventListener('mouseleave', () => {
    // Trigged the Conditional Function
    showModal();
  });

  console.log(document);
};
