'use client'
import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { pieceColumns } from './columns'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { pieces } from './data-table'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import CreationDialog from '@/components/creationDialog'
import CreationForm from '@/components/forms/creationForm'
import { piecesFormFields } from './formData'

const FormSchema = z.object({
  name: z.string(),
  code: z.string(),
  provider: z.string(),
  quantity: z.number(),
  price: z.number()
})

export default function page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      code: '',
      provider: '',
      quantity: 0,
      price: 0
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
        <CreationDialog buttonLabel='Adicionar peça'>
          <CreationForm 
            form={form} 
            onSubmit={onSubmit} 
            data={piecesFormFields}
            title='Adicionar peça'
          />
        </CreationDialog>
      </div>
      <DataTable
        columns={pieceColumns}
        data={pieces}
      />
    </div>
  )
}