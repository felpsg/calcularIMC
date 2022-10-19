var weight, height, measure, bmi, error;

function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  error = "Por favor, insira alguns valores";
  height /= 100;
  height *= height;
  bmi = weight / height;
  bmi = bmi.toFixed(1);

  if (bmi <= 18.4) {
    measure = "Seu IMC é " + bmi + " que significa " + " que você está abaixo do peso, magricela de merda!";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    measure = "Seu IMC é " + bmi + " que significa " + " que você é normal, mas fecha essa boca!";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "Seu IMC é " + bmi + " que significa " + "que você está acima do peso, gordão em!";
  } else if (bmi >= 30) {
    measure = "Seu IMC é " + bmi + " que significa " + "que você é obeso seu safado!";
  }


  if (weight === 0) {
    document.getElementById("results").innerHTML = error;
  } else if (height === 0) {
    document.getElementById("results").innerHTML = error;
  }
  else {

    document.getElementById("results").innerHTML = measure;
  }
  if (weight < 0) {
    document.getElementById("results").innerHTML = "Negative Values not Allowed";
  }
}