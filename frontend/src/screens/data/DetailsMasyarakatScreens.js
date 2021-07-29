import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Card,ListGroup} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import FormContainer from '../../components/FormContainer'
import {getMasyarakatDetailsAdmin} from '../../actions/masyarakatActions'
const DetailsMasyarakatScreens = ({match,history}) => {
    const idMasya = match.params.id
    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const {loading,error,users} = userDetails

    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    useEffect(()=>{
        if(adminInfo){
            dispatch(getMasyarakatDetailsAdmin(idMasya))
        }else{
            history.push('/petugas/login')
        }
    },[adminInfo,history,idMasya,dispatch])

    return (
        <FormContainer>
              {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Card style={{ width: '20rem',marginTop:'50px', marginRight:'50px' }}>
                <ListGroup variant="flush">
                <ListGroup.Item>ID : <b>{users._id}</b></ListGroup.Item>
                <ListGroup.Item>NIK : <b>{users.nik}</b></ListGroup.Item>
                <ListGroup.Item>NAME : <b>{users.name}</b></ListGroup.Item>
                <ListGroup.Item>USERNAME : <b>{users.username}</b></ListGroup.Item>
                <ListGroup.Item>TELEPON : <b>{users.tlpn}</b></ListGroup.Item>
                <ListGroup.Item>TGL PEMBUATAN : <b>{users.createdAt}</b></ListGroup.Item>
                </ListGroup>
            </Card>
        </FormContainer>
       
    )
}

export default DetailsMasyarakatScreens
