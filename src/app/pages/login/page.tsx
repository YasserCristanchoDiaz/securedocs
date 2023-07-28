'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import { useState } from "react"
import Container from '@/app/components/container';
import Link from 'next/link';
import homeImage from '../../../../public/homeImage.svg'; 

export default function Login() {

    return (
        <Container title='Login'>
            <div>
                <div className="grid justify-content-center">
                    <div className='col-2'>
                        <label className="labels" >Usuario:</label>
                    </div>
                    <div className='col-6'>
                        <InputText></InputText>
                    </div>
                </div>
                <div className="grid justify-content-center mt-2">
                    <div className='col-2'>
                        <label className="labels">Contraseña:</label>
                    </div>
                    <div className='col-6'>
                        <Password></Password>
                    </div>
                </div>
                <div className='col-6'>
                    <Link href="http://" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', color: '#FFFFFF' }}>Olvide mi contraseña?</Link>
                </div>
                <div className='text-center'>
                    <Button label='Entrar'></Button>
                </div>
            </div>
        </Container>
    )
}