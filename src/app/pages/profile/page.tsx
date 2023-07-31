'use client'

import Container from "@/app/components/container"
import { Card } from 'primereact/card';


export default function Profile() {

    return (
        <Container>
            <div className="card">
                <Card title="Bienvenido">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </Container>
    )
}