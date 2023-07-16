import * as React from "react"
import { Provider } from "react-redux"
import store from "../store"

function withRedux(WrappedComponent) {
    return class extends React.Component {
        render(){
            return (
                <Provider store={store}>
                    <WrappedComponent {...this.props} />
                </Provider>
            )
        }
    }
}

export default withRedux