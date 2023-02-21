import React from 'react'
import {Container} from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function MainLayout(props) {
  return (
    <Container className='mt-5 mb-5'>
        {props.children}
        <ToastContainer />
    </Container>
  )
}

export default MainLayout