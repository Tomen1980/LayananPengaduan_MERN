import React,{useEffect} from 'react'
import {Table,Button,Col,Image} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {LinkContainer} from 'react-router-bootstrap'
import {listUserPengaduan,deletePengaduan} from '../../actions/pengaduanActions'

const HistoryPengaduanScreens = ({history}) => {
    const dispatch = useDispatch()

    const pengaduanUserList = useSelector(state => state.pengaduanUserList)
    const{loading,error,pengaduans} = pengaduanUserList
    
    const userLogin = useSelector(state => state.userLogin)
    const{userInfo} = userLogin

    const pengaduanDelete = useSelector(state => state.pengaduanDelete)
    const{success:successDelete} = pengaduanDelete

    useEffect(()=>{
        if(userInfo){
            dispatch(listUserPengaduan())
        }else{
            history.push('/masyarakat/login')
        }
    },[dispatch,history,userInfo])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deletePengaduan(id))   
        }
    }


    return (
        <>
        <h1>REKAP</h1>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
            <Table striped border hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BUKTI</th>
                        <th>TGL</th>
                        <th>STATUS</th>
                        <th>ISI LAPORAN</th>
                        <th>LOKASI</th>
                        <th>AKSI</th>

                    </tr>
                </thead>
                <tbody>
                    {pengaduans.map(pengadu => (
                        <tr key={pengadu._id}>
                            <td>{pengadu._id}</td>  
                            <td> 
                                <Col md={3}>
                            <Image src={pengadu.image} alt="" fluid />
                                </Col>
                                </td>    
                            <td>{pengadu.createdAt}</td>
                            {pengadu.status === 'Proses' ? (
                                <td style={{color:'Orange'}}>{pengadu.status}</td>   
                            ):(
                                <>
                                {pengadu.status === 'Selesai' ? (
                                    <td style={{color:'Green'}}>{pengadu.status}</td>   
                                ):(
                                    <td>{pengadu.status}</td> 
                                )}
                                </>
                            )}
                            
                                                      
                            <td>{pengadu.isi_laporan}</td>
                            <td>{pengadu.lokasi}</td>
                            <td>
                                    <LinkContainer to={`/masyarakat/${pengadu._id}/tanggapan`}>
                                        <Button variant='light' className='btn-sm'>
                                        Lihat Tanggapan
                                        </Button>    
                                    </LinkContainer>   
                                    {pengadu.status === 'Selesai' || pengadu.status === 'Terkirim' ? (
                                        <Button variant='danger' className='btn-sm' onClick={()=> 
                                            deleteHandler(pengadu._id)}>
                                           DELETE
                                        </Button>
                                    ):(
                                        <p>Dapat di hapus setelah status selesai</p>
                                    )}
                                    
                                </td>   
                        </tr>
                    ))}
                </tbody>
            </Table>
        )} 
     </>
    )
}

export default HistoryPengaduanScreens