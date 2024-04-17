// firse Page/screen


import diceImage from "../assets/images/diceImage.jpeg"
import styled from "styled-components"
const StartGame = ({toggle}) => {
  return (
    <Container>
        <div >
        <img src={diceImage} alt="" />
        </div>

        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame ;

const Container = styled.div`
    max-width : 1180px ;

    display : flex ;
    align-items : center ;

    margin : 0 auto ;
    height : 100vh ;

    .content {
        margin : 0 auto ; /*  extra */
        h1{
            font-size : 96px ;
            white-space : nowrap ;
        }
    }

` ;

const Button = styled.button`

        min-width : 220px ;
        border : none ;
        padding: 10px 18px;
        color : white ;
        background:  black ;
        border-radius : 5px ;
        font-size : 16px ;
        border : 1px solid transparent ;
        transition : 0.4s  background ease-in ;
        cursor : pointer ;
        &:hover{
            
            background:  white ;
            border : 1px solid black ;
            color : black ;
            transition : 0.3s  background ease-in
    }
` ;