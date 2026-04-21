import Image from 'next/image';
import React from 'react'

type Props = {
    image: string;
    title: string;
    username: string;
    userRole: string;
}

const ReviewCard = ({ image, title, username, userRole }: Props) => {
  return (
    <div className='w-full lg:w-[60%] mx-auto'>
      <Image 
        src={image} 
        alt="image"
        width={80}
        height={80}
        className='object-cover mx-auto'
      />
      <h1 className='mt-4 text-lg font-bold text-blue-600 dark:text-white text-center'>{title}</h1>
       <p className='mt-4 text-center text-gray-600 dark:text-gray-400'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda ab fuga. Quod doloremque voluptas dicta sit in quibusdam sunt officia consequent similique vitae nulla dolores aspernatur maiores, placeat necessitatibus cumque debitis accusamus enim expedita!
        </p>
      <div className='mt-8 text-center'>
        <h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>{username}</h1>
        <p className='text-gray-600 text-sm mt-2 dark:text-gray-400'>
            {userRole}
        </p>

      </div>
    </div>
  )
}
export default ReviewCard
