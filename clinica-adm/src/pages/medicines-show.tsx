import { useEffect, useState } from "react";

import MedicineInformation from "../components/medicines-informations";
import SelectLanguage from "../components/select-language/change";
import MedicinesData from '../mock-data/medicines2.json'
import { addMedicineData, getAllMedicinesData, medicineDataI, MedicineI } from "../services/medicines";
import { Theme } from "../theme";

export default function ShowMedicines() {
    const [medicinesData, setMedicinesData] = useState<medicineDataI>();



    async function getMedicinesData() {
        let data: medicineDataI;
        try {
            data = await getAllMedicinesData();
            // setMedicinesData(data);
            console.dir(data)

        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        getMedicinesData()
    }, [])

    return (

        <Theme><SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
            {/* {MedicinesData.map((post) =>
                <MedicineInformation name={post.name} batch={post.batch} quantity={post.quantity} due_date={post.due_date} days_to_alert={post.days_to_alert} quantity_to_alert={post.quantity_to_alert} />
                
            )} */}

            <button onClick={() => { }}>Adicionar Registro</button>

        </Theme>



    );
}
