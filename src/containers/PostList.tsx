import styled from 'styled-components'
import { mockPostList } from '../services/mockData'

const Paper = styled.div`
  background-color: ${(props) => props.theme.color.white};
  width: calc(100vh - 68px);
  min-height: 100vh;
  margin: auto;
`

const Post = styled.article`
  min-height: 40px;
  margin: auto;
  border-bottom: ${(props) => props.theme.border};
  padding: ${(props) => props.theme.space.padding};
`

const Title = styled.div`
  font: ${(props) => props.theme.typography.subtitle};
`

export default function PostList() {
  return (
    <Paper>
      {mockPostList.map((item) => (
        <Post>
          <Title>{item.title}</Title>
          <br />
          {item.excerpt}
        </Post>
      ))}
    </Paper>
  )
}
