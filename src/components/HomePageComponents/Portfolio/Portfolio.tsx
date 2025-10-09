'use client'
import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import classes from "./Portfolio.module.scss"

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState("All")
    const swiperRef = useRef<any>(null)

    const tabs = ["All", "Tournaments", "Self Projects"]

    const allImages = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg",
        "https://ykob.github.io/sketch-threejs/img/common/ogp_dna.jpg",
        "https://m.media-amazon.com/images/I/71meY6dAvjL.jpg",
        "https://img.freepik.com/free-vector/gradient-speed-motion-background_52683-63639.jpg?semt=ais_hybrid&w=740&q=80",
        "https://as1.ftcdn.net/jpg/05/25/09/02/1000_F_525090285_6Li8luqiXy5C1VYeLgGcc4yfQlbdGS51.jpg",
        "https://i.pinimg.com/736x/fd/0b/15/fd0b1557a9d6d3126338109cd73e38b0.jpg",
        "",
        "https://images.unsplash.com/photo-1503023345316-bd7c1de61c83",
        "https://images.unsplash.com/photo-1503023345317-bd7c1de61c84",
        "https://images.unsplash.com/photo-1503023345318-bd7c1de61c85",
        "https://images.unsplash.com/photo-1503023345319-bd7c1de61c86",
        "https://images.unsplash.com/photo-1503023345320-bd7c1de61c87",
        "https://images.unsplash.com/photo-1503023345321-bd7c1de61c88",
        "https://images.unsplash.com/photo-1503023345322-bd7c1de61c89",
        "https://images.unsplash.com/photo-1503023345323-bd7c1de61c90",
        "https://images.unsplash.com/photo-1503023345324-bd7c1de61c91",
        "https://images.unsplash.com/photo-1503023345325-bd7c1de61c92",
        "https://images.unsplash.com/photo-1503023345326-bd7c1de61c93",
    ]

    const images = {
        All: allImages.slice(0, 6),
        Tournaments: allImages.slice(6, 12),
        SelfProjects: allImages.slice(12, 18),
    }

    const tabKeyMap: Record<string, keyof typeof images> = {
        "All": "All",
        "Tournaments": "Tournaments",
        "Self Projects": "SelfProjects",
    }

    const handleTabChange = (tab: string, index: number) => {
        setActiveTab(tab)
        if (swiperRef.current) swiperRef.current.slideToLoop(index)
    }

    const handleSlideChange = (swiper: any) => {
        const realIndex = swiper.realIndex % tabs.length
        setActiveTab(tabs[realIndex])
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.titleBlockWrapper}>
                <div className={classes.titleBlock}>
                    <p className={classes.title}>portfolio</p>
                </div>
            </div>

            <div className={classes.projectsBlock}>
                <div className={classes.navBlock}>
                    <div className={classes.nav}>
                        {tabs.map((tab, index) => (
                            <div
                                key={tab}
                                className={`${classes.navItem} ${activeTab === tab ? classes.active : ""}`}
                                onClick={() => handleTabChange(tab, index)}
                            >
                                <p className={classes.navP}>{tab}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    className={classes.swiperWrapper}
                >
                    {tabs.map(tab => (
                        <SwiperSlide key={tab}>
                            <div className={classes.gridBlock}>
                                {images[tabKeyMap[tab]]?.map((src, idx) => (
                                    <div className={classes.gridItem} key={idx}>
                                        <img src={src} alt={`img${idx}`} className={classes.gridImg} />
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={classes.seeMoreBlock}>
                    <p className={classes.seeMoreBlockP}>And any more to come...</p>
                </div>
            </div>
        </div>
    )
}
