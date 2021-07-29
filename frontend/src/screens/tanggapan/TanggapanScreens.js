import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {LinkContainer} from 'react-router-bootstrap'
import {listPengaduan,deletePengaduanAdmin} from '../../actions/tanggapanActions'

const TanggapanScreens = ({history}) => {
    const dispatch = useDispatch()

    const pengaduanList = useSelector(state => state.pengaduanList)
    const{loading,error,tanggapans} = pengaduanList
    
    const adminLogin = useSelector(state => state.adminLogin)
    const{adminInfo} = adminLogin

    const pengaduanDeleteAdmin = useSelector(state => state.pengaduanDeleteAdmin)
    const{success:successDeleteAdmin} = pengaduanDeleteAdmin

    useEffect(()=>{
        if(adminInfo){
            dispatch(listPengaduan())
        }else{
            history.push('/petugas/login')
        }
    },[dispatch,history,adminInfo])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deletePengaduanAdmin(id))   
        }
    }

    return (
        <>
        <h1>LAPORAN</h1>
        <Link to='/petugas/dashboard'>Kembali</Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
            <Table striped border hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PELAPOR</th>
                        <th>STATUS</th>
                        <th>ISI LAPORAN</th>
                        <th>AKSI</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tanggapans.map(pengadu => (
                        <tr key={pengadu._id}>
                            <td>{pengadu._id}</td>                  
                            <td>{pengadu.masyarakat && pengadu.masyarakat.name}</td>                 
                            <td>{pengadu.status}</td>                 
                            <td>{pengadu.isi_laporan}</td>
                            <td>
                                    <LinkContainer to={`/petugas/tanggapi/${pengadu._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                        TANGGAPI
                                        </Button>    
                                    </LinkContainer>   
                                    {pengadu.status === 'Selesai' ? (
                                        <Button variant='danger' className='btn-sm' onClick={()=> 
                                            deleteHandler(pengadu._id)}>
                                           DELETE
                                        </Button>
                                    ):(<p>Perlu Tanggapan</p>)}
                                    
                                </td>   
                        </tr>
                    ))}
                </tbody>
            </Table>
        )} 
     </>
    )
}

export default TanggapanScreens
