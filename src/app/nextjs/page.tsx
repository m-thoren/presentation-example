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
		name: 'Routing',
		description:
			'En filsystembaserad router byggd ovanpå Server Components som stöder layouter, nästlade rutter, laddningstillstånd, felhantering och mer.',
	},
	{
		name: 'Rendering',
		description:
			'Rendering på klientsidan och serversidan med Client och Server Components. Vidare optimerad med statisk och dynamisk rendering på servern med Next.js. Streaming på Edge- och Node.js-runtime.',
	},
	{
		name: 'Datahämtning',
		description:
			'Förenklad datahämtning med async/await i Server Components och en utökad fetch-API för begäran-memoisering, datacaching och revalidering.',
	},
	{
		name: 'Stilhantering',
		description:
			'Stöd för dina föredragna stilhanteringsmetoder, inklusive CSS-moduler, Tailwind CSS och CSS-in-JS.',
	},
	{
		name: 'Optimeringar',
		description:
			'Optimeringar för bilder, typsnitt och skript för att förbättra applikationens Core Web Vitals och användarupplevelse.',
	},
	{
		name: 'TypeScript',
		description:
			'Förbättrat stöd för TypeScript med bättre typkontroll och effektivare kompilering, samt ett anpassat TypeScript-plugin och typkontrollverktyg.',
	},
]

export default function NextJS() {
	return (
		<Main
			title="NextJS"
			pageNumber={1}
			prevLink="/react/todo"
			nextLink="/nextjs/person"
		>
			<p>NextJS är meta-ramverk runt React</p>
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
