'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, User, LogOut } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // chỉ khi component đã mount trên client mới render icon theme
    setMounted(true)
  }, [])

  return (
    <header className='sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-semibold tracking-tight'>
          <span className='text-lg'>🌸 MyApp</span>
        </Link>

        {/* Navigation Links */}
        <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400'>
          <Link href='/' className='hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'>
            Home
          </Link>
          <Link href='/about' className='hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'>
            About
          </Link>
          <Link href='/contact' className='hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors'>
            Contact
          </Link>
        </nav>

        {/* Right section */}
        <div className='flex items-center gap-3'>
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className='p-2 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors'
              aria-label='Toggle theme'
            >
              {resolvedTheme === 'dark' ? <Sun className='w-4 h-4' /> : <Moon className='w-4 h-4' />}
            </button>
          )}

          {/* Auth section */}
          {isAuthenticated ? (
            <div className='flex items-center gap-2'>
              <button className='flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-sm font-medium'>
                <User className='w-4 h-4' />
                Profile
              </button>
              <button className='p-2 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors'>
                <LogOut className='w-4 h-4' />
              </button>
            </div>
          ) : (
            <Link
              href='/login'
              className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2'
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
