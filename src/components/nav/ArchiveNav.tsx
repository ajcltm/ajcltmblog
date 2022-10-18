import React from 'react';

type Contents = {
    id: string;
    title: string;
    content: string;
}

type ArchiveNavProps = {
    admin : boolean;
    contents : Array<Contents>
    currentContent : Contents
    setCurrentContentId : React.Dispatch<React.SetStateAction<string>>
    newContent : ()=>void

};

function ArchiveHeader() {
    return (
        <div className="archive-nav-header">
            <h4>Category Add</h4>
            <button className='archive-nav-add-button'> + </button>
        </div>
    )
}

function AdminArchiveNav(props:ArchiveNavProps) {
    const inputElement = props.contents.map(content=> {
        return <input className='archiveNav-input' type='text' value={content.title} />
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
                <ArchiveHeader />
                <AdminArchiveNav 
                admin={props.admin} 
                contents={props.contents} 
                currentContent={props.currentContent} 
                setCurrentContentId={props.setCurrentContentId} 
                newContent={props.newContent} 
                />
            </div>
        :
        <a href=""></a>


        // props.admin ?
        // (props.contents.length > 0 ?
        //     props.contents.map(content=> {
        //     <input type='text' value={content.title} />})
        //     : <input type='text' /> ) :
        // (props.contents.length>0?
        //     props.contents.map(content=> {
        //         return <a href="">{content.title}</a>}) :
        //         <div></div>)
    );
};



export default ArchiveNav;