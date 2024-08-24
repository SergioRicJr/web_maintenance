'use client'

import { Input } from "@/components/ui/input"
import { IformData } from "@/types/iformData"

export const piecesFormFields: IformData[] = [
    {
        name: 'name',
        label: 'Nome',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'code',
        label: 'Código',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'provider',
        label: 'Fornecedor',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'quantity',
        label: 'Quantidade',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'price',
        label: 'Preço',
        input: (field) => <Input {...field} className="h-12 w-72" />
    }
]