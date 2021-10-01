import { Adresse } from "./adresse";
import { Patient } from "./patient";

export interface Infirmiere {
    id:number,
    numeroProfessionnel:number,
    nom:string,
    prenom:string,
    telPro:string,
    telPerso:string,
    adresse:Adresse,
    patients:Array<Patient>
}
