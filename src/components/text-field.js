import * as React from "react"
import withValidators from "../hocs/withValidators"
import Context from "../context"

const TextField = ({ inputOptions = {}, onChange, isValid }) => {
    const context = React.useContext(Context)
    const inputRef = React.useRef()

    const setEmailRef = () => {
        if(inputOptions?.name?.toLowerCase() === 'email'){
            context.setEmailRef(inputRef)
        }
    }

    React.useEffect(() => {
        setEmailRef()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="border border-gray-300 rounded">
                <input
                    className="px-4 py-2 bg-transparent w-full" {...inputOptions}
                    onChange={onChange}
                    ref={inputRef}
                />
            </div>
            <div className={`pt-1 pb-3 text-red-500 ${isValid ? 'invisible' : 'visible'}`}>Invalid field value</div>
        </div>
    )
}

export default withValidators(TextField)(false)
