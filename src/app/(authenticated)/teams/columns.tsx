"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const ZodTeam = z.object({
    id: z.string(),
    name: z.string(),
    specialty: z.string(),
    available: z.boolean()
})

export type Team = z.infer<typeof ZodTeam>


export const teamColumns: ColumnDef<Team>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'name',
      header: 'Nome'
    },
    {
      accessorKey: 'specialty',
      header: 'Especialidade'
    },
    {
      accessorKey: 'available',
      header: 'Disponível',
      cell: ({ row })=> {
        return <Checkbox checked={row.getValue('available')}/>
      }
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
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Excluir</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]