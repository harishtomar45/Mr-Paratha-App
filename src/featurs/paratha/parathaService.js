import axios from "axios"

export const fetchParatha = async () => {
     const response = await  axios.get("https://paratha-store.onrender.com/data")
     return response.data;
}