import React from 'react'
import {useHistory} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/masyarakatActions'
import {logoutAdmin} from '../actions/petugasActions'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {

   const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin

   const history = useHistory()

   const logoutHandler = () =>{
      dispatch(logout())
      history.push('/')
   }
   const logoutAdminHandler = () =>{
      dispatch(logoutAdmin())
      history.push('/')
   }

    return (
     <header>
        <Navbar bg="dark" variant="dark"> 
           <LinkContainer to='/'>
        <Navbar.Brand href="#home" >Layanan Pengaduan</Navbar.Brand>
           </LinkContainer>
         {userInfo ? (
            <Nav className="ml-auto">
               <LinkContainer to='/masyarakat/dashboard'>
        <Navbar.Brand  >Dashboard</Navbar.Brand>
           </LinkContainer>
            <Nav.Link onClick={logoutHandler}>logout</Nav.Link>
          </Nav>
         ):(
            <Nav className="ml-auto">
          {adminInfo ? (
             <>
             <LinkContainer to='/petugas/dashboard'>
        <Navbar.Brand  >Dashboard</Navbar.Brand>
           </LinkContainer>
            <Nav.Link onClick={logoutAdminHandler}>Logout</Nav.Link>
            </>
          ):""}
          
        </Nav>
         )}
      </Navbar> 
        </header>
    )
}

export default Header
