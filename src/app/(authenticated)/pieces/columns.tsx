"use client"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { z } from 'zod'
import { Button } from "@/components/ui/button"

export const ZodPiece = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    provider: z.string(),
    quantity: z.number(),
    price: z.number()
})

export type Piece = z.infer<typeof ZodPiece>;

export const pieceColumns: ColumnDef<Piece>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'name',
      header: 'Nome'
    },
    {
      accessorKey: 'code',
      header: 'Código'
    },
    {
      accessorKey: 'provider',
      header: 'Fornecedor'
    },
    {
      accessorKey: 'quantity',
      header: 'Quantidade'
    },
    {
      accessorKey: 'price',
      header: 'Preço'
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
