'use client'
import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { machineColumns } from './columns'
import { machines } from './data-table'
import { Input } from '@/components/ui/input'
import CreationDialog from '@/components/creationDialog'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CreationForm from '@/components/forms/creationForm'
import { machineFormFields } from './formData'

const FormSchema = z.object({
  name: z.string(),
  type: z.string(),
  manufactureDate: z.string(),
  serialNumber: z.string(),
  location: z.string()
})

export default function page() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      type: '',
      location: '',
      manufactureDate: '',
      serialNumber: ''
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <div className='p-4 mt-4 flex flex-col gap-6'>
      <div className='flex w-full justify-between'>
        <Input
          name='search'
          placeholder='Pesquisa'
          className='h-11 w-80'
        />

        <CreationDialog buttonLabel='Criar máquina'>
          <CreationForm form={form} onSubmit={onSubmit} data={machineFormFields} title='Adicionar máquina' />
        </CreationDialog>
      </div>
      <DataTable
        columns={machineColumns}
        data={machines}
      />
    </div>
  )
}
