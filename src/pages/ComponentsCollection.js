import React from 'react';
import SelectMenus from '../components/SelectMenus';
import AvatarGroup from '../components/AvatarGroup';
import Pagination from '../components/Pagination';

export default function ComponentsCollection() {
  return (
    <div className='w-full p-4 bg-white flex flex-col space-y-6'>
      {/* Component */}
      <div className='border border-gray-200 rounded'>
        <h2 className='p-4 text-2xl font-semibold font-sans text-gray-900 sm:text-xl'>
          Pagination component
        </h2>
        <div className='p-4 border-t border-gray-200 flex justify-center '>
          <div className='flex-auto'>
            <Pagination />
          </div>
        </div>
      </div>

      {/* Component */}
      <div className='border border-gray-200 rounded'>
        <h2 className='p-4 text-2xl font-semibold font-sans text-gray-900 sm:text-xl'>
          Avatars Group component
        </h2>
        <div className='p-4 border-t border-gray-200 flex justify-center '>
          <div className='flex-auto'>
            <AvatarGroup />
          </div>
        </div>
      </div>

      {/* Component */}
      <div className='border border-gray-200 rounded'>
        <h2 className='p-4 text-2xl font-semibold font-sans text-gray-900 sm:text-xl'>
          Select Menu component
        </h2>
        <div className='p-4 border-t border-gray-200 flex justify-center '>
          <div className='flex-auto'>
            <SelectMenus />
          </div>
        </div>
      </div>
    </div>
  );
}
