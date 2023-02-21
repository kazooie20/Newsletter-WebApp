import React, {useRef, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {addToNewsletter} from '../../store/thunks/thunks'
import {displayToast} from './Tools';
import {clearNewsletter} from '../../store/reducers/users';

function Newsletter() {
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        
        //Go to JSON Server and store it 
        dispatch(addToNewsletter({email : value}))
        .unwrap()
        .then(
            (response) => {
                if (response.newsletter === 'added') {
                    displayToast('SUCCESS', 'Thank you for subscribing!');
                    textInput.current.value = '';
                }
                else if (response.newsletter === 'failed') {
                    displayToast('FAIL', 'Error, please try again!');
                    textInput.current.value = '';
                }
                dispatch(clearNewsletter());
            } 
        )

    }
    

  return (
    <div className='newsletter_container'>
        <h1>Join our Newsletter!</h1>
        <div className='form'>
            <Form className='mt-4' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type='text' placeholder='EXAMPLE: youremail@gmail.com' name='email' ref={textInput}></Form.Control>
                </Form.Group>
                <Button className='mt-2' variant='primary' type='submit'>Add me to the list</Button>
                

            </Form>
        </div>
    </div>
  )
}

export default Newsletter