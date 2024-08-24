'use client'

import { Input } from "@/components/ui/input"
import { IformData } from "@/types/iformData"
import { ControllerRenderProps } from "react-hook-form"

export const maintenanceFormFields: IformData[] = [
    {
        name: 'description',
        label: 'Descrição',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'requestDate',
        label: 'Data da solicitação',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'priority',
        label: 'Prioridade',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'status',
        label: 'Status',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'responsible',
        label: 'Responsável',
        input: (field) => <Input {...field} className="h-12 w-72" />
    }
]