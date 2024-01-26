console.log("Hello World");
let listMot = [" Cachalot ", " Pétunia ", " Serviette "];
let score = 0;

const validerMot = () => {
  let motUtilisateur = prompt("Éntrez le mot" + listMot[1]);

  if (motUtilisateur === listMot) {
    score++;
    console.log("Bravo" + ", votre score est" + score);
  } else {
    console.log("Echec" + ", votre score est" + score);
  }
};

validerMot();
