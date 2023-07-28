'use client'

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Message } from 'primereact/message';
import { useState } from "react"
import Container from '@/app/components/container';

export default function recoverPassword() {
    const [npw, setNpw] = useState('');
    const [cpw, setCpw] = useState('');
    const [code, setCode] = useState('')
    const [errorMessage, setErrorMessage] = useState('');


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



    const isPasswordValid = (password: string) => {
        // Expresión regular para verificar si la contraseña cumple con los requisitos
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
        return passwordRegex.test(password);
      };

      const handleSubmit = () => {
        if (!isPasswordValid(npw) || !isPasswordValid(cpw)) {
          // Alguna de las contraseñas es débil o no cumple con los requisitos, muestra un mensaje de error
          setErrorMessage('Las contraseñas deben contener al menos una minúscula, una mayúscula, un número y tener una longitud mínima de 8 caracteres.');
        } else if (npw !== cpw) {
          // Las contraseñas no coinciden, muestra un mensaje de error
          setErrorMessage('Las contraseñas no coinciden. Por favor, verifica.');
        } else {
          // Las contraseñas coinciden y cumplen con los requisitos, puedes continuar con el proceso de cambio de contraseña aquí
          console.log('new password: ' + npw + '\ncpw: ' + cpw + '\ncode: ' + code);
          setErrorMessage(''); // Limpia el mensaje de error si ya no es necesario mostrarlo
        }
      };
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
                    <div className='col-6'>
                        <InputText id="username" value={code} onChange={(e) => setCode(e.target.value)} ></InputText>
                        <label htmlFor="code"></label>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <Button label='Aceptar' onClick={handleSubmit}></Button>
                </div>
                <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                {errorMessage && (<Message severity="error" text={errorMessage} />)}
                </div>
            </div>

        </Container>
    )
}