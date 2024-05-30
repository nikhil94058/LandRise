import React from 'react'

export const Test = () => {
  return (
    <div className='w-[77px]'>
      {/*vertical NAvs*/}
      <div className='md:fixed top-[4.4rem] left-0'>
        <div className="w-[77px] h-[1702px] bg-yellow-400">
          <h1 className='text-red font-extrabold'>
            <nav className='flex flex-col space-between space-y-3'>
              <a className='hover:bg-blue-700 m-1 p-1' href=""><img src="/res/Group.svg" alt="" /></a>
              <a href="" className='hover:bg-blue-700 m-1 p-1' ><img src="/res/Notification.svg" alt="" /></a>
              <a href="" className='hover:bg-blue-700 m-1 p-1'><img src="/res/Message.svg" alt="" /></a>
              <a href="" className='hover:bg-blue-700 m-1 p-1'><img src="/res/Message.svg" alt="" /></a>
              <a href="" className='hover:bg-blue-700 m-1 p-1'><img src="/res/Message.svg" alt="" /></a>
              <a href="" className='hover:bg-blue-700 m-1 p-1'><img src="/res/Message.svg" alt="" /></a>
            </nav>
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Test;