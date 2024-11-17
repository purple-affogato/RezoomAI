import { useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const email = useRef('');
    const pw = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://172.31.19.12:3000/check_login")
                .then((response) => response.json())
                .then((result) => {
                    if (result["id"] !== "not logged in") {
                        navigate("/builder", { replace: true });
                    }
                })
                .catch((error) => console.log("error", error));
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate]);

    const login = (event) => {
        event.preventDefault(); 

        const formdata = new FormData();
        formdata.append('email', email.current.value);
        formdata.append('password', pw.current.value);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        fetch("http://172.31.28.252:3000/user_login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                navigate("/builder", { replace: true });
            })
            .catch((error) => console.log('error', error));
    };

    return (
        <Form onSubmit={login}>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' ref={email} />
                <Form.Text className='text-muted'>
                    We'll never share your email with anyone.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' ref={pw} />
            </Form.Group>

            <div style={{ marginTop: '20px' }}>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default SignIn;
