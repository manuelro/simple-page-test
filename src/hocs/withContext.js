import * as React from "react"
import Context from "../context"

function withContext(WrappedComponent) {
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = { emailRef: null }
        }

        setEmailRef = (emailRef) => {
            this.setState({ emailRef })
        }

        render(){
            return (
                <Context.Provider value={{ emailRef: this.state.emailRef, setEmailRef: this.setEmailRef }}>
                    <WrappedComponent {...this.props} />
                </Context.Provider>
            )
        }
    }
}

export default withContext