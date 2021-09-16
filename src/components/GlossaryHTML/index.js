import React from 'react'
import glossary from '@site/static/glossary/glossary.json'

function GlossaryHTML() {
    let html =  Object.entries(glossary).map((glossaryEntry)=>{
        return <div><h3>{glossaryEntry.title}</h3><p>{glossaryEntry.full}</p></div>
    }) ;
    return (
        html
    );
}

export default GlossaryHTML;