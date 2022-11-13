const formRef = document.querySelector("form.login-form");

const formCheck = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  const submitData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(submitData);

  event.currentTarget.reset();
};

formRef.addEventListener("submit", formCheck);
