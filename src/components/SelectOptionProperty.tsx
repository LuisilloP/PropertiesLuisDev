import React, { useContext } from 'react'
import OptionContext from '@/functions/ContextOption'
type Props =
    {
        nameLabel: string,
        arrayOption: string[]
    }

function DeleteKey(ObjectDelet: Record<string, never>, key: string): Record<string, never> {
    delete ObjectDelet[key];
    return ObjectDelet;
}
const SelectOptionProperty = ({ arrayOption, nameLabel }: Props) => {
    const { optionValues, setOptionValues } = useContext(OptionContext)

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {

        if (event.target.value != "not") {
            setOptionValues({ ...optionValues, [event.target.name]: event.target.value })
        } else {
            const keyName = event.target.name
            const preOption = DeleteKey(optionValues, keyName);
            setOptionValues(preOption)
        }
    }
    return (
        <div>
            <label>{nameLabel}</label>
            <select
                onChange={(event) => { handleChangeSelect(event) }}
                name={nameLabel}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>

                <option value="not">{"Seleccione"}</option>
                {arrayOption.map((optionValue) =>
                (
                    <option key={optionValue} value={optionValue}>{optionValue}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectOptionProperty