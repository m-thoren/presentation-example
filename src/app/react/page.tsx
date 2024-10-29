import Main from '@/components/Main'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

const features: Array<{ name: string; description: string }> = [
	{
		name: 'Komponenter',
		description: 'Organisera och återanvänd kod på ett enklare sätt',
	},
	{
		name: 'Reaktivt',
		description:
			'Kraftfulla inbyggda verktyg för att ge interaktivitet till sidor',
	},
	{
		name: 'Stort ekosystem',
		description:
			'Eftersom React är det mest använda JavaScript-ramverket finns det många paket och mycket hjälp att hitta',
	},
	{
		name: 'JSX',
		description:
			'Med JSX kan vi skriva både JavaScript och HTML tillsammans för enklare utveckling',
	},
]

export default function HomePage() {
	return (
		<Main
			title="Välkommen till React!"
			pageNumber={1}
			prevLink={'/'}
			nextLink="/react/counter"
		>
			<h2>React är ett JavaScript-ramverk, som ger följande fördelar:</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Feature</TableHead>
						<TableHead>Beskrivning</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{features.map((feature, index) => (
						<TableRow key={index}>
							<TableCell>{feature.name}</TableCell>
							<TableCell>{feature.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Main>
	)
}
