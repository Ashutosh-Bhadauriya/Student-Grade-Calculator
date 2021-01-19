const calculator = () => {
  let wt = document.getElementById("wt").value;
  let os = document.getElementById("os").value;
  let cn = document.getElementById("cn").value;
  let ft = document.getElementById("ft").value;
  let grades = "";

  let sum = parseFloat(wt) + parseFloat(os) + parseFloat(cn) + parseFloat(ft);
  //   alert(sum);

  let perc = (sum / 400) * 100;
  //   alert(perc);

  if (perc <= 100 && perc >= 80) {
    grades = "A";
  } else if (perc <= 79 && perc >= 60) {
    grades = "B";
  } else if (perc <= 59 && perc >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  if (perc >= 39.5) {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 400 you obtained  ${sum} and percentage is ${perc}%. <br> You passed the exam with  ${grades} grade. `;
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = ` Out of 400 you obtained  ${sum} and percentage is ${perc}%. <br> Your  grade ${grades}. Try again harder next time. `;
  }
};
