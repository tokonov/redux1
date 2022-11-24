import { types } from "./type"

const initial = {
    number:'',
    number2:'',
    result:''
}

export const reducer =(state=initial,action)=>{
    switch(action.type){
        case types.ONCHANGE1:
            console.log(state.number)
            return{...state,number: action.payload}
        case types.ONCHANGE2:
            console.log(state.number2)
            return {...state, number2: action.payload}
        case types.PLUS:
            console.log(state.number);
            return {...state, result: state.number!=='' && state.number2 !==''? state.number+state.number2 : alert('Empty space,please enter number')}      
        case types.MINUS:
            return {...state, result: state.number!=='' && state.number2 !=='' ? state.number-state.number2 : alert('Empty space,please enter number')}      
        case types.DEVIDE:
            return {...state, result: state.number!=='' && state.number2 !==''? state.number/state.number2 : alert('Empty space,please enter number')}      
        case types.MULTIPLY:
            return {...state, result: state.number!=='' && state.number2!=='' ? state.number*state.number2 : alert('Empty space,please enter number')}      
        default: return state
    }
}

// export function reducer (state = initialState, action) {
//     switch(action.type) {
//         case types.ADD_USER:
//             return {...state, users: [...state.users, action.payload]}

//         case types.CHANGE_NAME:
//             return  {...state, name: action.payload}

//         case types.CLEAR_INPUT:
//             return  {...state, name: ""}   

//         case types.DELETE_ALL:
//             return  {...state, users: [], name: ""}

//         default:return state
//     }
    // if(action.type === types.ADD_USER) {
    //     return {...state, users: [...state.users, action.payload]}
    // }
    // else if(action.type === types.CHANGE_NAME) {
    //     return  {...state, name: action.payload}
    // }
    // else if(action.type === types.CLEAR_INPUT) {
    //     return  {...state, name: ""}
    // }
    // else if(action.type === types.DELETE_ALL) {
    //     return  {...state, users: [], name: ""}
    // }
    // return state
// }

