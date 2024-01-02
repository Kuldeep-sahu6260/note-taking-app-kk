import React, {useState} from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, getAllNotes } from './noteSlice';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

const EditNoteForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(getAllNotes);
  let tempNote = notes.filter(note => note.noteId === id);

  const [formData, setFormData] = useState(tempNote[0]);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [canSave, setCanSave] = useState(true);

  const onFormDataChange = (event) => {
    event.preventDefault();
    if(event.target.name === 'noteTitle'){
      if(event.target.value.length === 0){
        setTitleError(true);
      } else {
        setTitleError(false);
        setCanSave(true);
      }
    }

    if(event.target.name === 'noteContent'){
      if(event.target.value.length === 0){
        setContentError(true);
      } else {
        setContentError(false);
        setCanSave(true);
      }
    }

    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      }
    })
  }

  const onSaveNoteClicked = () => {
    if(!titleError && !contentError){
      console.log(formData);
      dispatch(editNote(formData));
      toast("Note edited successfully");
      setFormData({noteTitle: "", noteContent: ""});
    }
  }

  return (
    <div>
      <section className='pl-[36px] pr-[36px] py-[24px] rounded-[4px] m-[12px] [box-shadow:rgba(0,_0,_0,_0.06)_0px_1px_9px]'>
        <h2 className='my-4 fs-16'>Add New Note</h2>
        <form className='max-w-[480px]'>
          <div className='mb-[14px]'>
            <label htmlFor='noteTitle' className='block mb-[6px] font-semibold text-[14px]'>Title:</label>
            <input type = "text" id = "noteTitle" name = "noteTitle" placeholder='Note title here ...' onChange={onFormDataChange} className = "border-[1px] border-[solid] border-[rgba(0,0,0,0.1)] px-4 py-[0.7rem] w-full rounded-[2px] text-[14px] font-light opacity-90 leading-[1.6]" value = {formData.noteTitle} />
            <span className='text-[13px] opacity-90 text-clrredsalsa'>{titleError ? "Title can't be empty!" : ""}</span>
          </div>

          <div className='mb-[14px]'>
            <label htmlFor='noteContent' className='block mb-[6px] font-semibold text-[14px]'>Content:</label>
            <textarea id = "noteContent" name = "noteContent" placeholder='Note content here ...' onChange={onFormDataChange} className = "border-[1px] border-[solid] border-[rgba(0,0,0,0.1)] px-4 py-[0.7rem] w-full rounded-[2px] text-[14px] font-light opacity-90 leading-[1.6]" rows = "10" value = {formData.noteContent}></textarea>
            <span className='text-[13px] opacity-90 text-clrredsalsa'>{contentError ? "Content can't be empty!" : ""}</span>
          </div>

          <button type = "button" onClick={(onSaveNoteClicked)} className = "text-[14px] text-white rounded-[3px] px-[1.4rem] py-[0.6rem] bg-red-600 border-[1px] border-[solid] border-[clrredsalsa] [transition:all_300ms_ease-in-out] hover:bg-transparent hover:text-red-900 btn-default" disabled = {!canSave}>Save Note</button>
          <ToastContainer />
        </form>
      </section>
    </div>
  )
}

export default EditNoteForm
