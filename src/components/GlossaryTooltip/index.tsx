import React from 'react'
import glossary from '@site/static/glossary/glossary.json'

/***
 * Usage:
 * 1. Import ReactTollTip and Glossary ToolTip Components:
 * import ReactTooltip from 'react-tooltip';
 * import GlossaryTooltip from '../../../src/components/GlossaryTooltip';
 *
 * 2. Render the ReactTooltip:
 * `<ReactTooltip />`
 *
 * 3. Create as many GlossaryTooltips as needed:
 * `<GlossaryTooltip glossaryKey="Balance" />`
 */
class GlossaryToolTip extends React.Component<{ glossaryKey: string }> {
    render() {
        const { glossaryKey } = this.props;
        if (glossary[glossaryKey]) {
            return (
                <a href={"/glossary/#" + glossary[glossaryKey].title.replace(/ /g, "-")}>
                    <span className={"tooltip"} data-tip={glossary[glossaryKey].short}>{glossaryKey}</span>
                </a>
            )
        } else {
            return <span>{glossaryKey}</span>;
        }
    }
}

export default GlossaryToolTip;
