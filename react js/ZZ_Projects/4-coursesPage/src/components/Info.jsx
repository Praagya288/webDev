import React from 'react'
import Card from './Card'
const Info = ({data}) => {
  console.log(data)
  return (
    <div className=' min-h-screen w-[90%] flex items-center justify-center p-2  flex-wrap gap-4   '>


        {
            data.map((data)=>{
                return <Card {...data} />
            })
        }



    </div>
  )
}

export default Info