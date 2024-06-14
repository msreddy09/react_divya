const budgetReducer = (state, action) => {

    const { type, payLoad } = action;

    switch (type) {

        case 'addIncome':

            let currentIId = state.income.length || 0;

            if (payLoad.id) {
                const toBeUpdateIncome = state.income.map((t, i) => {
                    if (t.id === payLoad.id) {
                        return { ...t, ...payLoad }
                    }
                    return t;

                })
                const newState = {
                    ...state,
                    income: [...toBeUpdateIncome]
                }

                localStorage.setItem('appState', JSON.stringify(newState))
                return newState

            } else {
                let newState1 = {
                    ...state,
                    income: [
                        ...state.income,
                        { ...payLoad, id: currentIId + 1 }
                    ]
                }
                localStorage.setItem('appState', JSON.stringify(newState1))
                return newState1;
            }
        case 'addExpense':
            let currentId = state.expense.length || 0;

            if (payLoad.id) {
                const toBeUpdateExpense = state.expense.map((t, i) => {
                    if (t.id === payLoad.id) {
                        return { ...t, ...payLoad }
                    }
                    return t;

                })
                const newState = {
                    ...state,
                    expense: [...toBeUpdateExpense]
                }

                localStorage.setItem('appState', JSON.stringify(newState))
                return newState

            } else {
                let newState1 = {
                    ...state,
                    expense: [
                        ...state.expense,
                        { ...payLoad, id: currentId + 1 }
                    ]
                }
                localStorage.setItem('appState', JSON.stringify(newState1))
                return newState1;
            }


        case 'addICategory':
            let newStateCat2 = {
                ...state,
                iCats: [
                    ...state.iCats,
                    ...payLoad.split(',')
                ]
            }

            localStorage.setItem('appState', JSON.stringify(newStateCat2))
            return newStateCat2;
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