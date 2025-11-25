'use client'

import { AuthFormLayout } from '@/features/auth/ui/auth-form-layout'
import { AuthFields } from '@/features/auth/ui/fields'
import { SubmitButton } from '@/features/auth/ui/submit-button'
import { right } from '@/shared/lib/either'
import { AuthFormLink } from '@/features/auth/ui/auth-form-link'
import { useState } from 'react'
import { ErrorMessage } from '@/features/auth/ui/error-message'

export function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {}

    return (
        <AuthFormLayout
            title="Sign Up"
            description="Create your account to get started"
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
                    text={'Already have an account?'}
                    linkText={'Sign in'}
                    url={'/sign-in'}
                />
            }
            error={<ErrorMessage error={right(null)} />}
            onSubmit={handleSubmit}
        />
    )
}
