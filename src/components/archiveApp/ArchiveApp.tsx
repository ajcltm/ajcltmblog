import React from 'react';
import ArchiveNav from './ArchiveNav';
import ArchiveSidebar from './ArchiveSidebar';
import Aside from '../Aside';
import Advertise from '../Advertise';
import {Outlet, useOutletContext} from "react-router-dom";
import {nanoid} from 'nanoid'

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

type ContentProps = {
  admin: boolean;
  contentsData : Array<ContentsData>
  currentContent : Content
  setCurrentContentId : React.Dispatch<React.SetStateAction<string>>
  newContent : ()=>void
  changeContentTitle : (event:React.ChangeEvent<HTMLInputElement>)=>void
  changeContentBody : (event:React.ChangeEvent<HTMLTextAreaElement>)=>void
}

// type SidebarProps = {
//   admin: boolean;
//   contentsData : Array<ContentsData>
//   currentCategory : ContentsData
//   currentContent : Content
//   setCurrentContentId : React.Dispatch<React.SetStateAction<string>>
//   newContent : ()=>void
//   changeContentTitle : (event:React.ChangeEvent<HTMLInputElement>)=>void
//   changeContentBody : (event:React.ChangeEvent<HTMLTextAreaElement>)=>void
// }

function ArchiveApp() {

  const newContent : ContentsData = {
    CategoryId: nanoid(),
    CategoryTitle: '',
    contents: [{id:nanoid(), title: 'new content title', body:'This is the new content!'}]
  }

  const [contentsData, setContentsData] = React.useState<ContentsData[]>([newContent])
  const [currentCategoryId, setCurrentCategoryId] = React.useState(
    (contentsData[0] && contentsData[0].CategoryId) || ""
  )

  function ceateNewCategory() {
    const newContent : ContentsData = {
      CategoryId: nanoid(),
      CategoryTitle: '',
      contents: [{id:nanoid(), title: 'new content title', body:'This is the new content!'}]
    }
    setContentsData(prevContents => [...prevContents, newContent])
    setCurrentCategoryId(newContent.CategoryId)
  }

  function updateCategory(event:React.ChangeEvent<HTMLInputElement>) {
    setContentsData(oldContents => oldContents.map(oldContent => {
      return oldContent.CategoryId === currentCategoryId
        ? {...oldContent, CategoryTitle:event.target.value}
        : oldContent
    }))
  }

  function findCurrentCategory() {
    return contentsData.find(content => {
      return content.CategoryId === currentCategoryId
    }) || contentsData[0]
  }


  const [currentCententId, setCurrentContentId] = React.useState(
    (contentsData[0] && contentsData[0].contents[0].id) || ""
  )

  function ceateNewContent() {
    const newContent : Content = {
      id: nanoid(),
      title: 'new content title',
      body: 'This is the new content!'
    }
    
    setContentsData(
      prevContents=>{
      const currentContents = findCurrentCategory().contents
      return prevContents.map(prevContent =>{
        return prevContent.CategoryId === currentCategoryId
        ? {...prevContent, contents:[...currentContents, newContent]}
        : prevContent
      })
    })
    setCurrentContentId(newContent.id)
  }

  function findCurrentContent() {
    const currentContents = (findCurrentCategory()&&findCurrentCategory().contents) || []
    return (
      currentContents.find(content => {
      return content.id === currentCententId
    }) || currentContents[0])
  }

  function updateContentTitle(event:React.ChangeEvent<HTMLInputElement>) {
    const updatedContentTitle= () =>{
      const currentContents = findCurrentCategory().contents
      const updatedContents = currentContents.map(content=>{
        return content.id === currentCententId?
        {...content, title:event.target.value}
        : content
      })
    return updatedContents
  }

    setContentsData(
      prevContents=>{
      return prevContents.map(prevContent =>{
        return prevContent.CategoryId === currentCategoryId
        ? {...prevContent, contents:updatedContentTitle()}
        : prevContent
      })
    })
  }

  function updateContentBody(event:React.ChangeEvent<HTMLTextAreaElement>) {
    const updatedContentbody= () =>{
      const currentContents = findCurrentCategory().contents
      const updatedContents = currentContents.map(content=>{
        return content.id === currentCententId?
        {...content, body:event.target.value}
        : content
      })
    return updatedContents
  }

    setContentsData(
      prevContents=>{
      return prevContents.map(prevContent =>{
        return prevContent.CategoryId === currentCategoryId
        ? {...prevContent, contents:updatedContentbody()}
        : prevContent
      })
    })
  }

  const contentProps:ContentProps = {
    admin: true,
    contentsData : contentsData,
    currentContent : findCurrentContent(),
    setCurrentContentId : setCurrentContentId,
    newContent : ceateNewContent,
    changeContentTitle : updateContentTitle,
    changeContentBody : updateContentBody
  }


  return (
    <div className='screen-grid'>
      <ArchiveNav 
        admin={true} 
        contentsData={contentsData} 
        currentCategory={findCurrentCategory()} 
        setCurrentCategoryId={setCurrentCategoryId} 
        newCategory={ceateNewCategory}
        changeCategory={updateCategory}
      />
      <Outlet context={contentProps}/>
      {/* <Aside /> */}
      <ArchiveSidebar
        admin={true} 
        contentsData = {contentsData}
        currentCategory={findCurrentCategory()} 
        currentContent = {findCurrentContent()}
        setCurrentContentId = {setCurrentContentId}
        newContent = {ceateNewContent}
        changeContentTitle = {updateContentTitle}
        changeContentBody = {updateContentBody}
      />
      <Advertise />
    </div>
  );
}

export default ArchiveApp;
export function useContentProps() {
  return useOutletContext<ContentProps>();
};