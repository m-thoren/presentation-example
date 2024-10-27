import Main from '@/components/Main'

export default function ConditionalFalsyPage() {
	return (
		<Main
			title='JavaScript och "falsy"-värden'
			pageNumber={5}
			prevLink="/react/counter/conditional"
			nextLink="/react/counter/effect"
		>
			<div className="rounded-md bg-gray-400 p-6 text-background">
				condition && saken att visa
			</div>
			<div className="rounded-md bg-gray-400 p-6 text-background">
				condition ? Om sant visa detta : Om falskt visa detta
			</div>
			<div>
				<p className="text-white">Värden som räknas som falsy:</p>
				<ul className="list-inside list-disc p-2 text-blue-300">
					<li>false</li>
					<li>null</li>
					<li>undefined</li>
					<li>0</li>
					<li>&quot;&quot; - Den tomma strängen</li>
					<li>NaN — Not a number</li>
				</ul>
			</div>
		</Main>
	)
}
