'use client'
import { useEffect, useState } from "react"
import classes from "./Header.module.scss"
import Container from "../Container/Container"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("")

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

    return (
        <header className={`${classes.wrapper} ${scrolled ? classes.scrolled : ""}`}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.navContainer}>
                        <div className={classes.nav}>
                            <button className={`${classes.navButton} ${active === "about" ? classes.active : ""}`}>
                                <a href="#about">About me</a>
                            </button>
                            <button className={`${classes.navButton} ${active === "skills" ? classes.active : ""}`}>
                                <a href="#skills">Skills</a>
                            </button>
                            <button className={`${classes.navButton} ${active === "portfolio" ? classes.active : ""}`}>
                                <a href="#portfolio">Portfolio</a>
                            </button>
                        </div>
                        <button className={`${classes.contactButton} ${active === "contact" ? classes.active : ""}`}>
                            <a href="#contact">Contact me</a>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}
