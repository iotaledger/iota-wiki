import React from 'react'
import glossary from '@site/static/glossary/glossary.json'

function GlossaryToolTip({glossaryKey}) {

    return (
        <a href={"/docs/learn/resource-materials/glossary#"+glossary[glossaryKey].link} className={"tooltip"} data-tip={glossary[glossaryKey].tip}>{glossaryKey}</a>
    )
}

export default GlossaryToolTip;