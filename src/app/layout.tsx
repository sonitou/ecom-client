import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import AppProvider from '@/components/app-provider'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ECommerce - Nền tảng mua sắm trực tuyến',
  description: 'Khám phá hàng triệu sản phẩm chất lượng cao với giá tốt nhất',
  keywords: 'ecommerce, mua sắm, sản phẩm, thương mại điện tử'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <AppProvider>
            <Header />
            <div className='min-h-screen flex flex-col'>
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
