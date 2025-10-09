import HeroBlock from "./HeroBLock/HeroBlock"
import Header from "../Header/Header"
import Divider from "./Divider/Divider"
import AboutMe from "./AboutMe/AboutMe"
import MainDivider from "./MainDivider/MainDivader"
import Profesion from "./Profesion/Profesion"
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import Footer from "../Footer/Footer"
import Portfolio from "./Portfolio/Portfolio"
import ShadowCursor from "../Cursor/Cursor"

export default function HomePage() {
    return (
        <>
            <ShadowCursor />
            <Header />
            <section id="hero">
                <HeroBlock />
            </section>

            <Divider />

            <section id="about">
                <AboutMe />
            </section>

            <MainDivider />

            <section id="profesion">
                <Profesion />
            </section>

            <MainDivider />

            <section id="skills">
                <Skills />
            </section>

            <section id="portfolio">
                <Portfolio />
            </section>

            <section id="contact">
                <Contact />
            </section>

            <Footer />
        </>
    )
}
