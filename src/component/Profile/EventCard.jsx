import { Height } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}}
            image='https://cdn.pixabay.com/photo/2023/08/26/14/19/cupcake-8215179_640.jpg'/>

            <CardContent>
                <Typography variant='h5'>
                    Namste India
                </Typography>

                <Typography variant='body2'>
                    50% on your first order
                </Typography>

                <div className='py-2 space-y-2 '>
                        <p>{"Mumbai"}</p>
                        <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
                        <p className='text-sm text-red-500'>February 15, 2024 12:00 AM</p>
                </div>
            </CardContent>

            {/*    //we give true and false for the button */}
            {false &&<CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
