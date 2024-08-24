import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface SimpleTableProps {
    data: Record<string, any>
    columns: string[]
}

export default function SimpleTable({ data, columns }: SimpleTableProps) {

    return (
        <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    {columns.map((item: string) => {
                        return <TableHead>{item}</TableHead>
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item: Record<string, any>) => (
                    <TableRow key={item.id}>
                        {   
                            columns.map((element)=><TableCell>{item[element]}</TableCell>)
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
