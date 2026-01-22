import axios from "axios";



export const fetchBooks = async () => {
   let res = await axios.get("https://potterapi-fedeperin.vercel.app/en/books")
   return res.data;
};
