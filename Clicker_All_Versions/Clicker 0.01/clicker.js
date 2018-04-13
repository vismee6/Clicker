var keksimaara = 0;
var Specimen = 0;
var iq = 0;
var multiplier = 1;
var lul = 0;
var Autism = 0;
var badMeme = 0;

function update() {
  document.getElementById("text").value = keksimaara;
  document.getElementById("amountSpecimen").innerHTML = "You Own " +  Specimen  + " Specimen ";
  document.getElementById("costSpecimen").innerHTML = ((Specimen+1) * 50) + " Chromosomes ";

  document.getElementById("amountiq").innerHTML = "You Own " +  iq  + " IQ ";
  document.getElementById("costiq").innerHTML = ((iq+1) * 100) + " Chromosomes ";

  document.getElementById("amountlul").innerHTML = "You Own " + lul + " LULS";
  document.getElementById("costlul").innerHTML = ((lul+1) * 200) + " Chromosomes";

  document.getElementById("amountAutism").innerHTML = "You Own " + Autism + " Niiloja";
  document.getElementById("costAutism").innerHTML = ((Autism+1) * 300) + " Chromosomes";

  document.getElementById("amountbadMeme").innerHTML = "You Own " + badMeme + " Meemoja";
  document.getElementById("costbadMeme").innerHTML = ((badMeme+1) * 400) + " Chromosomes";

  document.getElementById("keksimaarapersecond").innerHTML = "You are gaining " + (((Specimen) + (iq * 2) + (lul * 3)+(Autism*4)+(badMeme*5))*multiplier) + " Chromosomes per/s";
}

function timer() {
  keksimaara = keksimaara + Specimen;
  keksimaara = keksimaara + iq*2;
  keksimaara = keksimaara + lul*3;
  keksimaara = keksimaara + Autism*4;
  keksimaara = keksimaara + badMeme*5;
  update();
}

setInterval(timer, 1000);

function add() {
  keksimaara = keksimaara + 1;
  update();
}

function save() {
  localStorage.setItem("keksimaara", keksimaara);
  localStorage.setItem("Specimen", Specimen);
  localStorage.setItem("iq", iq);
  localStorage.setItem("lul", lul);
  localStorage.setItem("Autism", Autism);
  localStorage.setItem("badMeme", badMeme);
}

function load() {
  keksimaara = localStorage.getItem("keksimaara");
  keksimaara = parseInt(keksimaara);
  Specimen = localStorage.getItem("Specimen");
  Specimen = parseInt(Specimen);
  iq = localStorage.getItem("iq");
  iq = parseInt(iq);
  lul = localStorage.getItem("lul");
  lul = parseInt(lul);
  Autism = localStorage.getItem("Autism");
  Autism = parseInt(Autism);
  badMeme = localStorage.getItem("badMeme");
  badMeme = parseInt(badMeme);
  update();
}

function buySpecimen() {
  if (keksimaara >= ((Specimen + 1) * 50)) {
    keksimaara = keksimaara - ((Specimen + 1) * 50);
    Specimen = Specimen + 1;
    update();
  }
}

function buyiq() {
  if (keksimaara >= ((iq + 1) * 100)) {
    keksimaara = keksimaara - ((iq + 1) * 100);
    iq = iq + 1;
    update();
  }
}

function buylul() {
  if (keksimaara >= ((lul + 1) * 200)) {
    keksimaara = keksimaara - ((lul + 1) * 200);
    lul = lul + 1;
    update();
  }
}

function buyAutism() {
  if (keksimaara >= ((Autism + 1) * 300)) {
    keksimaara = keksimaara - ((Autism + 1) * 300);
    Autism = Autism + 1;
    update();
  }
}

function buybadMeme() {
  if (keksimaara >= ((badMeme + 1) * 400)) {
    keksimaara = keksimaara - ((badMeme + 1) * 400);
    badMeme = badMeme + 1;
    update();
  }
}
