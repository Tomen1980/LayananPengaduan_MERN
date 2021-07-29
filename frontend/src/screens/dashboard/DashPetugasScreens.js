import React,{useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const DashMasyarakatScreens = () => {

    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin
    const history = useHistory()
    useEffect(()=>{
        if(!adminInfo){
           history.push('/petugas/login')
            console.log("Logout Success")
        }
    },[history,adminInfo])

    return (
        <FormContainer>
            <Card>
                <Card.Body>
                {adminInfo ? (
                <Card.Title> Selamat Datang {adminInfo.name} di Pelayanan masyarakat</Card.Title>
            ) : ""}
                    <Card.Text>
                    Terimakasih Anda telah ingin membantu kami untuk melaporkan suatu kejadian :)
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem ><Link to='/petugas/profile'>Data Diri</Link></ListGroupItem>
                    <ListGroupItem ><Link to='/petugas/menanggapi'>Mulai Menanggapi</Link></ListGroupItem>
                    <ListGroupItem ><Link to='/masyarakat/data'>Data Masyarakat</Link></ListGroupItem>
                    {adminInfo ? (
                        <>
                  {adminInfo.level === 'Petugas' ?(
                    <>
                    <ListGroupItem ><Link to='/petugas/history'>History Tanggapan</Link></ListGroupItem>
                </>
                ):""}
                {adminInfo.level === 'Admin' ?(
                    <>
                    <ListGroupItem ><Link to='/petugas/data'>Data Petugas</Link></ListGroupItem>
                    <ListGroupItem ><Link to='/petugas/pdf'>Generator</Link></ListGroupItem>
                </>
                ):""}
                </>
            ) : ""}
                  
                </ListGroup>
                </Card>
        </FormContainer>
    )

}

export default DashMasyarakatScreens
