import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const StyledLink = styled('a')({
  display: 'inline-block',
  height: '3.5rem',
  width: '3.5rem',
  backgroundColor: '#495057',
  color: '#fff',
  borderRadius: '100%',
  textAlign: 'center',
  fontSize: '1.5rem',
  lineHeight: '3.5rem',
  marginRight: '1rem',
  ':last-child': {
    marginRight: 0,
  },
  ':hover': {
    backgroundColor: '#BD5D38',
  },
});

export default () => (
  <>
    <StyledLink href="#">
      <FontAwesomeIcon icon={faGithub} />
    </StyledLink>
    <StyledLink href="#">
      <FontAwesomeIcon icon={faCodepen} />
    </StyledLink>
  </>
);
