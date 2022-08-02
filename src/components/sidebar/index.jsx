import classes from './sidebar.module.css';

const Index = ({data, selectedItem, setSelectedItem}) =>
    <aside className={classes.sidebar}>
        <ul>
            {Object.keys(data).map((item, index) =>
                <li
                    key={`${item}-${index}`}
                    className={`${classes.sidebarItem} ${item === selectedItem ? classes.sidebar_selectedItem : null}`}
                    onClick={() => setSelectedItem(item)}>{item}
                </li>)}
        </ul>
    </aside>


export default Index