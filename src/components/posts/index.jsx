import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostByID } from '../../store/thunks/thunks'
import { Button, Spinner } from 'react-bootstrap';
import {clearPostById} from '../../store/reducers/news';
import Newsletter from '../utility/Newsletter';

function PostComponent() {
  const param = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.news);
  // console.log(param.id);
  useEffect(() => {
    dispatch(fetchPostByID(param.id))

  }, [])
  useEffect(() => {
    return () => {
      dispatch(clearPostById())
    }

  }, [])
  
  

  const displayIndividualPost = () => {
    return (
      <div className='article_container'>
        <h1>{posts.article.title}</h1>
        <div className='image' style={{ background: `url(${posts.article.imagexl})`}}></div>
        <div className='author'>
          Created by: <span>{posts.article.author} </span>
        </div>
        <div className='mt-3 content'>
          <div dangerouslySetInnerHTML={{
            __html : posts.article.content
          }}>

          </div>
          

        </div>
      </div>
    )
  }

  const displaySpinner = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <>
      {posts.article ? displayIndividualPost() : null}
      {posts.loading ? displaySpinner() : null}
      <Newsletter />
    </>
  )
}

export default PostComponent