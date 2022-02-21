import './css/fonts.css';
import './App.css';
import Header from "./header/Header";
import Introduction from "./introduction/Introduction";

function App() {
	return (
		<main>
          <article>
            <Header />
          </article>
          <article style={{display: "none"}}>
            <Introduction />
          </article>
		</main>
	);
}

export default App;
