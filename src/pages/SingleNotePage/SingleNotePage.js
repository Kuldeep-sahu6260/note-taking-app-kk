import React from 'react';
import { useSelector } from 'react-redux';

import { getAllNotes } from '../../features/notes/noteSlice';
import { useParams } from 'react-router';

const SingleNotePage = () => {
    const { id } = useParams();
    const notes = useSelector(getAllNotes);
    let tempNote = notes.filter(note => note.noteId === id);
    return (
        <section className='note-single-section px-4'>
            <div className='border-b-[1px_solid_rgba(0,_0,_0,_0.1)]'>
                <h2 className='my-2 fs-20'>{tempNote[0].noteTitle}</h2>
            </div>
            
            <div className='py-4'>
                <p>{tempNote[0].noteContent}</p>
            </div>
        </section>
    )
}

export default SingleNotePage
