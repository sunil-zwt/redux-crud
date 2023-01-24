import {createSlice} from"@reduxjs/toolkit"
import cartItems from "../../cartItems"

const initialState = {
    cartItems:cartItems,
    amount:5,
    total:0,
    isLoading:true
}

 const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=> {
            state.cartItems=[]
          
        },
        removeItems:(state,action)=>{
            console.log(action)
                const itemId = action.payload
           state.cartItems = state.cartItems.filter((item)=> item.id !== itemId)
        },
        increase :(state,{payload})=>{
                const currItem = state.cartItems.find((item)=> item.id === payload.id)
                currItem.amount= currItem.amount+1
        },
        decrease:(state,{payload})=>{
            const currItem = state.cartItems.find((item)=> item.id === payload.id)
                currItem.amount= currItem.amount - 1
        },
        calculatorTotal:(state)=>{
            let amount =0
            let total = 0

            state.cartItems.forEach((item)=>{
                amount+= item.amount
                total+= item.amount* item.price
            })
            state.amount=amount
            state.total=total
        }
    }
})
console.log(CartSlice)
export const{clearCart,removeItems,increase,decrease,calculatorTotal} = CartSlice.actions
export default CartSlice.reducer