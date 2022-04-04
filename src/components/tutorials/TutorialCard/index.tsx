/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo, useState } from 'react';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

import './styles.css';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import Tooltip from '../../tutorials/TutorialTooltip';
import {
  Tags,
  TagList,
  type TagType,
  type Tutorial,
  type Tag,
} from '@site/src/data/tutorials';
import { sortBy } from '@site/src/utils/jsUtils';
import { useHistory } from '@docusaurus/router';

interface Props extends Tag {
  color: string;
  label: string;
  description: string;
}

const TagComp = React.forwardRef<HTMLLIElement, Props>(
  ({ label, color, description }, ref) => (
    <li ref={ref} className='tag' title={description}>
      <span className='text-label'>{label.toLowerCase()}</span>
      <span className='color-label' style={{ backgroundColor: color }} />
    </li>
  ),
);
TagComp.displayName = 'TagComponent';

function TutorialCardTag({ tags }: { tags: TagType[] }) {
  const tagObjects = tags.map((tag) => ({ tag, ...Tags[tag] }));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `tutorial_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl='#__docusaurus'
            id={id}
          >
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

const TutorialCard = memo(({ tutorial }: { tutorial: Tutorial }) => {
  const history = useHistory();
  const [hovering, setHovering] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(tutorial.website);
  };

  return (
    <li
      key={tutorial.title}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <div onClick={handleClick} className='card shadow--md tutorial-card'>
        <div className='card__image tutorial-card__image-container'>
          <Image
            className='tutorial-card__image'
            img={tutorial.preview}
            alt={tutorial.title}
          />
        </div>
        <div className='card__body'>
          <div className='tutorial-card__header'>
            <h4
              className={clsx(
                'tutorial-card__title',
                hovering && 'tutorial-card__title--hover',
              )}
            >
              {tutorial.title}
            </h4>
            {tutorial.tags.includes('favorite') && (
              <FavoriteIcon svgClass='svg-icon-favorite' size='small' />
            )}
            {tutorial.source && (
              <Link
                href={tutorial.source}
                className='button button--secondary button--sm tutorial-card__source-button'
              >
                source
              </Link>
            )}
          </div>
          <p className='tutorial-card__body'>{tutorial.description}</p>
        </div>
        <ul className='card__footer tutorial-card__footer'>
          <TutorialCardTag tags={tutorial.tags} />
        </ul>
      </div>
    </li>
  );
});
TutorialCard.displayName = 'TutorialCard';

export default TutorialCard;
