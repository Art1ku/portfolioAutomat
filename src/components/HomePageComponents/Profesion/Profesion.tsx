
import classes from "./Profesion.module.scss"
import Container from "@/components/Container/Container"

export default function Profesion(){



    return(<>
    
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.UPblock}>
                        <div className={classes.block1}>
                            <p className={classes.Title}>DEVELOPMENT </p>

                            <p className={classes.text}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                        </div>
                        <div className={classes.block2}>
                            <p className={classes.Title}>What I Do</p>

                            <p className={classes.text}>I specialize in developing interfaces using Next.js, React, TypeScript, and SCSS. I like to turn complex ideas into simple and understandable solutions.</p>
                        </div>
                    </div>
                    <div className={classes.BOTTOMblock}>
                        <div className={classes.block3}>
                            <p className={classes.Title}>My Goal</p>

                            <p className={classes.text}>My goal is to improve every day, create projects that inspire, and develop towards a full stack, combining the frontend and backend into a single whole.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    
    </>)
}