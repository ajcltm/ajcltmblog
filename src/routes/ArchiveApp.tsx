import React from 'react';
import Reset from 'styled-reset';
import Nav from '../components/Nav';
import ArchiveNav from '../components/nav/ArchiveNav';
import Content from '../components/Content';
import Aside from '../components/Aside';
import Advertise from '../components/Advertise';
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import {nanoid} from 'nanoid'

function ArchiveApp() {
  type Contents = {
    id: string;
    title: string;
    content: string;
}
  // const contents = [{id:'0001', 'title': 'newContent', 'content':'This is the content!'}]
  // const Contents: Contents[] = []

  const [contents, setContents] = React.useState<Contents[]>([])
  const [currentContentId, setCurrentContentId] = React.useState(
    (contents[0] && contents[0].id) || ""
  )

  function ceateNewContent() {
    const newContent : Contents = {
      id: nanoid(),
      title: 'New Category',
      content: 'This is the new content!'
    }
    setContents(prevContents => [newContent, ...prevContents])
    setCurrentContentId(newContent.id)
  }

  function updateNote(text:string) {
    setContents(oldContents => oldContents.map(oldContent => {
      return oldContent.id === currentContentId
        ? {...oldContent, content:text}
        : oldContent
    }))
  }

  function findCurrentContent() {
    return contents.find(content => {
      return content.id === currentContentId
    }) || contents[0]
  }

  return (
    <div className='screen-grid'>
      <ArchiveNav 
        admin={true} 
        contents={contents} 
        currentContent={findCurrentContent()} 
        setCurrentContentId={setCurrentContentId} 
        newContent={ceateNewContent}
      />
      <Outlet />
      <Aside />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;