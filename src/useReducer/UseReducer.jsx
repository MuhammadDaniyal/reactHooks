import React, {useReducer} from 'react'
import reducer from './reducer';

const UseReducer = () => {
    // const [count, setCount] = useState(0)
    const initialVal = 0;
    const [state, dispatch] = useReducer(reducer, initialVal)

    return (
        <>
            <div className="container">
                <button onClick={() => dispatch({type:"INC"})}>
                    add</button>
                <h1>{state}</h1>
                <button
                    onClick={() => dispatch({type:"DEC"})}>
                    subs</button>
            </div>
        </>
    )
}

export default UseReducer