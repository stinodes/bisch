import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Flex, H1, H3, Layout, themeColor, themeSpace } from 'stinodes-ui'

const Nav = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  align-items: center;
  padding: ${themeSpace(4)}px;
  background: ${themeColor('sufraces.5')};
  border-top: ${themeColor('primary')} 4px solid;
  border-bottom: ${themeColor('surfaces.0')} 1px solid;
`

const Title = styled(H1)`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  span {
    font-weight: 700;
    font-size: 24px;
  }
`
const SubTitle = styled(H3)`
  line-height: 1;
  opacity: 0.7;
`

export const NavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex flex={1} bg="surfaces.4" pt={100}>
      <Nav>
        <Layout direction="row" alignItems="flex-end" spacing={3}>
          <Title>
            BiS<span>ch</span>
          </Title>
          <Flex />
          <SubTitle>WotLK</SubTitle>
          <SubTitle>Phase 1</SubTitle>
        </Layout>
      </Nav>
      {children}
    </Flex>
  )
}
