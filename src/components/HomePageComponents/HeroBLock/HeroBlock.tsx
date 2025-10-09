import classes from "./HeroBlock.module.scss"
import Container from "@/components/Container/Container"

export default function HeroBlock() {

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.welcomeBlock}>
                        <div className={classes.HiBlock}>
                            <p className={classes.HiBlockP}>Hi, i am</p>
                        </div>
                        <div className={classes.NameBlock}>
                            <p className={classes.Name}>Alihan</p>
                            <p className={classes.NameSubtitle}>Front-end developer</p>
                        </div>
                        <div className={classes.LinksBlocks}>
                            <a href="mailto:alihaniskenderbekov@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.gmailIco}>
                                <div className={classes.gmail}></div>
                            </a>
                            <a href="https://github.com/Art1ku" target="_blank" rel="noopener noreferrer" className={classes.githubIco}>
                                <div className={classes.github}></div>
                            </a>
                            <a href="#" className={classes.linkedInIco}>
                                <div className={classes.linkedIn}></div>
                            </a>
                        </div>
                    </div>
                    {/* <div className={classes.blackBlock}></div> */}
                </div>
            </Container>
        </div>
    )
}
