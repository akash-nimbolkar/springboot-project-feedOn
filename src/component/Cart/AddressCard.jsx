import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import React from 'react';

const AddressCard = ({ handleSelectAddress, item, showButton, isAddNew }) => {
  return (
    <div className='border p-5 rounded shadow-lg'>
      {!isAddNew ? (
        <>
          <div className='p-3'>
            <div className='flex items-center space-x-2'>
              <HomeIcon />
              <h3 className='text-xl font-bold'>Address</h3>
            </div>
            <p className='mt-2'>Ankur Colony, Rahatani, Pune- 411017</p>
            <p className='mt-2'>Phone: (123) 456-7890</p>
          </div>
          {showButton && (
            <Button
              variant='outlined'
              fullWidth
              onClick={handleSelectAddress}
            >
              Select
            </Button>
          )}
        </>
      ) : (
        <div className='flex flex-col items-center justify-center h-full'>
          <AddLocationAltIcon fontSize='large' />
          <h3 className='text-xl font-bold mt-2'>Add Address</h3>
          <Button
            variant='outlined'
            fullWidth
            onClick={handleSelectAddress} // Use this function to open modal
            className='mt-2'
          >
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
