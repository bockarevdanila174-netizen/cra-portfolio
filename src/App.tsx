import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Home} from "./layout/sections/home/Home.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            </main>
            <Footer/>
        </div>
    )
}

export default App


