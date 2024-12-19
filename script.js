let cl = console.log;

/* user gender */ let userGender = null;

function getSelectedGender() {
  const genderRadios = document.getElementsByName("gender");
  genderRadios.forEach((radio) => {
    if (radio.checked) {
      userGender = radio.value;
    }
  });
  return userGender;
}
document.getElementById("gender").addEventListener("change", () => {
  userGender = getSelectedGender();
});

/* user age */ const userAge = document.getElementById("age-input");

/* user height */ let userHeight = "";

function calculteUserHeight(userFeet, userInch) {
  userHeight = userFeet * 12 + userInch;
}

let userFeetInput = document.getElementById("height-input-ft");
let userInchInput = document.getElementById("height-input-in");

/* user weight */ const userWeight = document.getElementById("weight-input");

let userInfo = {
  gender: "",
  age: 0,
  height: 0,
  weight: 0,
};

userWeight.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getUserInfo();
    showResults();
  }
});

function getUserInfo() {
  userInfo.gender = userGender;
  userInfo.age = userAge.value;
  calculteUserHeight(Number(userFeetInput.value), Number(userInchInput.value));
  userInfo.height = userHeight;
  userInfo.weight = userWeight.value;
  cl(userInfo);

  calculateBMI();
  calculateBMICategory();
}

let userResults = {
  BMI: 0,
  Category: "",
  Feedback: "",
};

function calculateBMI() {
  userBMI = (userInfo.weight * 703) / userInfo.height ** 2;
  userBMI = Math.round(userBMI * Math.pow(10, 2)) / Math.pow(10, 2);
  userResults.BMI = userBMI;
}

function calculateBMICategory() {
  if (userBMI < 18.5) {
    userResults.Category = "Underweight";
    userResults.Feedback =
      "You might be malnurished, have an eating disorder, or something like that. You are as skinny as a twig. EAT SOME STINKIN' FOOD, BRO!";
  } else if (userBMI >= 18.5 && userBMI < 25) {
    userResults.Category = "Normal weight";
    userResults.Feedback =
      "Congratulations, you're normal. You're not skinny, you're not fat...yuh.";
  } else if (userBMI >= 25 && userBMI < 30) {
    userResults.Category = "Overweight";
    userResults.Feedback =
      "You, my friend, are a little chubby. You have a risk of heart failure and general LIFE failure. Cut back on the nachos.";
  } else if (userBMI >= 30 && userBMI < 35) {
    userResults.Category = "Obese (Class 1)";
    userResults.Feedback = "you fat.";
  } else if (userBMI >= 35 && userBMI < 40) {
    userResults.Category = "Obese (Class 2)";
    userResults.Feedback = "You are fat :)";
  } else if (userBMI >= 40) {
    userResults.Category = "Obese (Class 3)";
    userResults.Feedback = "How are you still alive??";
  }
}

const bmiDisplay = document.getElementById("bmi-results");
const categoryDisplay = document.getElementById("weight-category");
const feedbackDisplay = document.getElementById("feedback");

function showResults() {
  bmiDisplay.innerHTML = `<span>BMI: </span>${userResults.BMI}`;
  categoryDisplay.innerHTML = `<span>Category: </span>${userResults.Category}`;
  feedbackDisplay.innerHTML = `<span>Feedback: </span>${userResults.Feedback}`;
}
