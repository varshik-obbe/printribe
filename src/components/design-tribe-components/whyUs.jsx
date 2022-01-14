import React from 'react'
import styles from '../../styles/designTribe.module.css';


const whyUsTexts = [{title:"Free and easy to get started",body:"Skip expensive subscriptions and complex design software"},
{title:"Experiment with trendy designs",body:"Test fresh designs, add mockups to your store, and see what sells"},
{title:"What you see is what you get",body:"Use a tool that's built with the final product in mind"},
{title:"Access new graphics, mockups, and tools",body:"Up your design game with constant Design Maker improvements"},]

function whyUs(){
    return(<div className={styles.whyUsContainer}>
        <div className={styles.whyUsHeader}>Why go with our Design Maker?</div>
        <div className={styles.whyUsImgContainer}></div>
        <div className={styles.whyUsImg}>
            <img height="430px" src="https://static.cdn.printful.com/static/v838/images/layout/design-maker/why-go-with-design-maker-block/why-illustration.png" alt="why-us-image" />
            </div>
        <div className={styles.whyUsAllTopics}>
            {whyUsTexts.map(item=>(
                <div className={styles.whyUsBox}>
                <div className={styles.whyUsTick}>
                <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div className={styles.whyUsBoxText}>
                    <div className={styles.whyUsBoxTopic}>{item.title}</div>
                    <div className={styles.featureBody}>{item.body}</div>
                </div>
            </div>
            ))}
        </div>
        </div>)
}

export default whyUs;