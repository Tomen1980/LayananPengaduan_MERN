import React,{useEffect} from 'react'
import FormContainer from '../../components/FormContainer'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'

const DashMasyarakatScreens = () => {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const history = useHistory()
    
    useEffect(()=>{
        if(!userInfo){
            history.push('/masyarakat/login')
        }
    },[history,userInfo])

    return (
        <FormContainer>
            <Card>
                <Card.Body>
            {userInfo ? (
                <Card.Title> Selamat Datang {userInfo.name} di Pelayanan masyarakat</Card.Title>
            ) : ""}
                    <Card.Text>
                    Terimakasih Anda telah ingin membantu kami untuk melaporkan suatu kejadian :)
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem ><Link to='/masyarakat/profile'>Data Diri</Link></ListGroupItem>
                    <ListGroupItem ><Link to='/masyarakat/pengaduan'>Mulai Melapor</Link></ListGroupItem>
                    <ListGroupItem ><Link to='/masyarakat/history'>History Laporan</Link></ListGroupItem>
                </ListGroup>
                </Card>
        </FormContainer>
    )
    
}

export default DashMasyarakatScreens
