import styled from 'styled-components'
import { InfiniteScroll } from '../components/InfiniteScroll'
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
  const handleGetPostList = () => {
    console.log('handleGetPostList')
  }
  return (
    <Paper>
      <InfiniteScroll onBottom={handleGetPostList}>
        {mockPostList.map((item) => (
          <Post key={item.id}>
            <Title>{item.title}</Title>
            <br />
            {item.excerpt}
          </Post>
        ))}
      </InfiniteScroll>
    </Paper>
  )
}
