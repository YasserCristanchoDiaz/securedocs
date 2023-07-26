'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import { useState } from "react"
import Container from '@/app/components/container';

export default function recoverPassword() {

    return (
        <Container title='Contraseña'>
            <div>
                <div className="col">
                    <label className="lbl" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>Nueva Contraseña:</label>
                    <Password></Password>
                </div>
                <div className="col">
                    <label className="lbl" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>Confirmar Contraseña:</label>
                    <Password></Password>
                </div>
                <div className="col">
                    <label className="lbl" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>Codigo Verificacion:</label>
                    <InputText></InputText> 
                </div>
                <Button label='Aceptar'></Button>
            </div>
        </Container>
    )
}