"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { z } from 'zod'
import { Button } from "@/components/ui/button"

export const ZodMaintenance = z.object({
    id: z.string(),
    description: z.string(),
    requestDate: z.string(),
    priority: z.number(),
    status: z.enum(["pendente", "em andamento", "concluída", "cancelada"]),
    responsible: z.string()
})

export type Maintenance = z.infer<typeof ZodMaintenance>

export const maintenanceColumns: ColumnDef<Maintenance>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'description',
      header: 'Descrição'
    },
    {
      accessorKey: 'requestDate',
      header: 'Data de solicitação'
    },
    {
      accessorKey: 'priority',
      header: 'Prioridade'
    },
    {
      accessorKey: 'status',
      header: 'Status'
    },
    {
      accessorKey: 'responsible',
      header: 'Responsável'
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