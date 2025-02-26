import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
    setFormOpen: (value: boolean) => void
}
function NavBar({setFormOpen}: Props) {
  return (
    <Menu inverted={true} fixed='top'>
        <Container>
            <MenuItem header>
                <img src="/logo.png" alt="logo" />
            </MenuItem>
            <MenuItem name='Events'>
            </MenuItem>
            <MenuItem>
                <Button 
                onClick={() => setFormOpen(true)}
                floated='right' 
                positive={true} 
                inverted={true} 
                content='Create event' />
            </MenuItem>
            <MenuItem position='right'>
                <Button basic inverted content='Login' />
                <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
            </MenuItem>
        </Container>
    </Menu>
  )
}
export default NavBar