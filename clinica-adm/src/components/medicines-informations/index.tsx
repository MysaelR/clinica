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
                console.log("entrou no if");
                console.log("getDate: " + getDate);
                console.log("DateNow: " + dateNow);
            } else {
                console.log("entrou no else");
                console.log(due_date);
                console.log(dateNow);
                console.log(getDate);
                dateDifference && console.log(dateDifference);
                console.log(due_date);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [dateNow, days_to_alert])

    useEffect(() => {
        //Sempre que a data mudar, executa esse useeffect
        //console.log(moment.duration(moment(dataAtual, 'DD/MM/yyyy').diff(end)).asDays())
        //setDateDifference(moment.duration(moment(due, 'DD/MM/yyyy').diff(moment(dateNow, 'DD/MM/yyyy'))).asDays()),

        setDateDifference(moment.duration(moment(due_date, 'DD/MM/yyyy').diff(moment(dateNow, 'DD/MM/yyyy'))).asDays())
        //console.log(moment(due, 'DD/MM/yyyy').fromNow())
    }, [dateNow, due_date])


    useEffect(() => {
        // setDue(moment(due_date, "DD/MM/yyyy").format("DD/MM/yyyy"));
        if (dateDifference <= days_to_alert) {
            setAlertDays(true);
        } else if (dateDifference > days_to_alert) {
            setAlertDays(false);
        }

    }, [dateDifference])

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
                    {name} {" Date now: " + dateNow}
                </MedicineInformationStyle.TextHeaderMedicineInformation>

            </MedicineInformationStyle.HeaderMedicineInformation>


            <MedicineInformationStyle.ContentMedicineInformation>


                <MedicineInformationStyle.ElementGroupContentMedicineInformation >
                    <MedicineInformationStyle.TextElementGroupContentMedicineInformation >

                        TEMPO PARA VENCER: {alertDays === true ? "days: true" : "days: false"} {alertQuantity === true ? "quantity: true" : "quantity: false"} {"\n dias de diferença: " + dateDifference + "\n" + "dias para alertar: " + days_to_alert}
                    </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.InformationElementGroupContentMedicineInformation active={alertDays}>
                        <ReturnLanguage text={dateDifference ? (dateDifference + " ") : (0 + " ")} pt="DIAS" en="DAYS" />
                    </MedicineInformationStyle.InformationElementGroupContentMedicineInformation>
                </MedicineInformationStyle.ElementGroupContentMedicineInformation>

                <MedicineInformationStyle.ElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                        QUANTIDADE RESTANTE:
                    </MedicineInformationStyle.TextElementGroupContentMedicineInformation>
                    <MedicineInformationStyle.InformationElementGroupContentMedicineInformation active={alertQuantity}>
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


};

export default MedicineInformation;