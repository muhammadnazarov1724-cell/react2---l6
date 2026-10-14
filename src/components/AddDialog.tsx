import React from 'react'
import { useData } from '../store/zustand'
import { useForm } from 'react-hook-form'
import { Button, DialogContent, DialogTitle, TextField } from '@mui/material'

export default function AddDialog({open,setOpen}: any) {

    let {postUser} = useData(state => state)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    function addUser(data) {
        postUser(data)
        setOpen(false)
    }

  return (
    <dialog open={open} 
    style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  }}>
        <DialogTitle>
            Add Users
        </DialogTitle>

        <form onSubmit={handleSubmit(addUser)}>
            <DialogContent sx={{backgroundColor: 'white'}}>
                <TextField placeholder='Name...' {...register('name', {required: true})}/>
                 {errors.fullname && <p className="text-red-600">Name is required</p>}
                 <TextField placeholder='Age...' {...register('age')}/>
                 <TextField placeholder='Url...' {...register('avatar')}/>
                 <select {...register('status')}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                 </select>
                 <Button variant='text' type='submit'>Add</Button>
                 <Button variant='text' onClick={()=> setOpen(false)}>Close</Button>
            </DialogContent>

        </form>

    </dialog>
  )
}
