import React from "react";
import ReturnLanguage from "../select-language";
import * as MedicineInformationStyle from './style';



const MedicineInformation: React.FC = () => (

    <MedicineInformationStyle.ContainerMedicineInformation>
        <MedicineInformationStyle.HeaderMedicineInformation>
            <MedicineInformationStyle.TextHeaderMedicineInformation>
                DIPORONA
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