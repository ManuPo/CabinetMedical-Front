import { Adresse } from "./adresse";
import { Infirmiere } from "./infirmiere";

export interface Patient {
    id:number,
    nom:string,
    prenom:string,
    dateDeNaissance:string,
    sexe:string,
    numeroSecuriteSociale:string,
    adresse:Adresse,
    infirmiere:Infirmiere
}
