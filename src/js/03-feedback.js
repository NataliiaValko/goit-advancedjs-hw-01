import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const feedbackFormKey = 'feedback-form-state';
const feedbackFormData = {
  email: '',
  message: '',
};

const onFeedbackFormInput = ({ target: { name, value } }) => {
  feedbackFormData[name] = value;

  try {
    localStorage.setItem(feedbackFormKey, JSON.stringify(feedbackFormData));
  } catch (error) {
    console.log(error.message);
  }
};

const onLoadPage = () => {
  try {
    const dataFromLS = JSON.parse(localStorage.getItem(feedbackFormKey));
    if (!dataFromLS) return;

    feedbackFormData.email = formRef.elements.email.value = dataFromLS?.email;
    feedbackFormData.message = formRef.elements.message.value =
      dataFromLS?.message;
  } catch (error) {
    console.log(error.message);
  }
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const {
    email: { value: emailValue },
    message: { value: messageValue },
  } = event.target.elements;

  if (!emailValue || !messageValue) return;

  console.log(feedbackFormData);

  localStorage.removeItem(feedbackFormKey);
  event.target.reset();
  feedbackFormData.email = '';
  feedbackFormData.message = '';
};

onLoadPage();
formRef.addEventListener('submit', onFeedbackFormSubmit);
formRef.addEventListener('input', throttle(onFeedbackFormInput, 500));
