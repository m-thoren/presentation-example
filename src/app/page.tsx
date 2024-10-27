import Main from '@/components/Main'

export default function HomePage() {
	return (
		<Main
			title="Välkommen till React!"
			pageNumber={1}
			prevLink={undefined}
			nextLink="/counter"
		>
			<h2>Vad är React?</h2>
			<p>
				JavaScript kan snabbt växa till ett ohållbart monster. Hur kan
				vi organisera koden enklare? Det var här React föddes. React är
				ett JavaScript-ramverk som skapades av Facebook för att göra
				reaktiva (därav React 😉) sidor på ett enhetligt sätt som va
				lättare att underhålla. React använder sig av en spegling av
				DOM(förklara):ens HTML i JavasScript, en Virtuell DOM. Med hjälp
				av den virtuella DOM:en kan React diffa ändringar i
				applikationen för att lista ut vilka delar av sidans HTML-kod
				som behöver uppdateras. React fungerar som en så kallad Singel
				Page Application (SPA). Detta betyder är att man gör ett anrop
				till en server, och den svarar med en enkel HTML-sida, som ett
				skal, och inkluderar ett större mängd JavaScript. JavaScript
				bygger upp en VDOM och synkar den med DOM som på så sätt visar
				upp en sida. Det betyder också att för att visa en sida i en
				sådan applikation måste man först vänta på att servern svarar
				med skalen, sedan på att webbläsaren kompilerar JavaScripten som
				sedan kan bygga upp sidan. Varför använder vi då React om
				Javascript är ohållbart?
			</p>
		</Main>
	)
}
