import { FormHandles, SubmitHandler, useField } from '@unform/core';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import ReturnLanguage from '../components/select-language';
import SelectLanguage from '../components/select-language/change';
import { addMedicineData } from '../services/medicines';
import { Theme } from '../theme';

interface FormDataSubmitMedicine {
    id?: string
    name: string
    batch: string
    quantity: number
    due_date: Date
    days_to_alert: number
    quantity_to_alert: number

}


/* 
const handleSubmitLoginUser: SubmitHandler<FormDataSubmitMedicine> = async data => {
    formRef.current?.setErrors({});
    try {
        const schema = Yup.object().shape({
            user: Yup.string().required("Deve conter um usuário!"),
            password: Yup.string().required("deve ter uma senha!").min(3, "Deve conter ao menos 10 caracteres"),
        })
        await schema.validate(data, {
            abortEarly: false,
        })
        console.log(data)
        // Validation passed

        await signIn({
            email: data.user,
            password: data.password
        })
        navigate('/home');



    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            // Validation failed

            const errorMessages: ValidationError = {};


            err.inner.forEach(error => {
                if (error.path != undefined) {
                    errorMessages[error.path] = error.message;
                }
            });
            formRef.current?.setErrors(errorMessages);

        }
        else {

        }


    }
} */



export default function AddMedicines() {

    const formRef = useRef<FormHandles>(null);
    let navegate = useNavigate();

    async function handleAddMedicine() {
        try {
            await addMedicineData({
                batch: 'AABB05-8745AD',
                days_to_alert: 50,
                due_date: '18/11/2022',
                name: 'Teste do ADD - 03',
                quantity: 800,
                quantity_to_alert: 120,
            });
        }
        catch (error) {
            console.log(error)
        }
    }


    const handleSubmit: SubmitHandler<FormDataSubmitMedicine> = async data => {

        try {
            const schema = Yup.object().shape({
                name: Yup.string().typeError("").required().min(4),
                batch: Yup.string().required(),
                days_to_alert: Yup.number().required().min(15).max(290).integer().positive(),
                quantity_to_alert: Yup.number().required().min(15).max(9000).integer().positive(),
                due_date: Yup.date().required()

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