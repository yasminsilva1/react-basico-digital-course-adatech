import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { articleData } from "./components/Article/articleData";

// import { Counter } from "./components/Counter/Counter";

import "./styles/App.css";

// * Componente baseado em classe
class App extends React.Component {
	// * O método render() será responsável por renderizar o conteúdo HTML do componente.
	render() {
		return (
			// * Fragment => é uma tag vazia que engloba mais de um componente no React!
			<>
				<Navbar />

				{/* <Counter /> */}

				<section id="articles">
					{articleData.map((article, index) => (
						<Article
							key={index}
							title={article.title}
							provider={article.provider}
							description={article.description}
							thumbnail={article.thumbnail}
						/>
					))}
				</section>

				{/* <section id="articles">
					<Article
						title="Desinging Dashboards"
						provider="NASA"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam inventore velit et maiores labore porro impedit? Suscipit repellendus quos iure alias quod iste dolore, est veritatis numquam recusandae officiis inventore."
						thumbnail={article1Img}
					/>

					<Article
						title="Vibrant Portraits of 2020"
						provider="SpaceNews"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam inventore velit et maiores labore porro impedit? Suscipit repellendus quos iure alias quod iste dolore, est veritatis numquam recusandae officiis inventore."
						thumbnail={article2Img}
					/>

					<Article
						title="36 Days of Malayalam type"
						provider="SpaceFlight Now"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam inventore velit et maiores labore porro impedit? Suscipit repellendus quos iure alias quod iste dolore, est veritatis numquam recusandae officiis inventore."
						thumbnail={article3Img}
					/>

					<Article
						title="Desinging Dashboards"
						provider="NASA"
						description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam inventore velit et maiores labore porro impedit? Suscipit repellendus quos iure alias quod iste dolore, est veritatis numquam recusandae officiis inventore."
						thumbnail={article1Img}
					/>
				</section> */}
			</>
		);
	}
}

export default App;
