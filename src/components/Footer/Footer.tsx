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

    

    let age = 20; 
    const pi = 3.14; 
    var legacy = 'old'; 
    let name = 'Olia'; 
    let isAdmin = false; 
    let nothing = null; 
    let unknown; 
    console.log(typeof age); 
    console.log(typeof name);


    console.log()
    console.warn() 
    console.error()
    console.table() 

    console.log(2 + 3); 
    console.log('Привет, ' + 'мир!');

    console.log(10 - 4);


    console.log(5 * 3);
    // console.log('6' * '7');
    console.log(7 / 2);



    console.log(10 % 3);
    console.log(8 % 2);


    let a = 10;
    let b = 3;
    console.log(a + b); 
    console.log(a - b); 
    console.log(a * b); 
    console.log(a / b); 
    console.log(a % b); 


    const user = 'Olia';
    const points = 42;
    const msg = `Привет, ${user}! У тебя ${points} очков.`;
    console.log(msg);



    const score = 75;
    if (score >= 90) {
     console.log('Отлично');
     } else if (score >= 60) {
     console.log('Хорошо');
     } else {
     console.log('Нужно подтянуть');
     }
     const result = score >= 60 ? 'зачёт' : 'незачёт';
     console.log(result);

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
