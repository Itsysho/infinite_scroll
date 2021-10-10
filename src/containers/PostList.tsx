import axios from 'axios'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { InfiniteScroll } from '../components/InfiniteScroll'
import Services, { DEFAULT_POSTS_PARAMS } from '../services/services'
import { objToQueryStr } from '../utils/function'

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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [lastId, setLastId] = useState<number | undefined>(undefined)
  const [postList, setPostList] = useState<any[]>([])
  const handleGetPostList = useCallback(() => {
    axios
      .get(
        Services.Post +
          objToQueryStr({
            ...DEFAULT_POSTS_PARAMS,
            before: lastId
          })
      )
      .then((response) => {
        const list: any[] = response.data
        setLastId(list[list.length - 1].id)
        setPostList(list)
        setIsLoading(false)
        document.documentElement.scrollTop = 0
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }, [lastId])

  return (
    <Paper>
      <InfiniteScroll onBottom={handleGetPostList} isLoading={isLoading}>
        {postList.map((item) => (
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
