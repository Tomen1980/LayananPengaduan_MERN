import React,{useEffect} from 'react'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {listUserTanggapan,deleteTanggapan} from '../../actions/tanggapanActions'

const DitanggapiScreens = ({match,history}) => {
    const pengaduanId = match.params.id
    const dispatch = useDispatch()

    const tanggapanUserList = useSelector(state => state.tanggapanUserList)
    const {loading,error,tanggapans} = tanggapanUserList

    const userLogin = useSelector(state => state.userLogin)
    const{userInfo} = userLogin

    useEffect(()=>{
        if(userInfo){
            dispatch(listUserTanggapan(pengaduanId))
        }else{
            history.push('/masyarakat/login')
        }

    },[dispatch,history,userInfo,pengaduanId])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deleteTanggapan(id))   
       history.push('/masyarakat/history')
        }
    }

return (
    <>
    <h1>DATA TANGGAPAN </h1>
    {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
    : (
        <Table striped border hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ISI LAPORAN</th>
                    <th>STATUS</th>
                    <th>TANGGAPAN</th>
                    <th>PETUGAS</th>
                    <th>AKSI</th>

                </tr>
            </thead>
            <tbody>
                {tanggapans.map(tanggap => (
                    <tr key={tanggap._id}>
                        <td>{tanggap._id}</td>  
                        <td>{tanggap.pengaduan&&tanggap.pengaduan.isi_laporan} </td>                             
                        <td>{tanggap.pengaduan&&tanggap.pengaduan.status}</td>
                        <td>{tanggap.tanggapan}</td>
                        <td>{tanggap.petugas&&tanggap.petugas.name}</td>
                        <td>
                            {tanggap.pengaduan.status === "Selesai" ? (
                                <Button variant='danger' className='btn-sm' onClick={()=> 
                                    deleteHandler(tanggap._id)}>
                                   DELETE
                                </Button>
                            ):<td>Dapat di hapus setelah status selesai</td>}
                            </td>   
                    </tr>
                ))}
            </tbody>
        </Table>
    )} 
 </>
)
}

export default DitanggapiScreens
