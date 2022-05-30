import { useField, SubmitHandler, FormHandles } from '@unform/core';
import { useRef } from 'react';
import * as Yup from 'yup';
import ReturnLanguage from '../components/select-language';
import SelectLanguage from '../components/select-language/change';
import { Theme } from '../theme';


interface FormData {
    name: string;
    batch: string;
    quantity: number;
    due_date: Date;


}


export default function AddMedicines() {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<FormData> = async data => {

        try {
            const schema = Yup.object().shape({
                email: Yup.string().email().typeError("").required((<ReturnLanguage pt="Email é necessário" />).props),
                password: Yup.string().required("deve ter senha"),
            })
            await schema.validate(data, {
                abortEarly: false,
            })

            // Validation passed
            console.log(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                console.log(err.errors);
            }
        }


    }


    return (
        <Theme>

            <button onClick={() => console.log()}>test</button>

            <SelectLanguage topPt={3} topEn={7} topEs={11} topFr={15} topIt={19} topDe={23} />
        </Theme>
    );
}