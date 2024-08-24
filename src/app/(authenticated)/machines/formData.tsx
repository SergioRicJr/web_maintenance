'use client'

import { Input } from "@/components/ui/input"
import { IformData } from "@/types/iformData"
import { ControllerRenderProps } from "react-hook-form"

export const machineFormFields: IformData[] = [
    {
        name: 'name',
        label: 'Nome',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'type',
        label: 'Tipo',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'manufacturingDate',
        label: 'Data de produção',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'serialNumber',
        label: 'Número de série',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'location',
        label: 'Localização',
        input: (field) => <Input {...field} className="h-12 w-72" />
    }
]