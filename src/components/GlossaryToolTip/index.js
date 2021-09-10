import React from 'react'
import glossary from '@site/static/glossary/glossary.json'

function GlossaryToolTip({glossaryKey}) {
    if(glossary[glossaryKey])
    {
        return (
            <span className={"tooltip"} data-tip={glossary[glossaryKey].short}>{glossaryKey}</span>
        )
    }
    else {
        return <span>{glossaryKey}</span>;
    }
}

export default GlossaryToolTip;