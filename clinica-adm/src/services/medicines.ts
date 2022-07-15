import { collection, doc, Firestore, getDoc, getDocs, query, addDoc } from "firebase/firestore";

import { db, firestore } from "./firebase";
import moment from 'moment';

export interface MedicineI{
    id?: string,
    batch: string,
    creation_date?: string,
    days_to_alert: number,
    due_date: string,
    name: string,
    quantity: number,
    quantity_to_alert: number,
    excluded?: boolean
}
export type medicineDataI = MedicineI[];
/* const medicineRef = doc(firestore, 'medicines');
// const docSnap = await getDoc(medicineRef);


export async function getMedicinesData(){
    await getDoc(medicineRef)
    .then((medicines) => {
        console.log(medicines.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

 */

/* //FUNCIONA
 export async function getAllMedicinesData(){
    // const medicinesData = await getDocs(collection(firestore, "medicines"));
    // let medicineData: medicineDataI[];
    let medicineData:  medicineDataI = [];

    await getDocs(collection(firestore, "medicines"))
    .then((medicines) => {
        // medicineData = medicineData.slice(1)
        // console.log(medicines.docs)
        medicines.forEach((doc) =>{
            let value = {id: doc.id, ...doc.data()} as MedicineI;
            medicineData.push(value);
        })
        // console.dir(medicineData);
        return medicineData;
    })
    .catch((err) => {
        console.log(err)
    })
} */


// FUNCIONA

export async function getAllMedicinesData() {

        const medicinesCol = collection(db, 'medicines');
        const medicineSnapshot = await getDocs(medicinesCol);
        return medicineSnapshot.docs.map(doc => ( {id: doc.id, ...doc.data()} as MedicineI));

        
        // return medicinesList;
} 


export async function addMedicineData(medicine: MedicineI) {
    const medRef = await addDoc(collection(db, 'medicines'), {
        ...medicine,
        // creation_date: moment().format('DD/MM/yyyy - h:mm'),
        creation_date: Date.now(),
        excluded: false
    });
    console.log("Document written with ID: ", medRef.id);
}


// export async function getMedicinesData(){

//     const querySnapshot = await getDocs(collection(firestore, "medicines"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// }