let chiffre1 = prompt("Entrez un chiffre");
let chiffre2 = prompt("Entrez un second chiffre");

let addition = chiffre1 + chiffre2;
let soustraction = chiffre1 - chiffre2;
let division = chiffre1/chiffre2;
let multiplication = chiffre1 * chiffre2;


let result_addition = `${chiffre1} + ${chiffre2} = ${addition}`;
let result_soustraction = `${chiffre1} - ${chiffre2} = ${soustraction}`;
let result_division = `${chiffre1} / ${chiffre2} = ${division}`;
let result_multiplication = `${chiffre1} * ${chiffre2} = ${multiplication}`;

let alerte = `${result_addition}, ${result_soustraction}, ${result_division}, ${result_multiplication}`;

alert(alerte);