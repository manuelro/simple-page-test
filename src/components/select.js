import * as React from "react"
import withValidators from "../hocs/withValidators"

const Select = ({ inputOptions = {}, options = [], onChange, isValid }) => {
    const inputRef = React.useRef()

    return (
        <div className="relative">
            <div style={{ top: '-0.5rem' }} className="absolute bg-white text-xs left-8 px-2 text-gray-400">How We Can Help You?</div>
            <div className="border border-gray-300 rounded">
                <select
                    className="px-4 py-2 bg-transparent w-full" {...inputOptions}
                    onChange={event => {
                        onChange(event)
                    }}
                    ref={inputRef}
                    defaultValue="_"
                    aria-label="Options"
                >
                    <option value="_" disabled aria-label="Default option">{ inputOptions.placeholder }</option>
                    {options.map(({ value, label }, key) => <option value={value} label={label} key={key} aria-label={label} />)}
                </select>
            </div>
            <div className={`pt-1 pb-3 text-red-500 ${isValid ? 'invisible' : 'visible'}`}>Invalid field value</div>
        </div>
    )
}

export default withValidators(Select)(true)