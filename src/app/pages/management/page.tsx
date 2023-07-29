'use client'

import { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Container from '@/app/components/container';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function Management() {
    const columns: ColumnMeta[] = [
        { field: 'user', header: 'Usuario' },
        { field: 'name', header: 'Nombre' },
        { field: 'lastName', header: 'Apellido' },
        { field: 'mail', header: 'Correo' },
        { field: 'phone', header: 'Telefono' },
        { field: 'rol', header: 'Rol' },
        { field: 'actions', header: 'Acciones' }
    ];

    useEffect(() => {
    }, []);

    return (
        <Container showButtons={false} showContainer={false} showMng={true}>
            <div className="col-12" >
                <DataTable tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
        </Container>
    )
}