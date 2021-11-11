import Axios from 'axios';
import React, { useEffect } from 'react'

const Subscriber = () => {
  useEffect(() => {
    let variable = { userTo: }
    
    Axios.post('/api/mongo/product/subscribeNumber', variable)
  }, [])

  return (
    <div>
        <button 
        style={{
            backgroundColor: '#AAAAAA',
            borderRadius: '4px', color: 'white',
            padding: '10px 16px', fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
        }}>
          Subscribed
        </button>
    </div>
  )
};

export default Subscriber;
