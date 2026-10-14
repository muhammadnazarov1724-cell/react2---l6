import axios from "axios";
import { create } from "zustand";
import { api } from "../utils/api";

export const useData = create((set,get) =>({
    data:[],
    loading: false,
    error:[],
    get: async()=> {
        set((state) => ({loading: true}))

        try {
            let {data} = await axios.get(api)
            set((state) => ({data: data, loading:false}))
        } catch (error) {
            set((s)=> ({error: error}))
        }
    },

    deleteUser: async(id)=> {
        try {
            await axios.delete(`${api}/${id}`)
            set((state) => ({
                data: state.data.filter((el) => el.id != id)
            }))
        } catch (error) {
           set((s)=> ({error: error})) 
        }
    },

    postUser: async(newUser)=> {
        try {
          await axios.post(api, newUser)
          set((state) => ({
            data: [...state.data, newUser]
          }))
        } catch (error) {
          set((s)=> ({error: error}))  
        }
    },

    editUser: async (id, update) => {
        try {
           await axios.put(`${api}/${id}`, update)
           set((state) => ({
            data: state.data.map((el) => el.id === id ? {...el, ...update} : el)
           }))   
        } catch (error) {
            set((s)=> ({error: error})) 
        }
    }


}))