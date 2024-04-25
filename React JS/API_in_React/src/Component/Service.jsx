import React from 'react';

const Service = () => {
    useEffect(() =>{
        console.log('Service comp created')
        return ()=>{
          console.log('Service comp destroyed')
        }
      })
      return (
        <div>Service</div>
      )
}

export default Service;
