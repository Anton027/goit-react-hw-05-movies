import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from 'react';

export function Searchbar({ onSubmit }) {
    const [movie, setMovie] = useState('');

    const handleNameChange = e => {
        setMovie(e.currentTarget.value)
    };

    const handleSubmit = e => {
        console.log('SUBMIT');
        e.preventDefault();
        if (e.currentTarget.input.value.trim() === '') {
            toast('Please write correct movie name');
            return;
        }
        onSubmit(movie);
        setMovie('');
    };

    return (
            <div>
                <form  onSubmit={handleSubmit}>
                    <button type="submit" >
                        <AiFillCaretRight size="20" />
                    </button>
                    <input
                        
                        name="input"
                        type="text"
                        value={movie}
                        onChange={handleNameChange}
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </div>
        )
} 