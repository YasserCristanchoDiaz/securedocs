'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

import { useState } from "react"
import Container from '@/app/components/container';

export default function recoverPassword() {
    const [npw, setNpw] = useState('');
    const [cpw, setCpw] = useState('');
    const [code, setCode] = useState('')

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

    const handleSubmit = () => {

    }

    return (
        <Container title='Contraseña' showButtons={false}>
            <div>
                <div className="grid justify-content-center">
                    <div className='col-2'>
                        <label className="labels" >Contraseña:</label>
                    </div>
                    <div className='col-6'>
                        <div className="card flex justify-content-center">
                            <Password value={npw} onChange={(e) => setNpw(e.target.value)} header={header} footer={footer} />
                        </div>
                    </div>
                </div>
                <div className="grid justify-content-center mt-1">
                    <div className='col-2'>
                        <label className="labels" >Confirmar Contraseña:</label>
                    </div>
                    <div className='col-6'>
                        <Password value={cpw} onChange={(e) => setCpw(e.target.value)} header={header} footer={footer} ></Password>
                    </div>
                </div>
                <div className="grid justify-content-center mt-1">
                    <div className='col-2'>
                    <label className="labels">Codigo Verificacion:</label>
                    </div>
                    <div className='col-4' >
                        <span className="col-6 p-float-label">
                            <InputText id="username" value={code} onChange={(e) => setCode(e.target.value)} ></InputText>
                            <label htmlFor="code">Código</label>
                        </span>
                    </div>
                </div>
                <div className='text-center my-1'>
                <Button label='Aceptar'></Button>
                </div>
            </div>
        </Container>
    )
}