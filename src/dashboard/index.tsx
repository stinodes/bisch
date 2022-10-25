import styled from '@emotion/styled'
import { Row, Col, Card, themeColor, Flex, Layout, H3 } from 'stinodes-ui'
import { useClasses } from './ClassesContext'

const ClassCard = styled(Card)<{ forClass: string }>`
  border-top: 5px solid
    ${props => themeColor(`${props.forClass}.2`, props.theme)};
  background: ${themeColor('surfaces.3')};
  height: 200px;
  flex-direction: column;

  h3 {
    border-bottom: 1px ${themeColor('surfaces.0')} solid;
  }
`

export const Dashboard = () => {
  const classes = useClasses()
  return (
    <Flex flex={1} flexDirection="column" px={4}>
      <Row gutter={1}>
        {Object.keys(classes).map(className => (
          <Col width={1 / 4} mb={2} gutter={1}>
            <ClassCard forClass={className} border="surfaces.2" shadow>
              <Layout>
                <H3 px={2} py={1} color={`${className}.2`}>
                  {className}
                </H3>
              </Layout>
            </ClassCard>
          </Col>
        ))}
      </Row>
    </Flex>
  )
}
