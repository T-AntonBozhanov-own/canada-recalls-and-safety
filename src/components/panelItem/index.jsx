import classes from './panelItem.module.css';

const PanelItem = ({ panelData, key }) => {
    return (
        <div className={classes.panelWrapper} key={key}>
            <span className={classes.panelItemTitle}>{panelData.title}</span>
            <div dangerouslySetInnerHTML={{__html: panelData.text}}/>
        </div>
    )
}

export default PanelItem