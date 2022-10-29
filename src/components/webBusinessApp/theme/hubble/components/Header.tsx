import React from 'react';
import {StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';
import { DiYii } from "react-icons/di";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <div>
                        <DiYii size={40}/>   
                        <h1> Huddle </h1>
                    </div>
                    {/* <Logo src='./images/logo.svg' alt=''/> */}
                    <Button> Try It Free </Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>Bulild The Comunity Your Fans Will Love</h1>

                        <p>
                            Hubble re-imagines the way we bulid communities. You have a voice,
                            but so does your audience. Create connections with your users as you enages in genuine discussion.
                        </p>

                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>

                    <Image src='https://img.freepik.com/free-vector/beautiful-landscape-scene-branch-cherry-blossoms-background-with-snowy-top-mountain-fuji-cloud-blue-sky-illustration-vector_1150-56592.jpg?size=626&ext=jpg&ga=GA1.2.550623710.1667022082' alt=''/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}