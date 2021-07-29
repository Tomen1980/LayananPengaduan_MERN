import React,{useEffect,useState} from 'react'
import {Card,Button,Form} from 'react-bootstrap'
import FormContainer from '../../components/FormContainer'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {getPengaduanDetailsAdmin,statusTanggapan,addTanggapan} from '../../actions/tanggapanActions'


const MenanggapiScreens = ({match,history}) => {
    const pengaduanId = match.params.id

    const [status,setStatus] = useState('')
    const [tanggapan,setTanggapan] = useState('')

    const dispatch= useDispatch()
    const pengaduanDetailsAdmin = useSelector((state) => state.pengaduanDetailsAdmin)
    const {loading,error,pengaduans} = pengaduanDetailsAdmin

    const adminLogin = useSelector((state) => state.adminLogin)
    const {adminInfo} = adminLogin

    useEffect(()=>{
        if(adminInfo){
            dispatch(getPengaduanDetailsAdmin(pengaduanId))
        }else{
            history.push('/petugas/login')
        }
    },[adminInfo,dispatch,history,pengaduanId])

    const updateHandler = (e) =>{
        e.preventDefault()
        dispatch(statusTanggapan({
            _id:pengaduanId,
            status
        }))
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(addTanggapan({
            _id:pengaduanId,
            tanggapan,
            pengaduan:pengaduanId,
        }))
        history.push('/petugas/menanggapi')
    }

    return (
        <FormContainer>
       
       {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
         <Card style={{ width: '35rem'}}>
            <Card.Img variant="top" src={pengaduans.image}/>
            <Card.Body>
                <Card.Title>{pengaduans.status}</Card.Title>
                <Card.Text>
                {pengaduans.isi_laporan}
                </Card.Text>

                <Form onSubmit={updateHandler}>

                        <Form.Check 
                                type='radio' 
                                label='Dalam Proses' 
                                id='status'
                                name='status'
                                value='Proses'
                                onChange={(e=> setStatus(e.target.value))}>
                        </Form.Check>

                        <Form.Check 
                                type='radio' 
                                label='Selesai' 
                                id='status'
                                name='status'
                                value='Selesai'
                                onChange={(e=> setStatus(e.target.value))}>
                                </Form.Check>
                                <Button type='submit' variant="primary">Kirim Status</Button>
                        </Form>
            </Card.Body>
            </Card>   
        <br></br>
        
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="tanggapan">
                    <Form.Label>Beri Tanggapan</Form.Label>
                    <Form.Control
                     as="textarea" 
                     rows={10}
                     value={tanggapan}
                     onChange={(e=> setTanggapan(e.target.value))}
                     ></Form.Control>
                </Form.Group>
                <Button type='submit' variant="primary">Kirim</Button>
            </Form>

        </FormContainer>
    )
}

export default MenanggapiScreens
