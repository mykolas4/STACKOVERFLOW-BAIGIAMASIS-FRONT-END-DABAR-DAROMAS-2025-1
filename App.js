import React from "react"
import reactDom from "react-dom"
import "./styles/Home.module.css"
import Index from "./pages/index"
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"



const store = createStore( Reducers, compose(applyMiddleware(thunk)))

reactDom.render( 
    <Provider store={store}>
    <React.StrictMode>
        <Index />
    </React.StrictMode>
    </Provider>,
    document.getElementById(root)
);