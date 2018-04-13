var keksimaara = 0;
var Specimen = 0;
var iq = 0;
var SpecimenMultiplier = 1;
var iqMultiplier = 1;
var lulMultiplier = 1;
var AutismMultiplier = 1;
var badMemeMultiplier = 1;
var lul = 0;
var Autism = 0;
var badMeme = 0;

function update() {
  document.getElementById("text").value = keksimaara;

document.getElementById("amountSpecimenMultiplier").innerHTML = "Multiplier Upgrade x" + (SpecimenMultiplier+1);
document.getElementById("amountSpecimenMultiplier2").innerHTML = "x" + (SpecimenMultiplier+1);
document.getElementById("costSpecimenMultiplier").innerHTML = ((SpecimenMultiplier+1) * 1000) + " Chromosomes";
document.getElementById("currentSpecimenMultiplier").innerHTML = "Your current Multiplier Upgrade x" +(SpecimenMultiplier+1);

document.getElementById("amountiqMultiplier").innerHTML = "Multiplier Upgrade x" + (iqMultiplier+1);
document.getElementById("amountiqMultiplier2").innerHTML = "x" + (iqMultiplier+1);
document.getElementById("costiqMultiplier").innerHTML = ((iqMultiplier+1) * 1500) + " Chromosomes";
document.getElementById("currentiqMultiplier").innerHTML = "Your current Multiplier Upgrade x" +(iqMultiplier+1);

document.getElementById("amountlulMultiplier").innerHTML = "Multiplier Upgrade x" + (lulMultiplier+1);
document.getElementById("amountlulMultiplier2").innerHTML = "x" + (lulMultiplier+1);
document.getElementById("costlulMultiplier").innerHTML = ((lulMultiplier+1) * 2000) + " Chromosomes";
document.getElementById("currentlulMultiplier").innerHTML = "Your current Multiplier Upgrade x" +(lulMultiplier+1);

document.getElementById("amountAutismMultiplier").innerHTML = "Multiplier Upgrade x" + (AutismMultiplier+1);
document.getElementById("amountAutismMultiplier2").innerHTML = "x" + (AutismMultiplier+1);
document.getElementById("costAutismMultiplier").innerHTML = ((AutismMultiplier+1) * 2500) + " Chromosomes";
document.getElementById("currentAutismMultiplier").innerHTML = "Your current Multiplier Upgrade x" +(AutismMultiplier+1);

document.getElementById("amountbadMemeMultiplier").innerHTML = "Multiplier Upgrade x" + (badMemeMultiplier+1);
document.getElementById("amountbadMemeMultiplier2").innerHTML = "x" + (badMemeMultiplier+1);
document.getElementById("costbadMemeMultiplier").innerHTML = ((badMemeMultiplier+1) * 3000) + " Chromosomes";
document.getElementById("currentbadMemeMultiplier").innerHTML = "Your current Multiplier Upgrade x" +(badMemeMultiplier+1);

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

  document.getElementById("keksimaarapersecond").innerHTML = "You are gaining " +
    ((Specimen)*SpecimenMultiplier + (iq * 2)*iqMultiplier + (lul * 3)*lulMultiplier+(Autism*4)*AutismMultiplier+(badMeme*5)*(badMemeMultiplier)) + " Chromosomes per/s";
}

function timer() {
  keksimaara = keksimaara + Specimen* SpecimenMultiplier;
  keksimaara = keksimaara + iq*2* iqMultiplier;
  keksimaara = keksimaara + lul*3* lulMultiplier;
  keksimaara = keksimaara + Autism*4* AutismMultiplier;
  keksimaara = keksimaara + badMeme*5* badMemeMultiplier;
  update();
}

setInterval(timer, 1000);

function add() {
  keksimaara = keksimaara + 1;
  update();
}

function save() {
  localStorage.setItem("SpecimenMultiplier", SpecimenMultiplier);

  localStorage.setItem("iqMultiplier", iqMultiplier);

  localStorage.setItem("lulMultiplier", lulMultiplier);

  localStorage.setItem("AutismMultiplier", AutismMultiplier);

  localStorage.setItem("badMemeMultiplier", badMemeMultiplier);

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

  SpecimenMultiplier = localStorage.getItem("SpecimenMultiplier");
  SpecimenMultiplier = parseInt(SpecimenMultiplier);

  iqMultiplier = localStorage.getItem("iqMultiplier");
  iqMultiplier = parseInt(iqMultiplier);

  lulMultiplier = localStorage.getItem("lulMultiplier");
  lulMultiplier = parseInt(lulMultiplier);

  AutismMultiplier = localStorage.getItem("AutismMultiplier");
  AutismMultiplier = parseInt(AutismMultiplier);

  badMemeMultiplier = localStorage.getItem("badMemeMultiplier");
  badMemeMultiplier = parseInt(badMemeMultiplier);

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

function buySpecimenMultiplier( ) {
  if (keksimaara >= ((SpecimenMultiplier+1)* 1000)) {
    keksimaara = keksimaara - ((SpecimenMultiplier+1) * 1000);
    SpecimenMultiplier = SpecimenMultiplier + 1;
    update();
  }
}

function buyiqMultiplier( ) {
  if (keksimaara >= ((iqMultiplier+1)* 1500)) {
    keksimaara = keksimaara - ((iqMultiplier+1) * 1500);
    iqMultiplier = iqMultiplier + 1;
    update();
  }
}

function buylulMultiplier( ) {
  if (keksimaara >= ((lulMultiplier+1)* 2000)) {
    keksimaara = keksimaara - ((lulMultiplier+1) * 2000);
    lulMultiplier = lulMultiplier + 1;
    update();
  }
}

function buyAutismMultiplier( ) {
  if (keksimaara >= ((AutismMultiplier+1)* 2500)) {
    keksimaara = keksimaara - ((AutismMultiplier+1) * 2500);
    AutismMultiplier = AutismMultiplier + 1;
    update();
  }
}

function buybadMemeMultiplier( ) {
  if (keksimaara >= ((badMemeMultiplier+1)* 3000)) {
    keksimaara = keksimaara - ((badMemeMultiplier+1) * 3000);
    badMemeMultiplier = badMemeMultiplier + 1;
    update();
  }
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
