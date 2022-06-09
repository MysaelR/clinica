import moment, { now } from "moment";
import React, { useEffect, useState } from "react";

import ReturnLanguage from "../select-language";
import * as MedicineInformationStyle from './style';

interface Medicine {
    name: string;
    batch: string; //lote
    quantity: number;
    due_date: string; //data de vencimaneto
    days_to_alert: number;
    quantity_to_alert: number;
}

//{name, batch, quantity, due_date, days_to_alert, quantity_to_alert}

const MedicineInformation: React.FC<Medicine> = ({ name, batch, quantity, due_date, days_to_alert, quantity_to_alert }) => {



    const [dateNow, setDateNow] = useState<string>('');
    const [due, setDue] = useState<string>();
    const [dateDifference, setDateDifference] = useState<number>(0);
    const [alertQuantity, setAlertQuantity] = useState<boolean>(false);
    const [alertDays, setAlertDays] = useState<boolean>(false);
    // const [alertName, setAlertName] = useState<boolean>(false);



    function getTimeNow() {
        let getDate = moment().format('DD/MM/yyyy').toString();
        return getDate
    }


    useEffect(() => {
        // let getDate = moment().format('DD/MM/yyyy').toString();
        let interval = setInterval(() => {
            let getDate = getTimeNow();

            if (getDate !== undefined && getDate !== dateNow) {
                setDateNow(getDate);

            } else {
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [dateNow])

    useEffect(() => {

        console.log()
        setDateDifference(moment.duration(moment(due_date, 'DD/MM/yyyy').diff(moment(dateNow, 'DD/MM/yyyy'))).asDays())
    }, [dateNow, due_date])


    useEffect(() => {
        // setDue(moment(due_date, "DD/MM/yyyy").format("DD/MM/yyyy"));
        if (dateDifference <= days_to_alert) {
            setAlertDays(true);
        } else if (dateDifference > days_to_alert) {
            setAlertDays(false);
        }

    }, [dateDifference, days_to_alert])

    useEffect(() => {
        if (quantity <= quantity_to_alert) {
            setAlertQuantity(true);
        } else {
            setAlertQuantity(false);
        }

    }, [quantity, quantity_to_alert])





    return (
        <MedicineInformationStyle.ContainerMedicineInformation>
            <MedicineInformationStyle.HeaderMedicineInformation /* active={alertName} */ active={alertDays || alertQuantity}>
                <MedicineInformationStyle.TextHeaderMedicineInformation >
                    {name}
                </MedicineInformationStyle.TextHeaderMedicineInformation>

            </MedicineInformationStyle.HeaderMedicineInformation>


            <MedicineInformationStyle.ContentMedicineInformation>


                <MedicineInformationStyle.ElementGroupContentMedicineInformation >
                    <MedicineInformationStyle.TextElementGroupContentMedicineInformation >

                        <ReturnLanguage pt="TEMPO PARA VENCER:" en="EXPIRATION TIME" es="TIEMPO DE EXPIRACIÓN" fr="DATE D'EXPIRATION" it="DATA DI SCADENZA" de="ABLAUFZEIT" />
                    </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.InformationElementGroupContentMedicineInformation active={alertDays}>
                        <ReturnLanguage text={dateDifference ? (dateDifference + " ") : (0 + " ")} pt="DIAS" en="DAYS" />
                    </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                </MedicineInformationStyle.ElementGroupContentMedicineInformation>

                <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                        <ReturnLanguage pt="QUANTIDADE RESTANTE:" en="REMAINING QUANTITY" es="CANTIDAD RESTANTE" fr="QUANTITÉ RESTANTE" it="QUANTITÀ RIMANENTE" de="VERBLEIBENDE MENGE" />
                    </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.InformationElementGroupContentMedicineInformation active={alertQuantity}>
                        {quantity}
                    </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                </MedicineInformationStyle.ElementGroupContentMedicineInformation>

                <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                        <ReturnLanguage pt="LOTE:" en="BATCH" es="LOTE" fr="LOT" it="LOTTO" de="CHARGE" />
                    </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                        {batch}
                    </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                </MedicineInformationStyle.ElementGroupContentMedicineInformation>


            </MedicineInformationStyle.ContentMedicineInformation>



            <MedicineInformationStyle.ButtonsContainerMedicineInformation>

            </MedicineInformationStyle.ButtonsContainerMedicineInformation>
        </MedicineInformationStyle.ContainerMedicineInformation>
    );


};

export default MedicineInformation;