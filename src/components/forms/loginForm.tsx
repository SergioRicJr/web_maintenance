"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import InputForm from "@/components/inputs/inputForm"
import { useRouter } from "next/navigation"
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "O número mínimo de caracteres é 6"
    })
})

export function LoginForm() {
    const router = useRouter()


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <InputForm form={form} name="username" label="Nome de usuário">
                    {(field) => <Input {...field} className="h-11" />}
                </InputForm>
                <InputForm form={form} name="password" label="Senha">
                    {(field) => <Input {...field} className="h-11" />}
                </InputForm>
                <div className="flex justify-between pt-2">
                    <Button type="submit" className="h-11 w-32" onClick={() => router.push('/machines')}>Entrar</Button>
                    <Button type="button" className="h-11 w-32" variant="outline" onClick={() => router.push('/register')}>Cadastrar</Button>
                </div>
            </form>
        </Form>
    )
}