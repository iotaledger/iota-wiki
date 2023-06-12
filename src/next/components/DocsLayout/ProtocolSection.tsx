import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import { Shimmer, Tips } from '@site/src/common/icons';

const ProtocolSection: FC = () => (
  <div className='nodes__cards'>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Shimmer />
      </div>
      <div className='nodes__section'>
        <h3 className='nodes__header'>Stardust Protocol</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/'>
              What is Stardust?
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/tokenization/'>
              All about tokenization
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions/'>
              New output unlock features
            </Link>
          </li>
        </ul>
        <Link
          to='https://wiki.iota.org/shimmer/introduction/welcome'
          className='nodes__button button button--outline button--primary'
        >
          Learn more about Stardust
        </Link>
      </div>
    </div>
    <div className='nodes__card'>
      <div className='nodes__icon'>
        <Tips />
      </div>
      <div className='nodes__section'>
        <h3 className='nodes__header'>Tangle Improvement Proposals (TIPS)</h3>
        <ul className='nodes__features'>
          <li className='nodes__feature'>
            <Link to='https://wiki.iota.org/shimmer/tips/tips/TIP-0032/'>
              Shimmer Protocol Parameters
            </Link>
          </li>
          <li className='nodes__feature'>
            <Link to='https://wiki.iota.org/shimmer/tips/tips/TIP-0027/'>
              IOTA NFT Standard
            </Link>
          </li>
        </ul>
        <Link
          to='https://wiki.iota.org/shimmer/tips/'
          className='nodes__button button button--outline button--primary'
        >
          Browse the latest TIPs
        </Link>
      </div>
    </div>
  </div>
);

export default ProtocolSection;
