import React, { ChangeEventHandler, useState } from 'react';
import { FormData } from '../InterfacesP';
import validatorForm from '../functions/validatorForm';
import { fireAlert } from '../sweetalert/messages';
const dataInitial: FormData =
{
    name: '',
    mail: '',
    message: '',
}
const FormContact = () => {
    let send = false;
    const [data, setData] = useState(dataInitial)
    const [error, setErrors] = useState(dataInitial)
    const inputHandleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const validationErrors = validatorForm(data)
        setErrors(validationErrors)
        if (!validationErrors.name && !validationErrors.message && !validationErrors.mail) send = true;
        if (send) fireAlert(data)
    }

    const clearMessageError = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrors({
            ...error, [event.target.name]: ' '
        })
    }
    return (
        <form className='flex flex-col gap-5  md:px-[15rem] px-5 ' onSubmit={(event) => handleSubmit(event)}>
            <div className=' flex flex-col sm:flex-row gap-5  '>
                <div className='w-full'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                    <input name='name' type="text" id="name" aria-describedby="helper-text-explanation"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 " >
                    </input>
                    <p className='errors-input text-xs text-red-600 '>{error.name ? error.name : ''}</p>
                </div>
                <div className='w-full'>
                    <label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900">Correo</label>
                    <input name='mail' type="mail" id="helper-text" aria-describedby="helper-text-explanation"
                        onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                        className="bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 " >
                    </input>
                    <p className='errors-input text-xs text-red-600 '>{error.mail ? error.mail : ''}</p>
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensaje</label>
                <textarea name='message' id="message" rows={4}
                    onChange={(event) => inputHandleChange(event)} onFocus={(event) => clearMessageError(event)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 "></textarea>
                <p className='errors-input text-xs text-red-600 '>{error.message ? error.message : ''}</p>
            </div>

            <button type='submit' className="bg-teal-700 w-full md:w-[10rem] hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-[4px] ">
                Enviar
            </button>
        </form>

    )
}

export default FormContact