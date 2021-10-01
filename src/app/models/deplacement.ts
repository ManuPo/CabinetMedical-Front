import { Infirmiere } from "./infirmiere";
import { Patient } from "./patient";

export interface Deplacement {
    id:number,
    date:string,
    cout:number,
    patient:Patient,
    infirmiere:Infirmiere
}
