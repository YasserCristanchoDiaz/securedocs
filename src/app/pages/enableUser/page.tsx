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
                <div className="grid justify-content-center">
                    <div className='col-2'>
                        <label className="labels" >Contraseña:</label>
                    </div>
                    <div className='col-6'>
                        <Password></Password>
                    </div>
                </div>
                <div className="grid justify-content-center mt-2">
                    <div className='col-2'>
                    <label className="labels" >Confirmar Contraseña:</label>
                    </div>
                    <div className='col-6'>
                    <Password></Password>
                    </div>
                </div>
                <div className="grid justify-content-center mt-2">
                    <div className='col-2'>
                    <label className="labels">Codigo Verificacion:</label>
                    </div>
                    <div className='col-6' >
                    <InputText></InputText> 
                    </div>
                </div>
                <div className='text-center my-1'>
                <Button label='Aceptar'></Button>
                </div>
            </div>
        </Container>
    )
}