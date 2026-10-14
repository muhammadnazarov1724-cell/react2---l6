import React, { useEffect } from 'react'
import { useData } from '../store/zustand'
import { useForm } from 'react-hook-form'
import { Button, DialogContent, DialogTitle, TextField } from '@mui/material'

export default function EditDialog({open,setOpen,user}: any) {

    let {editUser} = useData(state => state)

    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    function putUser(data) {
        editUser(user.id, data)
        setOpen(false)
    }

    useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        age: user.age,
        avatar: user.avatar,
        status: user.status ? "true" : "false"
      })
    }
  }, [user, reset])

  return (
    <dialog open={open}
        style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  }}>
        <DialogTitle>
            Edit User
        </DialogTitle>

        <form onSubmit={handleSubmit(putUser)}>
            <DialogContent sx={{backgroundColor: 'white'}}>
                <TextField placeholder='Name...' {...register('name')} defaultValue={user.name}/>
                <TextField placeholder='Age...' {...register('age')} defaultValue={user.age}/>
                <TextField placeholder='Url...' {...register('avatar')} defaultValue={user.avatar}/>
                <select {...register('status')} defaultValue={user.status}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <Button variant='text' type='submit'>Save</Button>
                <Button variant='text' onClick={()=> setOpen(!open)}>Close</Button>
            </DialogContent>
        </form>

    </dialog>
  )
}
