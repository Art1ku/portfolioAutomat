'use client'
import { useEffect, useState } from "react"
import classes from "./Header.module.scss"
import Container from "../Container/Container"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("")
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 600)

            const sections = ["about", "skills", "portfolio", "contact"]
            let current = ""
            sections.forEach((id) => {
                const el = document.getElementById(id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = id
                    }
                }
            })
            setActive(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`${classes.wrapper} ${scrolled ? classes.scrolled : ""}`}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.logo}>
                        <a href="#hero" onClick={closeMenu}>AI</a>
                    </div>

                    {/* Кнопка бургер */}
                    <div className={classes.burger} onClick={toggleMenu}>
                        <div className={`${classes.line} ${menuOpen ? classes.open : ""}`} />
                        <div className={`${classes.line} ${menuOpen ? classes.open : ""}`} />
                        <div className={`${classes.line} ${menuOpen ? classes.open : ""}`} />
                    </div>

                    <div className={`${classes.navContainer} ${menuOpen ? classes.openMenu : ""}`}>
                        <div className={classes.nav}>
                            <button
                                className={`${classes.navButton} ${active === "about" ? classes.active : ""}`}
                                onClick={closeMenu}
                            >
                                <a href="#about">About me</a>
                            </button>
                            <button
                                className={`${classes.navButton} ${active === "skills" ? classes.active : ""}`}
                                onClick={closeMenu}
                            >
                                <a href="#skills">Skills</a>
                            </button>
                            <button
                                className={`${classes.navButton} ${active === "portfolio" ? classes.active : ""}`}
                                onClick={closeMenu}
                            >
                                <a href="#portfolio">Portfolio</a>
                            </button>
                            <button
                                className={`${classes.contactButton} ${active === "contact" ? classes.active : ""}`}
                                onClick={closeMenu}
                            >
                                <a href="#contact">Contact me</a>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}
