import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import Loader from '../../components/Loader' 
import {createPengaduan} from '../../actions/pengaduanActions'
import FormContainer from '../../components/FormContainer'

const PengaduanScreens = ({history}) => {
    const [image,setImage] = useState('')
    const [isi_laporan,setIsi_Laporan] = useState('')
    const [lokasi,setLokasi] = useState('')
    const [uploading,setUploading] = useState(false)

    const dispatch= useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    

    useEffect(()=>{
        if(!userInfo){
            history.push('/masyarakat/login')
        }
    },[userInfo,history])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(createPengaduan({
            isi_laporan,
            image,
            lokasi
        }))
        history.push('/masyarakat/history')
    }

    const uploadFileHandler = async (e) =>{
        const file =e.target.files[0]
        const formData = new FormData()
        formData.append('image',file)
        setUploading(true)
        try{
            const config = {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
            const {data} = await axios.post('/api/upload',formData, config)
            setImage(data)
            setUploading(false)
        }catch(error){
            console.log(error)
            setUploading(false)
        }
    }

    return (
        <FormContainer>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="image">
                <Form.Control
                        type='text'
                        placeholder='Enter Image Url'
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    ></Form.Control>
                    <Form.File 
                    id="image-file" 
                    label="Kirim Foto" 
                    custom onChange={uploadFileHandler}/>
                    {uploading && <Loader />}
                    </Form.Group>

                <Form.Group controlId="isi_laporan">
                    <Form.Label>Laporan</Form.Label>
                    <Form.Control
                     as="textarea" 
                     rows={10}
                     value={isi_laporan}
                     onChange={(e)=>setIsi_Laporan(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="lokasi">
                        <Form.Label>Lokasi</Form.Label>
                        <Form.Control 
                        type="text"
                         placeholder="Enter Lokasi"
                         value={lokasi}
                         onChange={(e)=>setLokasi(e.target.value)} />
                    </Form.Group>

                <Button type='submit' variant='primary'>
                    Submit
                </Button>
        </Form>
        </FormContainer>
    )
}

export default PengaduanScreens
