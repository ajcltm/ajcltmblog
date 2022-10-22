import React from 'react';
import { useContentProps } from '../routes/ArchiveApp'

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

function AdminContent(props:ContentProps) {

    return (
        props.contentsData.length > 0 ?
        <article className='content'>  
            <input className='content-input-title' type='text' placeholder='New Content Title' value={props.currentContent.title} onChange={props.changeContentTitle} onClick={()=>props.setCurrentContentId(props.currentContent.id)}/>
            <textarea className='content-input-content' rows={15} cols={15} placeholder='Please write contet details' value={props.currentContent.body} onChange={props.changeContentBody} onClick={()=>props.setCurrentContentId(props.currentContent.id)}/>
        </article>
        :
        <div className="archive-nav-wraper"></div> 
    )
}

function ArchiveContent() {
    const props = useContentProps()
    const style = {'gridColumn': '3 / span 6'}
    return (
        props.admin ?
        <AdminContent
        admin={props.admin} 
        contentsData={props.contentsData} 
        currentContent={props.currentContent} 
        setCurrentContentId={props.setCurrentContentId} 
        newContent={props.newContent}
        changeContentTitle={props.changeContentTitle}
        changeContentBody={props.changeContentBody}
        />
        :
        <article className="content" style={style}>
            <h1 className="main--title"> {props.currentContent.title} </h1>
            <p className="main--facts"> {props.currentContent.body}</p>
        </article>
)
}

export default ArchiveContent