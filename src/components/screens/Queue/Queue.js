import React, {useEffect, useState} from 'react'
import FirstQueue from '../../organisms/Queue/FirstQueue'
import SecondQueue from '../../organisms/Queue/SecondQueue'
import * as customerServices from '../../services/CustomerServices'
const Queue = () => {
    

    const [firstQueue, setFirstQueue] = useState('');
    const [secondQueue, setSecondQueue] = useState('');
    const [attended, setAttended] = useState('')
    const getQueues = async () => {
        const res = await customerServices.getCustomers();
        let firstQueue = []
        let secondQueue = []
       res.data.data.forEach(queue => {
            if (queue.queueNumber === 1){
                firstQueue.push(queue)
            }else {
                secondQueue.push(queue)
            }
        })
        setFirstQueue(firstQueue)
        setSecondQueue(secondQueue)
  };

  const getAttendedCustomer = async () =>{
      const response = await customerServices.getAttendedCustomer()

      setAttended(response.data.data)
  }

  useEffect(() => {
      getQueues();
      getAttendedCustomer()
  }, [])

  console.log(attended);




    return (
        <div>
            <FirstQueue firstQueue={firstQueue}/>
            <SecondQueue secondQueue={secondQueue}/>
        </div>
    )
}

export default Queue;