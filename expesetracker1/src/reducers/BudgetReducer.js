const budgetReducer = (state, action) => {

    const { type, payLoad } = action;

    switch (type) {

        case 'addIncome':

            let newState = {
                ...state,
                income: [
                    ...state.income,
                    payLoad
                ]
            }
            localStorage.setItem('appState', JSON.stringify(newState))
            return newState;
        case 'addExpense':
            let currentId = state.expense.length || 0;
            let newState1 = {
                ...state,
                expense: [
                    ...state.expense,
                    {...payLoad, id: currentId + 1}
                ]
            }
            localStorage.setItem('appState', JSON.stringify(newState1))
            return newState1;
        case 'addICategory':
            let newStateCat = {
                ...state,
                iCats: [
                    ...state.iCats,
                    ...payLoad.split(',')
                ]
            }

            localStorage.setItem('appState', JSON.stringify(newStateCat))
            return newStateCat;
        case 'addECategory':
            let newStateCat1 = {
                ...state,
                eCats: [
                    ...state.eCats,
                    ...payLoad.split(',')
                ]
            }

            localStorage.setItem('appState', JSON.stringify(newStateCat1))
            return newStateCat1;

        default: return state

    }

}

export default budgetReducer;