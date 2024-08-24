'use client'
import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { Input } from '@/components/ui/input'
import { teamColumns } from './columns'
import { teams } from './data-table'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import CreationDialog from '@/components/creationDialog'
import CreationForm from '@/components/forms/creationForm'
import { teamFormFields } from './formData'

const FormSchema = z.object({
  name: z.string(),
  specialty: z.string()
})

export default function page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      specialty: ''
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
        <CreationDialog buttonLabel='Criar equipe'>
          <CreationForm form={form} onSubmit={onSubmit} data={teamFormFields} title='Criar equipe' />
        </CreationDialog>
      </div>
      <DataTable
        columns={teamColumns}
        data={teams}
      />
    </div>
  )
}
