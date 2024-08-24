import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

interface CreationDialogProps {
    children: React.ReactNode
    buttonLabel: string
}

export default function CreationDialog({ children, buttonLabel }: CreationDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    className='h-11'
                >
                    { buttonLabel }
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[1000px] h-[650px] max-w-none">
                {children}
            </DialogContent>
        </Dialog>
    )
}
