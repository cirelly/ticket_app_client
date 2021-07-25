import React from 'react'



const SecondQueue = ({secondQueue}) => {
    return (
        <div>
            <h1>Segunda cola</h1>
            {secondQueue ? secondQueue.map(queue =>(<h1 key={queue.userId}>{queue.userName } {queue.supportTimestamp}</h1>) ) : null}
        </div>
    )
}


export default SecondQueue;