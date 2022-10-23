import React from 'react';

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

type SidebarProps = {
    admin: boolean;
    contentsData : Array<ContentsData>
    currentCategory : ContentsData
    currentContent : Content
    setCurrentContentId : React.Dispatch<React.SetStateAction<string>>
    newContent : ()=>void
    changeContentTitle : (event:React.ChangeEvent<HTMLInputElement>)=>void
    changeContentBody : (event:React.ChangeEvent<HTMLTextAreaElement>)=>void
  }
    
    
function ArchiveContentAdd(props:SidebarProps) {
    return (
        <div className="archive-nav-header">
            <h4>Contents Add</h4>
            <button className='archive-nav-add-button' onClick={props.newContent}> + </button>
        </div>
    )
}

function AdminArchiveSidebar(props:SidebarProps) {

    const inputElement = props.currentCategory.contents.map(content=>{
            return <a className='archive-sidebar' onClick={()=>props.setCurrentContentId(content.id)}> {content.title} </a>
        })       

    return (
        props.contentsData.length > 0 ?
        <div className='archive-nav-wraper'>
            {inputElement}
        </div>
        :
        <div className="archive-nav-wraper"></div> 
    )
}

function ArchiveSidebar(props:SidebarProps) {
    return (
        props.admin ?
            <div className='side'>  
                <ArchiveContentAdd
                    admin={props.admin} 
                    contentsData={props.contentsData} 
                    currentCategory={props.currentCategory} 
                    currentContent={props.currentContent} 
                    setCurrentContentId={props.setCurrentContentId} 
                    newContent={props.newContent}
                    changeContentTitle={props.changeContentTitle}
                    changeContentBody={props.changeContentBody}
                />
                <AdminArchiveSidebar 
                    admin={props.admin} 
                    contentsData={props.contentsData} 
                    currentCategory={props.currentCategory} 
                    currentContent={props.currentContent} 
                    setCurrentContentId={props.setCurrentContentId} 
                    newContent={props.newContent}
                    changeContentTitle={props.changeContentTitle}
                    changeContentBody={props.changeContentBody}
                />
            </div>
        :
        <a href=""></a>


        // props.admin ?
        // (props.contents.length > 0 ?
        //     props.contents.map(content=> {
        //     <input type='text' value={content.CategoryTitle} />})
        //     : <input type='text' /> ) :
        // (props.contents.length>0?
        //     props.contents.map(content=> {
        //         return <a href="">{content.CategoryTitle}</a>}) :
        //         <div></div>)
    );
};



export default ArchiveSidebar;