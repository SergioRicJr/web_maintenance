"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SimpleTable from "@/components/ui/simpleTable"
import { ColumnDef } from "@tanstack/react-table"
import { MoreVertical, SquareArrowOutUpRight } from "lucide-react"
import { z } from 'zod'
import { pieces } from "../pieces/data-table"
import { Label } from "@/components/ui/label"
import { maintenances } from "../maintenances/data-table"

export const ZodMachine = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  manufactureDate: z.string(),
  serialNumber: z.string(),
  location: z.string()
})

export type Machine = z.infer<typeof ZodMachine>

export const machineColumns: ColumnDef<z.infer<typeof ZodMachine>>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'type',
    header: 'Tipo'
  },
  {
    accessorKey: 'manufactureDate',
    header: 'Data de fabricação'
  },
  {
    accessorKey: 'serialNumber',
    header: 'Número de série'
  },
  {
    accessorKey: 'location',
    header: 'Localização'
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <div className="flex gap-4 justify-center">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger>
              <div className="flex justify-center items-center hover:bg-accent cursor-pointer w-8 h-8 rounded-md">
                <SquareArrowOutUpRight />
              </div>
            </DialogTrigger>
            <DialogContent className="w-[800px] h-[550px] max-w-none overflow-y-scroll">
              <div className='flex pb-2 p-6 gap-6 justify-between items-stretch'>
                <div className="w-[250px] h-[250px] bg-red-600">
                  img
                </div>
                <div className="w-[400px] h-[250px] overflow-y-auto">
                  <Label>Peças utilizadas</Label>
                  <SimpleTable data={pieces} columns={['id', 'name', 'code']} />
                </div>
              </div>
              <div className="flex flex-col px-6 gap-2">
                <Label>Manutenções realizadas</Label>
                <SimpleTable data={maintenances} columns={['id', 'description', 'requestDate', 'status']} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )
    },
  },
]