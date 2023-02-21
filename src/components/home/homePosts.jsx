import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/thunks/thunks';
import Masonry from 'react-masonry-css';
// import Moment from 'react-moment';
import { Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function homePosts() {
    const dispatch = useDispatch();
    const homePosts = useSelector((state) => state.news);

    useEffect(() => {
        if (homePosts.articles.items.length <= 0) {
            dispatch(fetchPosts({ page: 1, order: 'desc', limit: 6 }))
        }

    }, [])

    const displayHomePosts = () => homePosts.articles.items.map((item) => {
        return (
            <div key={item.id}>
                <img src={`${item.image}?${item.id}`} alt="pic" style={{ width: '100%', height: '200px' }} />
                <div className='author'>
                    <span>{item.author} -</span>
                    <span>{item.createdAt}</span>

                </div>
                <div className='content'>
                    <div className='title'>{item.title}</div>
                    <div className='excerpt'>{item.excerpt}</div>
                    <LinkContainer to={`/article/${item.id}`} className='mt-3'>
                        <Button variant='light'>Read more</Button>
                    </LinkContainer>
                </div>
            </div>
        )
    })

    const displaySpinner = () => {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
        )
    }

    const loadMorePosts = () => {
        const page = homePosts.articles.page + 1;
        dispatch(fetchPosts({ page: page, order: 'desc', limit: 6 }))

    }

    return (
        <>
            <Masonry
                breakpointCols={{ default: 3, 800: 2, 400: 1 }}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'>

                {homePosts.articles ? displayHomePosts() : null}

            </Masonry>
            {homePosts.loading ? displaySpinner() : null}
            {!homePosts.articles.end && !homePosts.loading ? <Button variant='outline-dark' onClick={() => loadMorePosts()}>Load more posts</Button> : null}

        </>
    )
}

export default homePosts