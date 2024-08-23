import { DataTable } from '@/components/ui/DataTable'
import React from 'react'
import { machineColumns } from './columns'
import { mockDataMachine } from './data-table'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div className='p-4 mt-4 flex flex-col gap-6'>
      <div className='flex w-full justify-between'>
          <Input 
            name='search' 
            placeholder='Pesquisa'
            className='h-11 w-80'
          />
          <Button className='h-11'>
            Criar máquina
          </Button>
      </div>
      <DataTable 
        columns={machineColumns} 
        data={mockDataMachine}
      />
    </div>
  )
}
