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
    contentsData : Array<ContentsData>
    currentCategory : ContentsData
    setCurrentCategoryId : React.Dispatch<React.SetStateAction<string>>
    newCategory : ()=>void
    changeCategory : (event:React.ChangeEvent<HTMLInputElement>)=>void
};

function ArchiveCategoryAdd(props:ArchiveNavProps) {

    return (
        <div className="archive-nav-header">
            <h4>Category Add</h4>
            <button className='archive-nav-add-button' onClick={props.newCategory}> + </button>
        </div>
    )
}

function AdminArchiveNav(props:ArchiveNavProps) {

    const inputElement = props.contentsData.map(content=> {
        return <input className='archiveNav-input' type='text' placeholder='New Category' value={content.CategoryTitle} onChange={props.changeCategory} onClick={()=>props.setCurrentCategoryId(content.CategoryId)}/>
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

function ArchiveNav(props:ArchiveNavProps) {
    return (
        props.admin ?
            <div className='archive-nav'>  
                <ArchiveCategoryAdd
                admin={props.admin} 
                contentsData={props.contentsData} 
                currentCategory={props.currentCategory} 
                setCurrentCategoryId={props.setCurrentCategoryId} 
                newCategory={props.newCategory}
                changeCategory={props.changeCategory}
                />
                <AdminArchiveNav 
                admin={props.admin} 
                contentsData={props.contentsData} 
                currentCategory={props.currentCategory} 
                setCurrentCategoryId={props.setCurrentCategoryId} 
                newCategory={props.newCategory}
                changeCategory={props.changeCategory}
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