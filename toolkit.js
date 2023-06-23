import toolkit from '@reduxjs/toolkit'

const { configureStore, createAction, createReducer } = toolkit

// action
const addTocart = createAction('ADD_TO_CART')

// reduce = buat milah state mana yang mau dipake
const cartReducer = createReducer([], (builder) => {
    // buat dunction builder untuk menjalankan method ke switch case
    builder.addCase(addTocart, (state, action) => {
        state.push(action.payload)
    })
})

// reducer kedua
const login = createAction('CREATE_SESSION')

const loginReducer = createReducer({ state: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

// store =  buat nyimpen state2
const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer
    },
})
console.log('create store : ', store.getState())

// subcribe = buat mantau perubahannya
store.subscribe(() => {
    console.log('STORE CHANGE : ', store.getState())
})

// action/dispacth
const action = { type: 'ADD_TO_CART', payload: { id: 1, qty: 5 } }
store.dispatch(action)
// cara kedua
// store.dispatch(addTocart({ id: 1, qty: 8 }))

store.dispatch(login())