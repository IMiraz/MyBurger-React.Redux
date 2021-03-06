import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../utility'

const initialState = {
    ingredients:null,
        totalPrice: 4,
        error:false,
        building:false
};

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredinet =(state, action) => {
 const updatedIngredinet ={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
        const updatedIngredinets=updateObject(state.ingredients,updatedIngredinet)
        const updatedState = {
            ingredients:updatedIngredinets,
            totalPrice:state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
            building:true
        }

        return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
const updatedIng ={[action.ingredientName]:state.ingredients[action.ingredientName]-1}
                    const  updatedIngs=updateObject(state.ingredients,updatedIng);
                    const updatedSt = {
                            ingredients:updatedIngs,
                            totalPrice:state.totalPrice - INGREDIENT_PRICE[action.ingredientName],
                            building:true

                        }

                return updateObject(state, updatedSt);
}


const setIngredinet = (state, action) => {
     return updateObject(state, {
    ingredients:{
  salad:action.ingredients.salad,
  bacon:action.ingredients.bacon,
  cheese:action.ingredients.cheese,
  meat:action.ingredients.meat
 },

   totalPrice:4,
      error:false,
      building:false
 })

}

const fetchIngredient = (state, action) => {
 return updateObject(state, {
        error:true
   } )
}


const reducer = (state = initialState, action) =>
{
    switch (action.type) {

        case actionTypes.ADD_INGREDIENT: return addIngredinet(state, action);
        // const updatedIngredinet ={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
        // const updatedIngredinets=updateObject(state.ingredients,updatedIngredinet)
        // const updatedState = {
        //     ingredients:updatedIngredinets,
        //     totalPrice:state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
        // }

        // return updateObject(state, updatedState);
        // return {
        //     ...state,
        //     ingredients:updatedIngredinets
        //     ingredients: {
        //      ...state.ingredients,
        //     [action.ingredientName]:state.ingredients[action.ingredientName]+1

        //     },
        //     totalPrice:state.totalPrice + INGREDIENT_PRICE[action.ingredientName]

        // };
            case actionTypes.REMOVE_INGREDIENT:return removeIngredient(state, action)

    //     return {
    //         ...state,
    //         ingredients: {
    //          ...state.ingredients,
    //        [action.ingredientName]:state.ingredients[action.ingredientName]-1

    //     },
    //  totalPrice:state.totalPrice - INGREDIENT_PRICE[action.ingredientName]

    //     };

                //     const updatedIng ={[action.ingredientName]:state.ingredients[action.ingredientName]-1}
                //     const  updatedIngs=updateObject(state.ingredients,updatedIng);
                //     const updatedSt = {
                //             ingredients:updatedIngs,
                //             totalPrice:state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
                //         }

                // return updateObject(state, updatedSt);


  case actionTypes.SET_INGREDIENTS: return setIngredinet(state, action)

//  return updateObject(state, {
//     ingredients:{
//   salad:action.ingredients.salad,
//   bacon:action.ingredients.bacon,
//   cheese:action.ingredients.cheese,
//   meat:action.ingredients.meat
//  },
//    totalPrice:4,
//       error:false
//  })

//   return{

//       ...state,
//       ingredients:action.ingredients,
//  ingredients:{
//   salad:action.ingredients.salad,
//   bacon:action.ingredients.bacon,
//   cheese:action.ingredients.cheese,
//   meat:action.ingredients.meat
//  },
//    totalPrice:4,
//       error:false

//   };
   case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredient(state,action)

//    return updateObject(state, {
//         error:true
//    } )
//    return {
//     ...state,
//   error:true
//    }

        default:
            return state;
    }

};

export default reducer;