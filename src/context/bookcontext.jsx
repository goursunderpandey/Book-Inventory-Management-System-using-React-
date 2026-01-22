import { createContext, useEffect, useState } from "react";
import { fetchBooks } from "../api/book";

export const Bookcontext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        fetchBooks()
            .then(data => {


                console.log(data, "42515");

                setBooks(data)
            })
            .catch((e) => console.log(e));
    }, []);


    const addBook = (book) => {
        setBooks(prev => [
            { ...book, id: Date.now() }, ...prev

        ]);
    };

    return (
        <Bookcontext.Provider value={{ books, addBook }}>
            {children}
        </Bookcontext.Provider>
    );
};
