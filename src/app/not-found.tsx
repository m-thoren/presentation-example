import BackButton from '@/components/BackButton'

export default function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-2">
			<h1 className="text-8xl font-bold">404 - Sida hittades inte</h1>
			<BackButton />
		</div>
	)
}
