import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card'
import { FormEventHandler, ReactNode } from 'react'

export function AuthFormLayout({
    title,
    description,
    fields,
    actions,
    link,
    error,
    onSubmit,
}: {
    title: string
    description: string
    fields: ReactNode
    actions: ReactNode
    link: ReactNode
    error: ReactNode
    onSubmit: FormEventHandler<HTMLFormElement>
}) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardDescription className="text-center">
                {description}
            </CardDescription>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                    {fields}
                    {error}
                    {actions}
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">{link}</CardFooter>
        </Card>
    )
}
