import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Card,Form,Button} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import FormContainer from '../../components/FormContainer'
import {getAdminDetails,updateAdminProfile} from '../../actions/petugasActions'
import {ADMIN_UPDATE_PROFILE_RESET} from '../../constants/petugasConstants'
const ProfileAdminScreens = ({history}) => {
const [name,setName] = useState('')
const [username,setUsername] = useState('')
const [tlpn,setTlpn] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')
const [message,setMessage] = useState(null)

const dispatch= useDispatch()

const adminDetails = useSelector((state) => state.adminDetails)
const {loading,error,admins} = adminDetails

const adminLogin = useSelector((state) => state.adminLogin)
const {adminInfo} = adminLogin

const adminUpdateProfile = useSelector((state) => state.adminUpdateProfile)
const {success} = adminUpdateProfile

useEffect(()=>{
    if(!adminInfo){
        history.push('/petugas/login')
    }else{
        if(!admins.name || success){
            dispatch({type:ADMIN_UPDATE_PROFILE_RESET})
            dispatch(getAdminDetails(adminInfo._id))
        }else{
            setName(admins.name);
            setTlpn(admins.tlpn);
            setUsername(admins.username);
        }
    }
},[dispatch,adminInfo,history,admins.name,admins.tlpn,admins.username,success])

const submitHandler = (e) =>{
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }else{
        dispatch(updateAdminProfile({
            id:admins._id,
            name,
            tlpn,
            username,
            password
        }))
        console.log('update berhasil')
    }
}
    return (
        <Card>
        <h2 style={{textAlign:'center'}}>Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <FormContainer>
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

        </Form>
        </FormContainer>
    </Card>
    )
}

export default ProfileAdminScreens