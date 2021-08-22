import Header from './Frame_Components/header';
import Footer from './Frame_Components/footer';

function App() {
  return (
    <div>
      <h1>Clint Cochrane</h1>
      <Header quickLinks={["contact", "projects", "about"]}/>
      <hr/>
			<h2> Welcome! </h2>
				<p>
					Hello, and welcome to the second attempt at a website by Clint. The purpose of this site is to help me practice 
					programming techniques as I learn them. This will become my site to tell people about myself. For those who don't know me 
					very well, I ask you to check out the life story section and connect with me on your social platform of choice. 
					To everyone, stay tuned. This site will change a bunch. I hope you enjoy it. 
				</p>
		  <Footer/>
    </div>
  );
}

export default App;
