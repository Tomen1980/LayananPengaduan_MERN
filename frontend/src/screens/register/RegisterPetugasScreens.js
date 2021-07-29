import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {Form,Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import {registerAdmin} from '../../actions/petugasActions'
const LoginMasyarakatScreens = ({history}) => {

    const [name,setName] = useState('')
    const [tlpn,setTlpn] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)

    const dispatch= useDispatch()

    const adminRegister = useSelector(state => state.adminRegister)
    const {loading,error,adminInfo} = adminRegister

    useEffect(()=>{
        if(adminInfo){
            history.push('/petugas/login')
        }
    },[history,adminInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        }else{
            dispatch(registerAdmin(name,tlpn,username,password))
        }
    }

    return (
        <FormContainer>
                 <h2 style={{textAlign:'center'}}>Daftar</h2>
                {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form style={{marginTop:'40px'}} onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                         type="text"
                         value={name} 
                        placeholder="Masukan Name"
                        onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="tlpn">
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={tlpn}
                        placeholder="Masukan nomor telepon"
                        onChange={(e)=>setTlpn(e.target.value)} />
                    </Form.Group>
                    
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e)=>setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        value={password}
                        placeholder="Password" 
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password"
                        value={confirmPassword}
                         placeholder="Confirm Password"
                        onChange={(e)=>setConfirmPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Row className='py-3'>
                          <Col>
                        Telah Memiliki akun? {' '} <Link to='/petugas/login'>Kembali</Link>
                        </Col>
                  </Row>

           </Form>
        </FormContainer>
    )
}

export default LoginMasyarakatScreens
