'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { LoginBodyType, LoginBodySchema } from '@/schemaValidations/auth.schema'
import { toast } from '@/components/ui/use-toast'
import { handleErrorApi } from '@/lib/utils'
import { useLoginMutation } from '@/hooks/useAuth'

// --- Icon components (giữ nguyên UI gốc) ---
const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='h-5 w-5 text-zinc-600 dark:text-zinc-400'
  >
    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
    <circle cx='12' cy='7' r='4' />
  </svg>
)

const EyeIcon = () => <Eye className='h-4 w-4 text-zinc-500 dark:text-zinc-400' />

const EyeOffIcon = () => <EyeOff className='h-4 w-4 text-zinc-500 dark:text-zinc-400' />

const AppleIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-6 w-6'>
    <path
      fill='currentColor'
      d='M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z'
    />
  </svg>
)

const GoogleIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5'>
    <path
      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
      fill='#4285F4'
    ></path>
    <path
      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
      fill='#34A853'
    ></path>
    <path
      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'
      fill='#FBBC05'
    ></path>
    <path
      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
      fill='#EA4335'
    ></path>
  </svg>
)

const XIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-5 w-5 text-zinc-900 dark:text-white'
  >
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
)

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const loginMutation = useLoginMutation()

  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBodySchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: LoginBodyType) => {
    if (loginMutation.isPending) return
    try {
      await loginMutation.mutateAsync(data)
      toast({ description: 'Đăng nhập thành công!' })
    } catch (error) {
      handleErrorApi({ error, setError: form.setError })
    }
  }

  return (
    <div className='relative w-full flex items-center justify-center font-sans overflow-hidden'>
      <div className='relative w-full max-w-sm p-6 space-y-6 bg-white dark:bg-black rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-zinc-900/50'>
        <div className='text-center space-y-3'>
          <div className='inline-flex p-2 bg-zinc-100 dark:bg-zinc-900 rounded-md border border-zinc-200 dark:border-zinc-800'>
            <UserIcon />
          </div>
          <h1 className='text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white'>Welcome back</h1>
          <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-1'>Enter your credentials to sign in</p>
        </div>

        {/* Social Login Buttons */}
        <div className='grid grid-cols-3 gap-2'>
          {[{ icon: <AppleIcon /> }, { icon: <GoogleIcon /> }, { icon: <XIcon /> }].map((item, i) => (
            <button
              key={i}
              type='button'
              className='flex items-center justify-center h-9 px-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors'
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t border-zinc-200 dark:border-zinc-800' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-white dark:bg-zinc-900 px-2 text-zinc-500 dark:text-zinc-400'>Or continue with</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          {/* Email */}
          <div className='space-y-2'>
            <label htmlFor='email' className='text-sm font-medium text-zinc-900 dark:text-zinc-50'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='name@example.com'
              {...form.register('email')}
              className='flex h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300'
            />
            {form.formState.errors.email && (
              <p className='text-sm text-red-500'>{form.formState.errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <label htmlFor='password' className='text-sm font-medium text-zinc-900 dark:text-zinc-50'>
              Password
            </label>
            <div className='relative'>
              <input
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                {...form.register('password')}
                className='flex h-9 w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 pr-10 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 -translate-y-1/2'
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {form.formState.errors.password && (
              <p className='text-sm text-red-500'>{form.formState.errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type='submit'
            disabled={loginMutation.isPending}
            className='inline-flex items-center justify-center w-full rounded-md text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9'
          >
            {loginMutation.isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div className='text-center space-y-2'>
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            Don&apos;t have an account?{' '}
            <a
              href='#'
              className='font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300'
            >
              Sign up
            </a>
          </p>
          <a
            href='#'
            className='text-sm font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 hover:text-zinc-700 dark:hover:text-zinc-300'
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  )
}
