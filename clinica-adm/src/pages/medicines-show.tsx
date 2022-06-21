import MedicineInformation from "../components/medicines-informations";
import SelectLanguage from "../components/select-language/change";
import MedicinesData from '../mock-data/medicines2.json'
import { Theme } from "../theme";
import React from "react";

export default function ShowMedicines() {


    return (

        <Theme><SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
            {MedicinesData.map((post) =>
                <MedicineInformation name={post.name} batch={post.batch} quantity={post.quantity} due_date={post.due_date} days_to_alert={post.days_to_alert} quantity_to_alert={post.quantity_to_alert} />

            )}

        </Theme>




    );
}
