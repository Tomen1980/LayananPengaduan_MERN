import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Card,ListGroup,Form,Button} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import FormContainer from '../../components/FormContainer'
import {getAdminDetails,updateAdminLevel} from '../../actions/petugasActions'
const DetailsPetugasScreens = ({match,history}) => {
    const idPetugas = match.params.id

    const [level,setLevel] = useState('')

    const dispatch = useDispatch()

    const adminDetails = useSelector((state) => state.adminDetails)
    const {loading,error,admins} = adminDetails

    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    useEffect(()=>{
        if(adminInfo){
            dispatch(getAdminDetails(idPetugas))
        }else{
            history.push('/petugas/login')
        }
    },[adminInfo,history,dispatch,idPetugas])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(updateAdminLevel({
            id:idPetugas,
            level,
        }))
        history.push('/petugas/data')
    }

    return (
        <FormContainer>
        {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Card style={{ width: '20rem',marginTop:'50px', marginRight:'50px' }}>
          <ListGroup variant="flush">
          <ListGroup.Item>ID : <b>{admins._id}</b></ListGroup.Item>
          <ListGroup.Item>NAME : <b>{admins.name}</b></ListGroup.Item>
          <ListGroup.Item>USERNAME : <b>{admins.username}</b></ListGroup.Item>
          <ListGroup.Item>TELEPON : <b>{admins.tlpn}</b></ListGroup.Item>
          
          <ListGroup.Item>LEVEL : <b>{admins.level}</b>
          <Form onSubmit={submitHandler} >

                <Form.Check 
                        type='radio' 
                        label='Jadikan Petugas' 
                        id='level'
                        name='level'
                        value='Petugas'
                        onChange={(e=> setLevel(e.target.value))}
                        >
                </Form.Check>

                <Form.Check 
                        type='radio' 
                        label='Jadikan Admin' 
                        id='level'
                        name='level'
                        value='Admin'
                        onChange={(e=> setLevel(e.target.value))}
                        >
                </Form.Check>
                        <Button type='submit' variant="primary">Kirim Status</Button>
                </Form>

</ListGroup.Item>

          <ListGroup.Item>TGL PEMBUATAN : <b>{admins.createdAt}</b></ListGroup.Item>
          </ListGroup>
      </Card>
  </FormContainer>
    )
}

export default DetailsPetugasScreens
