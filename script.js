let buttonSubmit = document.getElementById("button");
if (buttonSubmit) {
  buttonSubmit.addEventListener("click", validateContactForm, false);
}

function validateContactForm() {
  let inputnama = document.getElementById("nama");
  let inputalamat = document.getElementById("alamat");
  let inputnomer_telpon = document.getElementById("nomer_telpon");
  let inputkeluhan = document.getElementById("keluhan");

  if (inputnama.value == null || inputnama.value == "") {
    inputnama.classList.add("invalid");
    alert("nama harus di isi");
    return false;
  }

  if (inputalamat.value == null || inputalamat.value == "") {
    inputalamat.classList.add("invalid");
    alert("alamat harus di isi");
    return false;
  }

  if (inputnomer_telpon.value == null || inputnomer_telpon.value == "") {
    inputnomer_telpon.classList.add("invalid");
    alert("nomer telpon harus di isi");
    return false;
  }

  if (inputkeluhan.value == null || inputkeluhan.value == "") {
    inputkeluhan.classList.add("invalid");
    alert("keluhan harus di isi");
    return false;
  }
}
