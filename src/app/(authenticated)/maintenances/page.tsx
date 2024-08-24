'use client'
import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { maintenanceColumns } from './columns'
import { maintenances } from './data-table'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CreationDialog from '@/components/creationDialog'
import CreationForm from '@/components/forms/creationForm'
import { maintenanceFormFields } from './formData'

const FormSchema = z.object({
  description: z.string(),
  requestDate: z.string(),
  priority: z.string(),
  status: z.string(),
  responsible: z.string()
})

export default function page() {
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: '',
      priority: '',
      requestDate: '',
      responsible: '',
      status: ''
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
        <CreationDialog buttonLabel='Solicitar manutenção'>
          <CreationForm form={form} onSubmit={onSubmit} data={maintenanceFormFields} title='Solicitar manutenção'/>
        </CreationDialog>
      </div>
      <DataTable
        columns={maintenanceColumns}
        data={maintenances}
      />
    </div>
  )
}