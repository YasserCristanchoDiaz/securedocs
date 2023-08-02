'use client'

import { useState, useEffect } from 'react'
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { DataTable, DataTableRowEditCompleteEvent } from 'primereact/datatable';
import { Column, ColumnEditorOptions } from 'primereact/column';
import Container from '@/app/components/container';
import { AdminService } from '@/app/services/adminSevices';
import { useRouter } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { log } from 'console';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function Management() {
    const router = useRouter()
    const adminService = new AdminService()
    const [data, setData] = useState([]);
    const [loadData, setLoadData]=useState<boolean>(true);


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

    const handleEdit = (e: DataTableRowEditCompleteEvent) => {
        let { newData, index } = e;
        console.log(e);
        
        adminService.saveUser(newData).then(res => {
            setLoadData(true);
        })
    }

    const handleDelete = () => {

    }

    const textEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback && options.editorCallback(e.target.value)} />;
    };

    return (
        <Container showButtons={false} showContainer={false} showMng={true}>
            <div className='flex justify-content-end align-items-center mb-3'>
                <Button label='Filtrar' icon='pi pi-filter' className='mr-3'></Button>
                <Button label='Crear' icon='pi pi-user-plus' onClick={handleCreate}></Button>
            </div>
            <div className="col-12">
                <DataTable value={data} dataKey="id" editMode="row" onRowEditComplete={handleEdit} tableStyle={{ minWidth: '50rem', color: '#C9DCF9' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} editor={(options) => textEditor(options)} field={col.field} header={col.header} />
                    ))}
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
                    {/*body={(rowData) => (
                            <Button icon="pi pi-trash" onClick={handleDelete)}></Button>
                        )}*/}
                    <Column></Column>
                </DataTable>
            </div>
        </Container>
    )
}