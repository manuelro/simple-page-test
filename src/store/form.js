import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'counter',
  initialState: {
    isFirstCheck: false, model: {}, error: true, errors: {}
  },
  reducers: {
    setIsFirstCheck: (state, action) => {
        state.isFirstCheck = action.payload
    },

    setModel: (state, action) => {
        state.model = { ...state.model, ...action.payload }
    },

    setError: (state, action) => {
        state.error = action.payload
    },

    setErrors: (state, action) => {
        state.errors = { ...state.errors, ...action.payload }

        let error = false
        for (const key in state.errors) {
            if (Object.hasOwnProperty.call(state.errors, key)) {
                const element = state.errors[key]

                if(element) {
                    error = true
                    break
                }
            }
        }

        state.error = error
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setIsFirstCheck, setModel, setError, setErrors } = formSlice.actions

export default formSlice.reducer