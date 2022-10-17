import React from 'react';

type Contents = {
    id: string;
    title: string;
    content: string;
}

type ArchiveNavProps = {
    admin : boolean;
    contents : Array<Contents>
};

function ArchiveNav(props:ArchiveNavProps) {
    const inputElement = props.contents.map(content=> {
            return <input type='text' value={content.title} />
    })
    return (
        props.admin ?
        (props.contents.length > 0 ?
            <div>{inputElement}</div>
            : <input type='text' value='empty'/> )
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