"use client"

import "./theme.css"
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { ConfirmDialog } from "primereact/confirmdialog";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ConfirmDialog></ConfirmDialog>
        {children}
        </body>
    </html>
  )
}
