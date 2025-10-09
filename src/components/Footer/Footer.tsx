'use client'
import classes from "./Footer.module.scss"
import Container from "@/components/Container/Container"

export default function Footer() {


    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        })
    }

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.secInsideWrapper}>
                        <div className={classes.backLink}>
                            <div className={classes.upArrow}></div>
                            <a href="#" onClick={scrollToTop}>
                                BACK TO TOP
                            </a>
                        </div>

                        <div className={classes.linksIcons}>
                            <div className={classes.iconFacebook}></div>
                            <div className={classes.iconLinkedIn}></div>
                            <div className={classes.iconInstagram}></div>
                            <div className={classes.iconGmail}></div>
                        </div>

                        <div className={classes.rights}>
                            <div className={classes.textWrap}>
                                <p className={classes.rightTextBold}>@2025 Alihan Isken</p>
                                <p className={classes.rightTextRegular}>All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
