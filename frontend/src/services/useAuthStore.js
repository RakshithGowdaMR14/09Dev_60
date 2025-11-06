import {create} from 'zustand';
import api from "./api.js";
import toast from 'react-hot-toast';


const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSignedUp: false,
  isLogedIn: false,
  isCheckingAuth: true,
  socket:null,

  checkAuth: async() => {
    try{
      const res = await api.get("/auth/check");
      set({authUser: res.data});
    } catch(error){
      console.log("Error in check auth",error);
      set({authUser: null});
    } finally{
      set({isCheckingAuth: false});
    }
  },
  signup: async(data) => {
    set({isSignedUp:true});
    try{
      const res = await api.post("/auth/sign-up",data);
      set({authUser:res.data});
      toast.success("Account created successfully");
    }catch(error){
      toast.error("Error in sign up form",error.message);
    }finally{
      set({isSignedUp:false});
    }
  },

  login: async(data) => {
    set({isLogedIn:true});
    try{
      const res = await api.post("/auth/sign-in",data);
      set({authUser:res.data});
      toast.success("Logged in  successfully");
    }catch(error){
      toast.error("Error in login  form",error.message);
    }finally{
      set({isLogedIn:false});
    } 
  },

  logout: async() => {
    try{
      await api.post("/auth/sign-out");
      set({authUser:null});
      toast.success("Logged out successfully");
    }catch(error){
      toast.error("Error in logout:", error);
    }
  },

}));