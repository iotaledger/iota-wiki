import React from 'react';

import './styles.css';

import glossary from '@site/static/glossary/glossary.json'

function Definitions() {
    const definitions = Object.keys(glossary).map((glossaryEntry) => {
        return (
            <div key={glossary[glossaryEntry].title}>
                <h3 id={glossary[glossaryEntry].title.replace(/ /g,"-")}>{glossary[glossaryEntry].title}</h3>
                <p>{glossary[glossaryEntry].full}</p>
            </div>)
    });
    return (
        <div>
            {definitions}
        </div>
    );
}

function NavBar() {
    const sidebarElements= Object.keys(glossary).map((glossaryEntry) => {
        return (
            <li key={glossary[glossaryEntry].title+"_sidebar"}>
                <a href={"#"+glossary[glossaryEntry].title.replace(/ /g,"-")} className="table-of-contents__link toc-highlight">
                    {glossary[glossaryEntry].title}
                </a>
            </li>
        )
    });
    return  (
        <div>
            <ul className="table-of-contents table-of-contents__left-border">
                {sidebarElements}
            </ul>
        </div>)

}

function Glossary(): JSX.Element {
    return (
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridGap: 20 }}>
            <Definitions />
            <NavBar />
          </div>
  );
}

export default Glossary;
