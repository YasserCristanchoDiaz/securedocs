'use client'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useState } from "react"
import Container from '@/app/components/container';
import { title } from 'process';

export default function Home() {
    const [message, setMessage] = useState<string>('¡Bienvenido a SecureDocs! En SecureDocs, nos enorgullece ofrecerte una solución segura y eficiente para gestionar tus documentos en línea. Nuestra plataforma ha sido diseñada pensando en la comodidad y la protección de tu información confidencial.')


    const splittedMessage = message.split('!'); 
    const firstPart = splittedMessage.slice(0, -1).join('!'); 
    const lastPart = splittedMessage.slice(-1).join('!'); 
    return (
        <Container>
            <p style={{fontSize: '22px'}}>{firstPart}!<br />{lastPart}</p>
            {/*
            <InputText value={message} onChange={(e)=>setMessage(e.target.value)}></InputText>
            <Button label="Espichame" onClick={clickBtn}></Button>*/}
        </Container>
    )
} 