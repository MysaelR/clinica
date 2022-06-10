import React from "react";

import MedicineInformation from "../components/medicines-informations";
import { Theme } from "../theme";

export default function ShowMedicines() {


    return (

        <Theme>
            <MedicineInformation name="Dipirona" batch="123456" quantity={150} due_date={"10/09/2022"} days_to_alert={60} quantity_to_alert={149} />
        </Theme>

    );
}
