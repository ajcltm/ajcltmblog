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

type ArchiveNavProps = {
    admin : boolean;
    contents : Array<ContentsData>
    currentContent : ContentsData
    setCurrentContentId : React.Dispatch<React.SetStateAction<string>>
    newContent : ()=>void
    changeContent : (event:React.ChangeEvent<HTMLInputElement>)=>void
};

function ArchiveCategoryAdd(props:ArchiveNavProps) {

    return (
        <div className="archive-nav-header">
            <h4>Category Add</h4>
            <button className='archive-nav-add-button' onClick={props.newContent}> + </button>
        </div>
    )
}

function AdminArchiveNav(props:ArchiveNavProps) {

    const inputElement = props.contents.map(content=> {
        return <input className='archiveNav-input' type='text' placeholder='New Category' value={content.CategoryTitle} onChange={props.changeContent} onClick={()=>props.setCurrentContentId(content.CategoryId)}/>
})
    return (
        props.contents.length > 0 ?
        <div className='archive-nav-wraper'>
            {inputElement}
        </div>
        :
        <div className="archive-nav-wraper"></div> 
    )
}

function ArchiveNav(props:ArchiveNavProps) {
    return (
        props.admin ?
            <div className='archive-nav'>  
                <ArchiveCategoryAdd
                admin={props.admin} 
                contents={props.contents} 
                currentContent={props.currentContent} 
                setCurrentContentId={props.setCurrentContentId} 
                newContent={props.newContent}
                changeContent={props.changeContent}
                />
                <AdminArchiveNav 
                admin={props.admin} 
                contents={props.contents} 
                currentContent={props.currentContent} 
                setCurrentContentId={props.setCurrentContentId} 
                newContent={props.newContent}
                changeContent={props.changeContent}
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



export default ArchiveNav;