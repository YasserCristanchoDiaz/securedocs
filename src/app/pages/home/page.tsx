'use client'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { useState } from "react"
import Container from '@/app/components/container';

export default function Home() {
    const [message, setMessage] = useState<string>('Hola kaka')

    const clickBtn = () => {
        setMessage('clickeando... pin')
    }
    return (
        <Container>
            <h1>{message}</h1>
            <InputText value={message} onChange={(e)=>setMessage(e.target.value)}></InputText>
            <Button label="Espichame" onClick={clickBtn}></Button>
        </Container>
    )
} 