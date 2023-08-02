'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { DataTable, DataTableRowEditCompleteEvent } from 'primereact/datatable';
import { Column, ColumnEditorOptions } from 'primereact/column';
import Container from '@/app/components/container';
import { AdminService } from '@/app/services/adminSevices';
import { useRouter } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast'
import { log } from 'console';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function Management() {
    const router = useRouter()
    const adminService = new AdminService()
    const [data, setData] = useState([]);
    const [loadData, setLoadData] = useState<boolean>(true);
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);

    const columns: ColumnMeta[] = [
        { field: 'name', header: 'Nombre' },
        { field: 'lastName', header: 'Apellido' },
        { field: 'phone', header: 'Telefono' },
        { field: 'role', header: 'Rol' },
    ];

    useEffect(() => {
        if (loadData) {
            adminService.getUsers().then((res) => {
                setData(res.data)
                setLoadData(false);
            })
        }
    }, [loadData]);


    const handleCreate = () => {
        router.push('/pages/register')
    }

    const handleChange = () => {
        router.push('/pages/accesshours')
    }

    const handleEdit = (e: DataTableRowEditCompleteEvent) => {
        let { newData, index } = e;
        console.log(e);

        adminService.saveUser(newData).then(res => {
            setLoadData(true);
        })
    }

    const acceptDelete = (rowData: any) => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        const updatedRowData = { ...rowData, id: rowData.id + 1 };
        handleDelete(updatedRowData)
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const handleDelete = (user: any) => {
        adminService.deleteUser(user.id).then(res => {
            setLoadData(true)
            console.log(res);
        })
    }

    const showDelete = (user : any) => {
        confirmDialog({
            message: "¿Estas seguro que deseas eliminar a: " + user.name,
            header: "¿ELIMINAR?",
            icon: "pi pi-exclamation-triangle",
            accept: () => handleDelete(user)
        })
    }

    const textEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback && options.editorCallback(e.target.value)} />;
    };

    const bodyTemplate = (user: any) => {    
        return (
            <>
                <Button icon="pi pi-trash" onClick={() => showDelete(user)} />
            </>)
    }

    return (
        <>
            <Toast ref={toast} />
            <Container showButtons={false} showContainer={false} showMng={true}>
                <div className='flex justify-content-end align-items-center mb-3'>
                    <Button label='Hora de acceso' icon='pi pi-clock' onClick={handleChange} className='mr-3'></Button>
                    <Button label='Agregar Usuario' icon='pi pi-user-plus' onClick={handleCreate}></Button>
                </div>
                <div className="col-12">
                    <DataTable value={data} dataKey="id" editMode="row" onRowEditComplete={handleEdit} tableStyle={{ minWidth: '50rem', color: '#C9DCF9' }}>
                        {columns.map((col, i) => (
                            <Column key={col.field} editor={(options) => textEditor(options)} field={col.field} header={col.header} />
                        ))}
                        <Column header="Editar" rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
                        <Column header="Eliminar" headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}
                            body={bodyTemplate}
                        ></Column>
                    </DataTable>
                </div>
            </Container>
        </>
    )
}