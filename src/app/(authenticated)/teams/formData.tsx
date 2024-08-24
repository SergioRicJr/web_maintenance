'use client'

import { Input } from "@/components/ui/input"
import { IformData } from "@/types/iformData"

export const teamFormFields: IformData[] = [
    {
        name: 'name',
        label: 'Nome',
        input: (field) => <Input {...field} className="h-12 w-72" />
    },
    {
        name: 'specialty',
        label: 'Especialidade',
        input: (field) => <Input {...field} className="h-12 w-72" />
    }
]