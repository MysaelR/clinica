import React from "react";
import ReturnLanguage from "../select-language";
import * as MedicineInformationStyle from './style';


interface Medicine {
    name: string;
    batch: string; //lote
    quantity: number; 
    due_date: Date; //data de vencimaneto
    days_to_alert: number;
    quantity_to_alert: number;
}

//{name, batch, quantity, due_date, days_to_alert, quantity_to_alert}

const MedicineInformation: React.FC = () => (

    <MedicineInformationStyle.ContainerMedicineInformation>
        <MedicineInformationStyle.HeaderMedicineInformation>
            <MedicineInformationStyle.TextHeaderMedicineInformation>
                Dipirona
            </MedicineInformationStyle.TextHeaderMedicineInformation>

        </MedicineInformationStyle.HeaderMedicineInformation>


        <MedicineInformationStyle.ContentMedicineInformation>


            <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    TEMPO PARA VENCER:
                </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                <MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                    <ReturnLanguage text={150} pt=" DIAS" />
                </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
            </MedicineInformationStyle.ElementGroupContentMedicineInformation>

            <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    QUANTIDADE RESTANTE:
                </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                <MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                    1500 unidades
                </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
            </MedicineInformationStyle.ElementGroupContentMedicineInformation>

            <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    LOTE:
                </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                <MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                    15485235496
                </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
            </MedicineInformationStyle.ElementGroupContentMedicineInformation>


        </MedicineInformationStyle.ContentMedicineInformation>



        <MedicineInformationStyle.ButtonsContainerMedicineInformation>

        </MedicineInformationStyle.ButtonsContainerMedicineInformation>
    </MedicineInformationStyle.ContainerMedicineInformation>
);

export default MedicineInformation;