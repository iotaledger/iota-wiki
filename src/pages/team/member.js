import React from 'react';

function SocialLink({ label, icon, link }) {
    return (
        <a className="team__icon margin-horiz--sm" href={link}>
            <div>{icon}</div>{label}
        </a>
    );
}

const TeamMember = function (props) {
    let { name, title, image_url, social_links } = props

    return (
        <div className='col margin-vert--md'>
            <div class="card card--full-height">
                <div class="card__header">
                    <div class="avatar avatar--vertical">
                        <img
                            class="avatar__photo avatar__photo--xl margin-vert--md"
                            src={image_url}
                        />
                        <div class="avatar__intro">
                            <div class="avatar__name">{name}</div>
                            <small class="avatar__subtitle">
                                {title}
                            </small>
                        </div>
                    </div>
                </div>
                
                <div class="card__footer">
                    <div className="link-list">
                        {social_links.map((props, idx) => (
                            <SocialLink key={idx} {...props}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamMember;