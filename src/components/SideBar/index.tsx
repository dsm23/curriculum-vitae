import React, { useState } from 'react';
import classNames from 'classnames';

import png from '../../profile.png';

import './sidebar.css';

export default () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">David Murdoch</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={png}
            alt=""
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
        onClick={handleClick}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={classNames({ collapse: !isExpanded }, 'navbar-collapse')}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {[
            'about',
            'experience',
            'education',
            'skills',
            'interests',
            'awards',
          ].map(label => (
            <li className="nav-item" key={label}>
              <a
                className="nav-link js-scroll-trigger"
                href={`#${label}`}
                onClick={handleClick}
              >
                {label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
