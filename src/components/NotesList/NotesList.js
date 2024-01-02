import React from 'react';

import {ImCancelCircle} from "react-icons/im";
import {FiEdit} from "react-icons/fi";
import { parseISO, formatDistanceToNow} from 'date-fns';
import {Link} from "react-router-dom";
import { removeNote } from '../../features/notes/noteSlice';
import { useDispatch } from 'react-redux';

const NotesList = ({notes}) => {
  const dispatch = useDispatch();

  if(!notes || notes.length === 0){
    return (<div className='not-found'>No any notes found</div>)
  }

  return (
    <div className='mx-[12px] my-[24px] [box-shadow:rgba(0,_0,_0,_0.06)_0px_1px_9px] px-[20px] py-[25px]'>
      <h5 className='fs-18 fw-8 text-uppercase border-b-[1px_solid_clrdark] pb-[8px] text-[16px]'>notes</h5>
      <div className='mx-[0] my-[36px] gap-[16px] grid'>
        {
          notes.map(note => {
            return (
              <div className='border-[1px] border-[solid] text-black border-[rgba(0,0,0,0.1)] rounded-[6px] relative [transition:all_300ms_ease-in-out] hover:bg-clrredsalsa hover:text-clrwhite' key = {note.noteId}>
                <div className='text-[15px] font-medium bg-[rgba(0,_0,_0,_0.02)] rounded-tl-[4px] rounded-tr-[4px] px-[14px] py-[8px] border-b-[1px_solid_rgba(0,_0,_0,_0.1)]'>
                  {note.noteTitle.substring(0, 80) + "..."}
                </div>
                <div className='text-[14px] font-light opacity-95 pl-[14px] pr-[14px] py-[14px]'>
                  {note.noteContent.substring(0, 150) + "..."}
                </div>
                <div className='inline-block mx-[14px] my-[0] text-[12.5px] border-t-[1px_solid_rgba(0,_0,_0,_0.02)] text-capitalize'>{formatDistanceToNow(parseISO(note.noteDate))}</div>
                <div className='pl-[14px] pr-[14px] py-[16px] flex align-center justify-between'>
                  <div className='flex'>
                    <button type = "button" className='mr-[10px] [transition:all_300ms_ease-in-out]' onClick={() => dispatch(removeNote(note.noteId))}>
                      <ImCancelCircle className='text-[18px] text-clrredsalsa bg-white' />
                    </button>
                    <Link to = {`/edit/${note.noteId}`} className = "mr-[10px] [transition:all_300ms_ease-in-out]">
                      <FiEdit className='text-[19px] text-clrgreen bg-white' />
                    </Link>
                  </div>

                  <Link to = {`/note/${note.noteId}`} className='fs-14'>Read More</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NotesList
