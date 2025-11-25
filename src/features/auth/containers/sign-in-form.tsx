'use client'

import { AuthFormLayout } from '@/features/auth/ui/auth-form-layout'
import { AuthFields } from '@/features/auth/ui/fields'
import { SubmitButton } from '@/features/auth/ui/submit-button'
import { right } from '@/shared/lib/either'
import { AuthFormLink } from '@/features/auth/ui/auth-form-link'
import { useState } from 'react'
import { ErrorMessage } from '@/features/auth/ui/error-message'

export function SignInForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {}

    return (
        <AuthFormLayout
            title="Sign In"
            description="Welcome back! Please sign in to your account"
            fields={
                <AuthFields
                    login={email}
                    onChangeLogin={setEmail}
                    password={password}
                    pnChangePassword={setPassword}
                />
            }
            actions={<SubmitButton>Sign Up</SubmitButton>}
            link={
                <AuthFormLink
                    text={'Dont have an account?'}
                    linkText={'Sign up'}
                    url={'/sign-up'}
                />
            }
            error={<ErrorMessage error={right(null)} />}
            onSubmit={handleSubmit}
        />
    )
}
