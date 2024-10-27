import { ThemeProvider } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: 'React + NextJS Presentation',
	description: 'En presentation för att lära ut React och NextJS',
	icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="sv" className={`${GeistSans.variable}`}>
			<body className="min-w-screen flex min-h-screen flex-col items-stretch justify-center bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex flex-row items-center justify-end p-4">
						<ThemeSwitcher />
					</div>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
