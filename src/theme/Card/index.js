import React from 'react';
import style from './styles.css';

export default function Card({ title, link, description, icon }) {
    const handleClick = (e) => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <div class="card card__pointer margin-horiz--md margin-vert--md shadow--md" onClick={handleClick}>
            <div class="card__header">
                <h3>{title}</h3>
            </div>
            <div class="card__body icon">
                {icon}
            </div>
            <div class="card__footer">
                <p>{description}</p>
            </div>
        </div>
    );
}