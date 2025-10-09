
import classes from "./Contact.module.scss"
import Container from "@/components/Container/Container"
import MainDivider from "../MainDivider/MainDivader"

export default function Contact(){




    return(<>
    
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.secondWrapper}>
                        <div className={classes.titleWrapper}>
                            <div className={classes.titleBlock}>
                                <p className={classes.title}>contact</p>
                            </div>
                            <div className={classes.textBlock}>
                                <p className={classes.text}>I will be glad to contact you and start productive work.</p>
                            </div>
                        </div>

                        <MainDivider />

                        <div className={classes.form}>
                            <div className={classes.inputs}>
                                <input type="text" className={classes.inputTransparent} placeholder="ENTER YOUR NAME*" />
                                <input type="text" className={classes.inputTransparent} placeholder="ENTER YOUR EMAIL*" />
                                <input type="text" className={classes.inputTransparent} placeholder="PHONE NUMBER*" />
                                <textarea className={classes.inputMessageTransparent} placeholder="YOUR MESSAGE*"></textarea>   

                                <button className={classes.formButton}>
                                    <p>
                                        submit
                                    </p>
                                    
                                </button>                                                         
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    
    </>)
}