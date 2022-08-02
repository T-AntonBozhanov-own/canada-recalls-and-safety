import classes from './modalContent.module.css';
import {CATEGORY_MATCH} from "../ItemsList/constants";
import PanelItem from "../panelItem";

const ModalContent = ({ data }) => {
    return (
        <>
fixed            <div className={classes.title} dangerouslySetInnerHTML={{__html: data.title}} />
            <span className={classes.subTitle}>
                <div className={classes.date}>{`Issue date: ${new Date(data.start_date * 1000).toJSON().split("T")[0]}`}</div>
                <div className={classes.recallId}>{`Recall id: ${data.recallId}`}</div>
                <div className={classes.category}>{`Category: ${data.category.map(item => CATEGORY_MATCH[item])}`}</div>
            </span>
            <a href={data.url}>More details</a>
            <div className={classes.panels}>
                {
                    data.panels.map(item => <PanelItem panelData={item} key={item.recallId}/>)
                }
            </div>
        </>
    )
}

export default ModalContent