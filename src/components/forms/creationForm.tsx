import React from 'react'
import { Form } from '../ui/form'
import { UseFormReturn } from 'react-hook-form'
import { Button } from '../ui/button'
import InputForm from '../inputs/inputForm'
import { Input } from '../ui/input'
import { IformData } from '@/types/iformData'

interface CreationFormProps {
  form: UseFormReturn<any>
  onSubmit: (data: any)=> Promise<void>
  data: IformData[]
  title: string
}

export default function CreationForm({ form, onSubmit, data, title }: CreationFormProps) {
  return (
    <Form {...form}>
      <div className='flex flex-col gap-6 relative'>
        <div className='w-full flex flex-col gap-6 justify-center items-center'>
          <h1 className='absolute top-2 text-4xl font-extrabold'>{title}</h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-20 grid grid-cols-2 grid-auto-rows-min-content h-auto w-[800px] gap-6 place-items-center items-start">
            {
              data.map((item) => {
                  return (
                    <InputForm form={form} name={item.name} label={item.label}>
                      {(field) => <Input {...field} className="h-12 w-64"/>}
                    </InputForm>
                  )
              })
            }  
            <div className="col-span-2 flex justify-center absolute bottom-0">
              <Button type="submit" className='w-32 h-10'>Adicionar</Button>
            </div>
          </form>
        </div>
      </div>
    </Form>
  )
}
