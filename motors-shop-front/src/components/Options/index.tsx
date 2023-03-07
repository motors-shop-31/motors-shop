import { ReactNode, useState } from "react"
import { OptionsContainer } from "./styles"
import { UseFormRegister } from "react-hook-form";

interface IOption {
    htmlFor: string
    fieldValue: string
}

interface IOptionsProps {
    options: IOption[]
    fieldName: string
    register: UseFormRegister<any>
}

const Options = ({ options, fieldName, register, ...rest }: IOptionsProps) => {

    const [selectedOption, setSelectecOption] = useState(0)

    return (
        <OptionsContainer className="options">
            {options.map((option, index) => {
                return (
                    <label key={index} className={selectedOption === index ? "option_selected" : ""} htmlFor={option.htmlFor}>
                        {option.htmlFor}
                        <input
                            id={option.htmlFor}
                            type="radio"
                            value={option.fieldValue}
                            {...register(fieldName)}
                            onClick={() => {
                                setSelectecOption(index)
                            }}
                            checked={index == 0 ? true : false}
                        />
                    </label>
                )
            })}
        </OptionsContainer>
    )
}

export default Options
