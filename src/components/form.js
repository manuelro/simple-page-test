import React from "react"
import { useSelector } from "react-redux"

const Form = ({ children }) => {
    const error = useSelector((state) => state.form.error)

    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Thank you for submitting the information.")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div>{ children }</div>

            <button
                className="bg-slate-950 text-white text-2xl px-8 py-2 rounded-md self-end disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                type="submit" 
                disabled={error}>Submit</button>
        </form>
    )
}

export default Form