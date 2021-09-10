import React from 'react'
import glossary from '@site/static/glossary/glossary.json'

function GlossaryToolTip({glossaryKey}) {

    return (
        <span className={"tooltip"} data-tip={glossary[glossaryKey]}>{glossaryKey}</span>
    )
}

export default GlossaryToolTip;