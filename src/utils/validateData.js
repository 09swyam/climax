const validateData = (email, password) => {
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if (!validEmail) {
    return "Invalid email";
  }

  if (!validPassword) {
    return "Invalid Password";
  }

  return null;
};

export default validateData;
