import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Card,Form,Button} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import FormContainer from '../../components/FormContainer'
import {getMasyarakatDetails,updateMasyarakatProfile} from '../../actions/masyarakatActions'
import {USER_UPDATE_PROFILE_RESET} from '../../constants/masyarakatConstants'

function ProfileMasyarakatScreens({history}) {

const [nik,setNik] = useState('')
const [name,setName] = useState('')
const [username,setUsername] = useState('')
const [tlpn,setTlpn] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')
const [message,setMessage] = useState(null)

const dispatch= useDispatch()

const userDetails = useSelector((state) => state.userDetails)
const {loading,error,users} = userDetails

const userLogin = useSelector((state) => state.userLogin)
const {userInfo} = userLogin

const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
const {success} = userUpdateProfile

useEffect(()=>{
    if (!userInfo) {
        history.push('/masyarakat/login');
        } else {
        if (!users.name || success) {
            dispatch({type:USER_UPDATE_PROFILE_RESET})
            dispatch(getMasyarakatDetails(userInfo._id));
        } else {
        setNik(users.nik);
            setName(users.name);
            setUsername(users.username);
            setTlpn(users.tlpn);
        }
        }
    }, [dispatch, history, userInfo, users,success]);

const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }else{
        dispatch(updateMasyarakatProfile({
            id:users._id,
            nik,
            name,
            tlpn,
            username,
            password
        }))
        
    }
   
}

return (
    <Card>
        <h2 style={{textAlign:'center'}}>Profile</h2>
        {success ? (<Message variant='danger'>SILAHKAN LOGOUT DAN LOGIN ULANG UNTUK MELIHAT DATA ANDA</Message>) : ''}
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <FormContainer>
        <Form style={{marginTop:'40px'}} onSubmit={submitHandler}>
            <Form.Group controlId="nik">
                    <Form.Label>Nik</Form.Label>
                    <Form.Control 
                    type="text" 
                    value={nik}
                    placeholder="Masukan Nik" 
                    onChange={(e)=>setNik(e.target.value)}/>
                </Form.Group>

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

export default ProfileMasyarakatScreens
