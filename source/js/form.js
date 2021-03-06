//ФОРМА

const userName = document.querySelector('input[name="userName"]');
const userPhone = document.querySelector('input[name="tel"]');

if (userName && userPhone) {
  const getCorrectName = () => {
    return (evt) => {
      const valueName = userName.value;
      const check = /^[a-zA-Zа-яА-Я]*$/;

      for (let i = 0; i < valueName.length; i++) {
        !check.test(valueName[i]) ? userName.setCustomValidity('Имя должно состоять только букв') : userName.setCustomValidity('');
      }
    }
  };

  userName.addEventListener('input', getCorrectName());

  const getCorrectPhone = () => {
    return (evt) => {
      const valuePhone = userPhone.value;
      const check = /^[0-9]*$/;

      for (let i = 0; i < valuePhone.length; i++) {
        !check.test(valuePhone[i]) ? userPhone.setCustomValidity('Номер телефона должен состоять из цифр') : userPhone.setCustomValidity('');
      }
    }
  }

  userPhone.addEventListener('input', getCorrectPhone());
}
