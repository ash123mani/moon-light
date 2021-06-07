import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const asButtonStyles = ({ asButton }) =>
  asButton &&
  css`
    border: 1px solid var(--dark-black);
    background-color: var(--dark-black);
    color: var(--dark-white);
    padding: 8px 16px;
    border-radius: 2px;
    position: relative;

    &:before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      height: 100%;
      width: 0%;
    }

    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: '';
      height: 100%;
      width: 0%;
    }

    &:hover {
      opacity: 1;
      color: var(--dark-black);

      &:before,
      &:after {
        width: 50%;
        background-color: var(--dark-white);
        -webkit-transition: all 500ms linear;
        -ms-transition: all 500ms linear;
        transition: all 500ms linear;
      }
    }
  `

const GatsbyLink = styled(Link)`
  font-size: 1.4rem;

  &:hover {
    opacity: 0.6;
  }

  ${asButtonStyles};
`

export { GatsbyLink }
