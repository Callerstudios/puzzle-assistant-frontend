import { configureStore } from "@reduxjs/toolkit"
import OnlineReducer from "./online/OnlineReducer"


const store = configureStore({
    reducer: OnlineReducer,
})

export default store