import React, { ReactNode } from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { ControllerRenderProps, FieldValues, UseFormReturn } from 'react-hook-form'

interface InputFormProps {
    children: (field: ControllerRenderProps<any>) => ReactNode
    form: UseFormReturn<any, undefined>
    label: string
    name: string
}

export default function InputForm({ children, form, label, name }: InputFormProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className='relative text-start flex flex-col'>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {children(field)}
                    </FormControl>
                    <FormMessage className='absolute w-60'/>
                </FormItem>
            )}
        />
    )
}
