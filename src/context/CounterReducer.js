const CounterReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                counters: action.payload.data.map((c) => {
                    if (c.id === action.payload.id) c.value += 1;
                    return c;
                }),
            };
        case "DECREASE":
            return {
                ...state,
                counters: action.payload.data.map((c) => {
                    if (c.id === action.payload.id && c.value > 0) c.value -= 1;
                    return c;
                }),
            };
        case "DELETE":
            return {
                ...state,
                counters: action.payload.data.filter((c) => c.id !== action.payload.id),
            };
        case 'RESET_ALL':
            return {
                ...state, counters: action.payload.map(c => {
                    c.value = 0;
                    return c;
                })
            }

        default:
            break;
    }
};
export default CounterReducer;
