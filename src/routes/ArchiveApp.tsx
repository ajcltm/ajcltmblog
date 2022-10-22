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

  type Content = {
    id: string;
    title: string;
    body: string;
  }

  type ContentsData = {
    CategoryId: string;
    CategoryTitle: string;
    contents: Content[];
}
  // const contents = [{id:'0001', 'title': 'newContent', 'content':'This is the content!'}]
  // const Contents: Contents[] = []

  const [contents, setContents] = React.useState<ContentsData[]>([])
  const [currentContentId, setCurrentContentId] = React.useState(
    (contents[0] && contents[0].CategoryId) || ""
  )

  function ceateNewContent() {
    const newContent : ContentsData = {
      CategoryId: nanoid(),
      CategoryTitle: '',
      contents: [{id:nanoid(), title: 'New contet title', body:'This is the new content!'}]
    }
    setContents(prevContents => [...prevContents, newContent])
    setCurrentContentId(newContent.CategoryId)
  }

  function updateCategory(event:React.ChangeEvent<HTMLInputElement>) {
    setContents(oldContents => oldContents.map(oldContent => {
      return oldContent.CategoryId === currentContentId
        ? {...oldContent, CategoryTitle:event.target.value}
        : oldContent
    }))
  }


  function findCurrentContent() {
    return contents.find(content => {
      return content.CategoryId === currentContentId
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
        changeContent={updateCategory}
      />
      <Outlet />
      <Aside />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;