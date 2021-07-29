import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'

function HomeScreens() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    const adminLogin = useSelector(state => state.adminLogin)
    const {adminInfo} = adminLogin

    return (
        <div>
            <Card className="text-center" style={{marginTop:'40px'}}>
                {userInfo ? (
                    <Card.Header><h4>Kembali Ke Dashboard</h4></Card.Header>
                    ) : (
                    <Card.Header><h4>LOGIN PAGE</h4></Card.Header>
                )}
                {!adminInfo ? (
                    <>
                      <Card.Body>
                      <Card.Title>Masyarakat</Card.Title>
                  <Card.Text>
                  Klik Login sebagai masyarakat untuk melaporkan tindak pidana, kerusakan dan melaporkan suatu hal
                  </Card.Text>
                  <LinkContainer to='/masyarakat/login'>
                  <Button variant="primary">Adu Kan Sekarang</Button>
                  </LinkContainer>
              </Card.Body>
            <Card.Header></Card.Header>
            </>
                ) : " " }
          

            {!userInfo ? (
                <>
                <Card.Body>
                <Card.Title>Petugas & Admin</Card.Title>
                <Card.Text>
                Login sebagai petugas atau admin
                </Card.Text>
                <LinkContainer to='/petugas/login'>
                <Button variant="primary" >Masuk sekarang</Button>
                </LinkContainer>
            </Card.Body>

            <Card.Footer className="text-muted">Dengan melaporkan kejadian, 
            anda membantu kami dalam mengatasi masalah dan mengecek secara cepat dan berkala</Card.Footer>
            </>
            ): "" }

        </Card>
            
        </div>
    )
}

export default HomeScreens
