import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Table,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader' 
import {listUsers,deleteUser} from '../../actions/masyarakatActions'

import ReactToPdf from 'react-to-pdf'
const ref = React.createRef();
const options = {
    orientation: 'landscape',
};

const DataMasyarakatScreens = ({history}) => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const{loading,error,users} = userList
    
    const adminLogin = useSelector(state => state.adminLogin)
    const{adminInfo} = adminLogin

    const userDelete = useSelector(state => state.userDelete)
    const{success:successDelete} = userDelete

    useEffect(()=>{
        if(adminInfo){
            dispatch(listUsers())
        }else{
            history.push('/petugas/login')
        }
    },[dispatch,history,adminInfo])

    const deleteHandler = (id) =>{
        if(window.confirm('Are You Sure')){
            dispatch(deleteUser(id))   
        }
        if(successDelete){
            history.push('/masyarakat/data')
        }
    }

    return (
        <>
           <h1>Masyarakat</h1>
           <Link to='/petugas/dashboard'>Kembali</Link>
           {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
           : (
               <>
               {adminInfo.level === 'Admin' ? (
                   <ReactToPdf targetRef={ref} filename="Masyarakat.pdf" options={options} x={.5} y={.5} scale={0.8}>
                   {({toPdf}) => (
                       <button onClick={toPdf}>Generate pdf</button>
                   )}
                   </ReactToPdf>
               ):''}
            
                <div ref={ref}>
               <Table striped border hover responsive className='table-sm'>
                   <thead>
                       <tr>
                           <th>NIK</th>
                           <th>ID</th>
                           <th>NAME</th>
                           <th>USER</th>
                           <th>Telepon</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {users.map(user => (
                           <tr key={user._id}>
                               <td>{user.nik}</td>
                               <td>{user._id}</td>
                               <td>{user.name}</td>
                               <td>{user.username}</td>
                               <td>{user.tlpn}</td>
                               <td>
                               <LinkContainer to={`/masyarakat/details/${user._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                        DETAILS
                                        </Button>    
                                    </LinkContainer>   
                                    <Button variant='danger' className='btn-sm' onClick={()=> 
                                        deleteHandler(user._id)}>
                                       DELETE
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

export default DataMasyarakatScreens
