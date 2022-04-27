import React from 'react';
import get_socials_data from '../../helper/socials';

interface SocialLinkProps {
  link: string;
}

export interface TeamMemberProps {
  name: string;
  title: string;
  image_url: string;
  social_links: string[];
}

function SocialLink({ link }: SocialLinkProps) {
  const data = get_socials_data(link);

  return (
    <a className='team__icon margin-horiz--sm' href={link}>
      <div>{data.icon}</div>
    </a>
  );
}

const TeamMember = function ({
  name,
  title,
  image_url,
  social_links,
}: TeamMemberProps) {
  return (
    <div className='col margin-vert--md'>
      <div className='card card--full-height'>
        <div className='card__header'>
          <div className='avatar avatar--vertical'>
            <img
              className='avatar__photo avatar__photo--xl margin-vert--md'
              src={image_url}
            />
            <div className='avatar__intro'>
              <div className='avatar__name'>{name}</div>
              <small className='avatar__subtitle'>{title}</small>
            </div>
          </div>
        </div>

        <div className='card__footer'>
          <div className='link-list'>
            {social_links &&
              social_links.map((link, idx) => (
                <SocialLink key={idx} link={link} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
