
import { FormData } from '../InterfacesP'
type Props = FormData
const reMedio = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
const validatorForm = (props: Props) => {
    const errors: FormData =
    {
        name: '',
        mail: '',
        message: ''

    };
    const { name, mail, message } = props;
    if (!name) errors.name = 'Nombre no existe'
    if (!reMedio.test(mail)) errors.mail = 'Ingrese un correo valido ej;correo@correo.com'
    if (!mail) errors.mail = 'Ingrese correo'
    if (message.length < 5) errors.message = 'mensaje corto, debe ser mayor a 5 caracteres'
    if (!message) errors.message = 'ingrese message'

    return errors
}

export default validatorForm