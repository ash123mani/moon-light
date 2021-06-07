import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const asButtonStyles = ({ asButton }) =>
  asButton &&
  css`
    border: 1px solid var(--dark-black);
    color: var(--medium-white);
    padding: 8px 16px;
    border-radius: 4px;
    position: relative;
    font-weight: 500;

    &:before,
    &:after {
      background: var(--dark-black);
      position: absolute;
      bottom: 0;
      content: '';
      height: 100%;
      width: 50%;
      z-index: -1;
    }

    &:after {
      right: 50%;
    }

    &:before {
      left: 50%;
    }

    &:hover {
      opacity: 1;
      color: var(--dark-black);
    }

    &:hover:before,
    &:hover:after {
      width: 0%;
      background: var(--dark-white);
      -webkit-transition: all 500ms linear;
      -ms-transition: all 500ms linear;
      transition: all 500ms linear;
    }
  `

const GatsbyLink = styled(Link)`
  font-size: 1.4rem;

  &:hover {
    /* opacity: 0.6; */
  }

  ${asButtonStyles};
`

export { GatsbyLink }
