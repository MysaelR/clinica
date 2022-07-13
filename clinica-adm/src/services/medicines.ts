import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import React from "react";

import { firestore } from "./firebase";

// interface MedicineI{
//     id: string,
//     batch: string,
//     creation_date: string,
//     days_to_alert: number,
//     due_date: string,
//     name: string,
//     quantity: number,
//     quantity_to_alert: number
// }
// type medicineDataI = MedicineI[];
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



 export async function getAllMedicinesData(){
    // const medicinesData = await getDocs(collection(firestore, "medicines"));
    // let medicineData: medicineDataI[];
    let medicineData = [{}];

    await getDocs(collection(firestore, "medicines"))
    .then((medicines) => {
        medicineData = medicineData.slice(1)
        // console.log(medicines.docs)
        medicines.forEach((doc) =>{
            let value = {id: doc.id, ...doc.data()}
            medicineData.push(value);
        })
        console.dir(medicineData);
    })
    .catch((err) => {
        console.log(err)
    })
} 

// export async function getMedicinesData(){

//     const querySnapshot = await getDocs(collection(firestore, "medicines"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// }

