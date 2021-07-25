import React from 'react'



const FirstQueue = ({firstQueue}) => {
    
    
    return (
        <div>
            <h1> Cola 1</h1>
            {firstQueue ? firstQueue.map(queue =>(<h1 key={queue.userId}>{queue.userName} {queue.supportTimestamp}</h1>) ) : null}
            
        </div>
    )
}


export default FirstQueue;