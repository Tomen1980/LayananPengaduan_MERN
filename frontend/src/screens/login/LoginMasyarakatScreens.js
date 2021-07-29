import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import FormContainer from '../../components/FormContainer'
import {login} from '../../actions/masyarakatActions'
const LoginMasyarakatScreens = ({history,location}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading,error,userInfo} = userLogin


    useEffect(()=>{
        if(userInfo){
           history.push('/masyarakat/dashboard')
            console.log("Login Success")
        }else{
            history.push('/masyarakat/login')
        }
    },[history,userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username,password))
    }
    return (
        <FormContainer>
            <h1>Masuk masyarakat</h1>
             {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
                <Form style={{marginTop:'40px'}} onSubmit={submitHandler}>
                
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text"
                         placeholder="Enter Username"
                         value={username}
                         onChange={(e)=>setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                         onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    <Row className='py-3'>
                        <Col>
                        Daftar Akun Baru? {' '} <Link to='/masyarakat/register'>Register</Link>
                        </Col>
                  </Row>

           </Form>
        </FormContainer>
    )
}

export default LoginMasyarakatScreens
