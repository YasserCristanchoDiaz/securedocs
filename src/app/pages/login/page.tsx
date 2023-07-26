'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import { useState } from "react"
import Container from '@/app/components/container';
import Link from 'next/link';

export default function Login() {

    return (
        <Container title='Inicio de sesion'>
            <div>
                <div className="grid justify-content-center">
                    <div className='col-3'>
                        <label className="lbl" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>Usuario:</label>
                    </div>
                    <div className='col-6'>
                        <InputText></InputText>
                    </div>
                </div>
                <div className="grid justify-content-center mt-2">
                    <div className='col-3'>
                        <label className="lbl" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>Contraseña:</label>
                    </div>
                    <div className='col-6'>
                        <Password></Password>
                    </div>
                </div>
                <div className='col-6'>
                    <Link href="http://" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '12px', color: '#FFFFFF' }}>Olvide mi contraseña?</Link>
                </div>
                <div className='text-center'>
                    <Button label='Entrar'></Button>
                </div>
            </div>
        </Container>
    )
}