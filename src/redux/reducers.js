
const defaultState = {
    items:[],
    ids: 0
}

const reducer = ( state = defaultState, action) => {
    console.log('reducer');
    console.log(action);
    switch(action.type) {
        case "ADD_BANK":
            console.log(state)
            let temp = {}
            let isHere = false;
            temp.name = action.name;
            temp.credits = action.credits;
            for(let i = 0; i < state.items.length; ++i) {
                console.log(state.items[i])
                if(state.items[i].name.includes(temp.name)) {
                    console.log(2)
                    console.log(true)
                    state.items[i].amount = ++state.items[i].amount;
                    isHere = true;
                }
            }
            if(!isHere) {
                console.log(false)
                temp.amount = 1
                state.items.push(temp)
            }
            return{...state, ids:++state.ids}
        case "DELETE_BANK":
            for(let i = 0; i < state.items.length; ++i ) {
                if(state.items[i].name.includes(action.name)){
                    state.items[i].amount = state.items[i].amount - 1;
                    state.items = state.items.filter(elem => elem.amount !== 0)
                }
            }
            return{...state, ids:--state.ids}
        default:
            return state;
    }
}

module.exports = { reducer };