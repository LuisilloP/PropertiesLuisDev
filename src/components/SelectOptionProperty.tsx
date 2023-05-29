import React, { useContext } from 'react'
import OptionContext from '@/functions/ContextOption'
type Props =
    {
        nameLabel: string,
        arrayOption: string[]
    }

const SelectOptionProperty = (props: Props) => {
    const { arrayOption, nameLabel } = props
    const { optionValues, setOptionValues } = useContext(OptionContext)
    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionValues({ cambio: event.target.value })
    }
    return (
        <div>
            <label>{nameLabel}</label>
            <select
                onChange={(event) => { handleChangeSelect(event) }}
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