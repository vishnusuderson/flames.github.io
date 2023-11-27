let Name = document.getElementById("you");
let Allau = document.getElementById("allau");
let Demo = document.getElementById("demo");
let username = document.querySelector(".male");
let final = document.querySelector(".result");
let usersgf = document.querySelector(".girl");
let f = ["f", "l", "a", "m", "e", "s"];
function submit() {
  if (Name.value == "" || Allau.value == "") {
    Demo.innerHTML = "please type name in box";
  } else {
    let nee = Name.value.replace(" ", "");
    let allu = Allau.value.replace(" ", "");
    nee = nee.toLocaleLowerCase();
    allu = allu.toLocaleLowerCase();
    for (i = 0; i < 10; i++) {
      for (k = 0; k < nee.length; k++) {
        for (j = 0; j < allu.length + 1; j++) {
          if (nee.charAt(k) == allu.charAt(j)) {
            va = nee.charAt(k);
            nee = nee.replace(va, "");
            allu = allu.replace(va, "");
          }
        }
      }
    }
    count = (nee + allu).length;
    result = [
      "Friends 😁",
      "Love 💑🏽",
      "Affection 🤪",
      "Marry 💍",
      "Enemy 😈😈",
      "Sibilings 🙉",
    ];
    while (result.length > 1) {
      spilt = (count % result.length) - 1;
      if (spilt > 1) {
        rigth = result.slice(spilt + 1, result.length - 1);
        left = result.slice(0, spilt);
        result = rigth.concat(left);
      } else {
        result = result.slice(0, result.length - 1);
      }
    }
    if (result == "Love 💑🏽") {
      final.style.color = "pink";
      final.textContent = result;
      username.textContent = Name.value;
      usersgf.textContent = Allau.value;
    } else if (result == "Marry 💍") {
      final.style.color = "red";
      username.textContent = Name.value;
      final.textContent = result;
      usersgf.textContent = Allau.value;
    } else {
      username.textContent = Name.value;
      final.textContent = result;
      usersgf.textContent = Allau.value;
    }
  }
}
function reset() {
  Name.value = "";
  Allau.value = "";
  Demo.innerHTML = "";
}
