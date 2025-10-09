
import classes from "./Skill.module.scss"
import Container from "@/components/Container/Container"


export default function Skills(){



    return(<>
    
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.titleBlock}>
                        <p className={classes.title}>skills</p>
                    </div>

                    <div className={classes.skillsBlock}>
                        <div className={classes.functionsBlock}>
                            <p className={classes.blocksTitle}>USING NOW:</p>

                            <div className={classes.blocks}>
                                <div className={classes.block}>
                                    <div className={classes.logoHTML}></div>
                                    <p className={classes.blocksText}>HTML5</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoCSS}></div>
                                    <p className={classes.blocksText}>CSS3</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoSASS}></div>
                                    <p className={classes.blocksText}>SASS</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoJS}></div>
                                    <p className={classes.blocksText}>JAVASCRIPT</p>
                                </div>


                                <div className={classes.block}>
                                    <div className={classes.logoREACT}></div>
                                    <p className={classes.blocksText}>REACT</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoTS}></div>
                                    <p className={classes.blocksText}>TYPESCRIPT</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoGIT}></div>
                                    <p className={classes.blocksText}>GIT</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoFIGMA}></div>
                                    <p className={classes.blocksText}>FIGMA</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.learningBlock}>
                            <p className={classes.blocksTitle}>LEARNING:</p>
                            <div className={classes.blocks}>
                                <div className={classes.block}>
                                    <div className={classes.logoNODE}></div>
                                    <p className={classes.blocksText}>NODEJS</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoREDUX}></div>
                                    <p className={classes.blocksText}>REDUX</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoBT}></div>
                                    <p className={classes.blocksText}>BOOTSTRAP</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoJAVA}></div>
                                    <p className={classes.blocksText}>JAVA</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.otherSkillsBlock}>
                            <p className={classes.blocksTitle}>OTHER SKILLS:</p>

                            <div className={classes.blocks}>
                                <div className={classes.block}>
                                    <div className={classes.logoENG}></div>
                                    <p className={classes.blocksText}>ENGLISH <br />C1/C2</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoGERMAN}></div>
                                    <p className={classes.blocksText}>GERMAN <br />A1/A2</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoTAILWIND}></div>
                                    <p className={classes.blocksText}>TAILWIND</p>
                                </div>
                                <div className={classes.block}>
                                    <div className={classes.logoVITE}></div>
                                    <p className={classes.blocksText}>VITE/VUE</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
        </div>
    
    </>)
}