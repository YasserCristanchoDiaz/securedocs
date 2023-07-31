'use client'

import { useState, useEffect } from 'react'
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Container from '@/app/components/container';
import { AdminService } from '@/app/services/adminSevices';
import { useRouter } from 'next/navigation';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function Management() {
    const router = useRouter()
    const adminService = new AdminService()
    const [data, setData] = useState([]);
    

    const columns: ColumnMeta[] = [
        { field: 'name', header: 'Nombre' },
        { field: 'lastName', header: 'Apellido' },
        { field: 'phone', header: 'Telefono' },
        { field: 'role', header: 'Rol' },
        { field: 'actions', header: 'Acciones' }
    ];

    const handleCreate = () => {
        router.push('/pages/register')
    }

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    useEffect(() => {
        adminService.getUsers().then((res)=>{
            setData(res.data)
        })
    }, []);

    return (
        <Container showButtons={false} showContainer={false} showMng={true}>
            <div className='flex justify-content-end align-items-center mb-3'>
                <Button label='Filtrar' icon='pi pi-filter' className='mr-3'></Button>
                <Button label='Crear' icon='pi pi-user-plus' onClick={handleCreate}></Button>
            </div>
            <div className="col-12">
                <DataTable value={data} tableStyle={{ minWidth: '50rem', color: '#C9DCF9' }}>
                    {columns.map((col, i) => {
                        if (col.field === 'actions') { // Comprobamos si es la columna de acciones
                            return (
                                <Column key={col.field} field={col.field} header={col.header}
                                    body={() => (
                                        <>
                                            <Button icon='pi pi-user-edit' onClick={handleEdit} className='mr-1'></Button>
                                            <Button icon='pi pi-trash' onClick={handleDelete}></Button>
                                        </>
                                    )}
                                />
                            );
                        } else {
                            return <Column key={col.field} field={col.field} header={col.header} />;
                        }
                    })}
                </DataTable>
            </div>
        </Container>
    )
}