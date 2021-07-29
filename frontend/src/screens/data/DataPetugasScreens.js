import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import ReactToPdf from 'react-to-pdf'
import {listAdmin,deleteAdmin} from '../../actions/petugasActions'

const DataPetugasScreens = ({history}) => {
    const dispatch = useDispatch()
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
    };

    const adminList = useSelector(state => state.adminList)
    const{loading,error,admins} = adminList
    
    const adminLogin = useSelector(state => state.adminLogin)
    const{adminInfo} = adminLogin

    const adminDelete = useSelector(state => state.adminDelete)
    const{success:successDelete} = adminDelete

    useEffect(()=>{
        if(adminInfo){
            dispatch(listAdmin())
        }else{
            history.push('/petugas/login')
        }
    },[dispatch,history,adminInfo])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deleteAdmin(id))   
        }
    }

    return (
        <>
           <h1>Petugas</h1>
           
           <Link to='/petugas/dashboard'>Kembali</Link>
           {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
           : (
               <>
            <ReactToPdf targetRef={ref} filename="Petugas.pdf" options={options} x={.5} y={.5} scale={0.8}>
            {({toPdf}) => (
                <button onClick={toPdf}>Generate pdf</button>
            )}
            </ReactToPdf>
            <div ref={ref}>

           
               <Table striped border hover responsive className='table-sm'>
                   <thead>
                       <tr>
                           <>ID</>
                           <th>NAME</th>
                           <th>USER</th>
                           <th>Telepon</th>
                           <th>AKSI</th>
                       </tr>
                   </thead>
                   <tbody>
                       {admins.map(admin => (
                           <tr key={admin._id}>
                               <td>{admin._id}</td>
                               <td>{admin.name}</td>
                               <td>{admin.username}</td>
                               <td>{admin.tlpn}</td>
                               <td>
                               <LinkContainer to={`/petugas/details/${admin._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                        DETAILS
                                        </Button>    
                                    </LinkContainer>   
                                    <Button 
                                    variant='danger' 
                                    className='btn-sm' 
                                    onClick={()=> 
                                        deleteHandler(admin._id)}
                                       >DELETE
                                    </Button>
                                </td>   
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

export default DataPetugasScreens
