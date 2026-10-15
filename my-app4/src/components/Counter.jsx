import React from 'react'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <p>{count}</p>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

export default Counter
