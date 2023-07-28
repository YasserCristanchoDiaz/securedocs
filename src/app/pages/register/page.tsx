'use client'

import { useState } from 'react'
import Container from '@/app/components/container';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


export default function Register() {
    const [selectedRole, setSelectedRole] = useState(null);
    const Roles = [
        { name: 'Administrador', code: 'A' },
        { name: 'Lector', code: 'L' },
        { name: 'Editor', code: 'E' }
    ];

    return (

        <Container title='Registrar usuario' showButtons={false}>
            <div className='grid justify-content-center col-12'>
                <div className='grid justify-content-center col-6'>
                    <div className='col-4'>
                        <label className="labels" >Nombre:</label>
                    </div>
                    <div className='col-8'>
                        <InputText keyfilter="alpha"></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Correo:</label>
                    </div>
                    <div className='col-8'>
                        <InputText></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Usuario:</label>
                    </div>
                    <div className='col-8'>
                        <InputText></InputText>
                    </div>

                </div>
                <div className='grid justify-content-center col-6'>
                    <div className='col-4'>
                        <label className="labels" >Apellido:</label>
                    </div>
                    <div className='col-8'>
                        <InputText keyfilter="alpha"></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Telefono:</label>
                    </div>
                    <div className='col-8'>
                        <InputText></InputText>
                    </div>
                    <div className='col-4'>
                        <label className="labels" >Rol:</label>
                    </div>
                    <div className='col-8'>
                        <Dropdown value={selectedRole} onChange={(e)=> setSelectedRole(e.value)} options={Roles} optionLabel='name' placeholder='Seleccione un Rol'  className="w-full md:w-14rem"/>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <Button label='Registrar'></Button>
                </div>
            </div>
        </Container>
    )
}
