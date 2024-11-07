interface Entete {
  code: string;
  nom: string;
  prenom: string;
  sexe: string;
  dateNaissance: string;
  adresse: string;
  [key: string]: string;
}
export const EnteteSquelette: Entete = {
  code: "Code",
  nom: "Nom",
  prenom: "Prenom",
  sexe: "Sexe",
  dateNaissance: "DateNaissance",
  adresse: "Adresse",
};
