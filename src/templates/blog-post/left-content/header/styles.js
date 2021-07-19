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
  bottom: -32px;
  right: 8px;
  cursor: pointer;
  height: 18px;
  width: 18px;
  padding: 4px;
  border-radius: 4px;
  background: var(--medium1-black);
`

export { NonIndexPageHeader, StyledIcon }
