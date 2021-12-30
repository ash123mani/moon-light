import styled from 'styled-components'

import Icon from '../../../../common/icon'

import { mediaQueries } from '../../../../styles/utils'

const NonIndexPageHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  background: black;
  height: 80px;
  align-items: center;
  position: relative;

  @media ${mediaQueries['large-up']} {
    height: 120px;
  }

  & .fresnel-lessThan-large {
    width: 100%;
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: -32px;
  right: 8px;
  cursor: pointer;
  height: 18px;
  width: 18px;
  padding: 4px;
  border-radius: 4px;
  background: var(--medium1-black);
`

const StyledCloseIcon = styled(Icon)`
  height: 24px;
  width: 24px;
  border: 1px solid var(--medium1-black);
  border-radius: 4px;
  padding: 4px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4%;
`

export { NonIndexPageHeader, StyledIcon, Wrapper, StyledCloseIcon }
