import {
    Container,
    MenuItem,
    Following,
    FollowingHeader,
    InfoContainer,
    Links,
  } from './styles';
  import User from '../User';
  
  function Sidebar() {
    return (
      <Container>
        <MenuItem active>
          <img src='/images/homeIcon.svg'></img>
          <span>Para vos</span>
        </MenuItem>
        <MenuItem>
          <img src='/images/peopleIcon.svg'></img>
          <span>Siguindo</span>
        </MenuItem>
        <Following>
          <FollowingHeader>Cuentas principales</FollowingHeader>
          <User
            user={{
              name: 'Will Smith',
              username: 'willsmith',
              avatar:
                'https://p16-amd-va.tiktokcdn.com/img/musically-maliva-obj/1646315618666501~c5_100x100.jpeg',
            }}
          ></User>
        </Following>
        <InfoContainer>
          <Links margin>
            <a>Inicio</a>
            <a>Sobre</a>
            <a>Sala de prensa</a>
            <a>Carrera</a>
            <a>ByteDance</a>
          </Links>
          <Links>
            <a>Ayuda</a>
            <a>Seguridad</a>
          </Links>
          <Links>
            <a>Directrices de la comunidad</a>
            <a>Terminos</a>
          </Links>
          <Links margin>
            <a>Privacidad</a>
          </Links>
          <Links margin>
            <a>© 2022 TikTok</a>
            <a>© Johana Acosta</a>
          </Links>
        </InfoContainer>
      </Container>
    );
  }
  
  export default Sidebar;