
import classes from "./AboutMe.module.scss"
import Container from "@/components/Container/Container"


export default function AboutMe(){





    return(<>
    
        <div className={classes.wrapper}> 
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.titleBlock}>
                        <p className={classes.title}>about me</p>
                    </div>
                    <div className={classes.textBlock}>
                        <p className={classes.text}>I am a 17—year-old frontend developer. For more than three years now, I have been creating modern and functional web interfaces, paying attention to every detail of design and logic.</p>
                    </div>

                    <div className={classes.exploreMoreBlock}>
                        <p className={classes.expText}>EXPLORE</p>
                    </div>
                </div>
            </Container>
        </div>
    
    </>)
}