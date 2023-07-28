'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import { useState } from "react"
import Container from '@/app/components/container';

export default function recoverPassword() {
    const [value, setValue] = useState('');
    const header = <div className="font-bold mb-3">Digita una contraseña</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Sugerencias</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>Al menos una minúscula</li>
                <li>Al menos una mayúscula</li>
                <li>Al menos un número</li>
                <li>Minimo 8 carcateres</li>
            </ul>
        </>
    );
    return (
        <Container title='Contraseña'>
            <div>
                <div className="grid justify-content-center">
                    <div className='col-2'>
                        <label className="labels" >Contraseña:</label>
                    </div>
                    <div className='col-6'>
                    <div className="card flex justify-content-center">
                     <Password value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} />
        </div>
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