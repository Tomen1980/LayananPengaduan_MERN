import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {listTanggapan,deleteTanggapanAdmin} from '../../actions/tanggapanActions'
import ReactToPdf from 'react-to-pdf'

export default function PdfScreens({history}){
    const dispatch = useDispatch()
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
    };


    const tanggapanList = useSelector(state => state.tanggapanList)
    const{loading,error,tanggapans} = tanggapanList
    
    const adminLogin = useSelector(state => state.adminLogin)
    const{adminInfo} = adminLogin

    useEffect(()=>{
        if(adminInfo){
            dispatch(listTanggapan())
        }else{
            history.push('/petugas/login')
        }
    },[dispatch,history,adminInfo])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deleteTanggapanAdmin(id))   
        }
    }

    return (
        <>
        <h1>Tanggapan</h1>
        <Link to='/petugas/dashboard'>Kembali</Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
            <>
         <ReactToPdf targetRef={ref} filename="tanggapan.pdf" options={options} x={.5} y={.5} scale={0.8}>
         {({toPdf}) => (
             <button onClick={toPdf}>Generate pdf</button>
         )}
         </ReactToPdf>
             <div ref={ref}>
            <Table striped border hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TANGGAPAN</th>
                        <th>PENGADUAN</th>
                        <th>USERID</th>
                        <th>BUKTI</th>
                        <th>STATUS</th>
                        <th>PETUGAS</th>
                        <th>TGL</th>
                        <th>AKSI</th>
                    </tr>
                </thead>
                <tbody>
                    {tanggapans.map(tanggapan => (
                        <tr key={tanggapan._id}>
                            <td>{tanggapan._id}</td>
                            <td>{tanggapan.tanggapan}</td>
                            <td>{tanggapan.pengaduan&&tanggapan.pengaduan.isi_laporan}</td>
                            <td>{tanggapan.pengaduan&&tanggapan.pengaduan.masyarakat}
                            <LinkContainer to={`/masyarakat/details/${tanggapan.pengaduan&&tanggapan.pengaduan.masyarakat}`}>
                                        <Button variant='light' className='btn-sm'>
                                        DETAILS
                                        </Button>    
                                    </LinkContainer></td>
                            <td><img src={tanggapan.pengaduan&&tanggapan.pengaduan.image} className="img"
                                        height="150" width="150" alt="cant open"></img></td>
                            <td>{tanggapan.pengaduan&&tanggapan.pengaduan.status}</td>
                            <td>{tanggapan.petugas&&tanggapan.petugas.name}</td>
                            <td>{tanggapan.createdAt}</td> 
                            
                            {tanggapan.pengaduan === null ? (
                                <Button variant='danger' className='btn-sm' onClick={()=> 
                                    deleteHandler(tanggapan._id)}>
                                   DELETE
                                </Button> 
                            ): ''}
                             
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            </>
        )} 
     </>
    )
}
