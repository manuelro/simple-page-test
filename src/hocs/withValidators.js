import * as React from "react"
import { connect } from 'react-redux'
import { setIsFirstCheck, setModel, setError, setErrors } from '../store/form'

function withValidators(WrappedComponent, skip) {
    return class extends React.Component {

        constructor(props){
            super(props)
            this.state = { isValid: true }
        }

        componentDidMount(){
            this.props.setError(true)
            this.props.setErrors({ [this.props.inputOptions.name]: skip ? false : true })
        }

        iterateValidators(value) {
            const { validators } = this.props
            if(!validators?.length) return true

        
            let passesRegEx
            for(const { negate, regex } of validators) {
                passesRegEx = negate ? !regex.test(value) : regex.test(value)
                if(!passesRegEx) break
            }
        
            return passesRegEx
        }

        render(){
            return (
                <WrappedComponent
                    isValid={this.state.isValid}
                    onChange={(event) => {
                        this.props.setError(true)
                        const isValid = event.target.checkValidity() && this.iterateValidators(event.target.value)
                        this.setState({ isValid })
                        this.props.setErrors({ [this.props.inputOptions.name]: skip ? false : !isValid })
                        this.props.setModel({ [this.props.inputOptions.name]: event.target.value })
                    }}
                    {...this.props}
                />
            )
        }
    }
}

const mapState = (state) => state.form
const mapDispatch = { setIsFirstCheck, setModel, setError, setErrors }
const connectedHoc = WrappedComponent => (skip) => connect(mapState, mapDispatch)(withValidators(WrappedComponent, skip))

export default connectedHoc