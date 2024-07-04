import React from 'react'

const Skeleton = () => {
  return (
    <>
    <div className='animate-pulse'>
    <div>
      <div className='mx-auto mb-5 mt-5 h-14 border-[5px] border-skeleton-dark w-[40vw] bg-skeleton-dark rounded-md flex justify-center items-center'>
        <div className='w-[99%] h-[85%] rounded-md bg-skeleton-light'></div>
      </div>
    </div>
    <div className='w-[90vw] sm:items-center border-x-[10px] border-y-[30px] border-skeleton-dark sm:h-10 mx-auto bg-skeleton-dark justify-start rounded-md flex gap-4 flex-col sm:flex-row '>
    <div className='w-full bg-skeleton-light h-9 rounded-md'></div>
    <div className='flex gap-4 justify-start'>
    <div className='w-20 bg-skeleton-light h-9 rounded-md'></div>
    <div className='w-10 bg-skeleton-light h-9 rounded-md'></div>
</div>
    </div>
    <div className='w-[90vw] mx-auto'>
      <ul className='mb-10'>
        <li className='h-[12vh] mt-10 flex rounded-md w-full items-center p-4 bg-skeleton-dark'>
    <div className='w-16 rounded-full bg-skeleton-light h-16'></div>
    <div className='w-[80%] ml-2'>
      <div className='w-[80%] rounded-lg max-auto bg-skeleton-light h-4 mb-4'></div>
      <div className='w-[60%] rounded-md max-auto bg-skeleton-light h-3'></div>
    </div>
        </li>
        <li className='h-[12vh] mt-10 flex rounded-md w-full items-center p-4 bg-skeleton-dark'>
    <div className='w-16 rounded-full bg-skeleton-light h-16'></div>
    <div className='w-[80%] ml-2'>
      <div className='w-[80%] rounded-lg max-auto bg-skeleton-light h-4 mb-4'></div>
      <div className='w-[60%] rounded-md max-auto bg-skeleton-light h-3'></div>
    </div>
        </li>
        <li className='h-[12vh] mt-10 flex rounded-md w-full items-center p-4 bg-skeleton-dark'>
    <div className='w-16 rounded-full bg-skeleton-light h-16'></div>
    <div className='w-[80%] ml-2'>
      <div className='w-[80%] rounded-lg max-auto bg-skeleton-light h-4 mb-4'></div>
      <div className='w-[60%] rounded-md max-auto bg-skeleton-light h-3'></div>
    </div>
        </li>
        <li className='h-[12vh] mt-10 flex rounded-md w-full items-center p-4 bg-skeleton-dark'>
    <div className='w-16 rounded-full bg-skeleton-light h-16'></div>
    <div className='w-[80%] ml-2'>
      <div className='w-[80%] rounded-lg max-auto bg-skeleton-light h-4 mb-4'></div>
      <div className='w-[60%] rounded-md max-auto bg-skeleton-light h-3'></div>
    </div>
        </li>
      </ul>
    </div>
  </div>
    </>
  )
}

export default Skeleton
