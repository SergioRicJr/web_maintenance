"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, MoreVertical, SquareArrowOutUpRight } from "lucide-react"
import { z } from 'zod'

export const ZodMachine = z.object({
    id: z.string(),
    name: z.string(),
    type: z.string(),
    manufactureDate: z.string(),
    serialNumber: z.number(),
    location: z.string()
})
 
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
                            <SquareArrowOutUpRight/>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
          )
        },
      },
]