import { createContext, useReducer } from "react";
import CounterReducer from "./CounterReducer";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const initialState = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 },
        ],
    };
    const [state, dispatch] = useReducer(CounterReducer, initialState);

    const increase = (id) => {
        dispatch({
            type: "INCREASE",
            payload: { id: id, data: [...state.counters] },
        });
    };
    const decrease = (id) => {
        dispatch({
            type: "DECREASE",
            payload: { id: id, data: state.counters },
        });
    };
    const remove = (id) => {
        dispatch({
            type: "DELETE",
            payload: { id: id, data: state.counters },
        });
    };
    const resetAll = () => {
        dispatch({
            type: "RESET_ALL",
            payload: state.counters,
        });
    };

    return (
        <CounterContext.Provider
            value={{
                counters: state.counters,
                increase,
                decrease,
                remove,
                resetAll,
                valued: state.counters.filter((f) => f.value > 0).length,
            }}
        >
            {children}
        </CounterContext.Provider>
    );
};
export default CounterContext;
