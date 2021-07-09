import styled from 'styled-components'

import Icon from '../../../../common/icon'

const NonIndexPageHeader = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 2rem 1.4rem; */
  border-bottom: 1px solid var(--border);
  background: black;
  height: 120px;
  align-items: center;
  position: relative;
`

const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: -14px;
  right: 0;
  cursor: pointer;
  height: 28px;
  width: 28px;
  transform: rotate(180deg);
`

export { NonIndexPageHeader, StyledIcon }
