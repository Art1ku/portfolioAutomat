
import classes from "./Divider.module.scss"
import Container from "@/components/Container/Container"

export default function Divider(){


    return(<>
    
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.secWrapper}>
                    <div className={classes.insideWrapper}>
                        <div className={classes.titleBlock}>
                            <p>IT BERRIES</p>
                        </div>
                        <div className={classes.textBlock}>
                            <p>
                                Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. 
                            </p>
                        </div>
                        <div className={classes.readBlock}>
                            <button className={classes.formButton}>
                                <p>
                                    read more
                                </p>
                            </button> 
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>)
}