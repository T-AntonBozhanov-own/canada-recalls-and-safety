import useMainPageHandler from "./useMainPageHandler";
import Sidebar from '../../components/sidebar'
import ItemsList from '../../components/ItemsList'

import classes from './main.module.css';

function MainPage({ lang }) {
    const {data, setSelectedItem, selectedItem} = useMainPageHandler(lang);

    return (
        <div className={classes.mainPageWrapper}>
            {data && <>
                <Sidebar
                    data={data}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}/>
                <ItemsList selectedItemList={data?.[selectedItem] ?? null} />
            </>
            }
        </div>
    );
}

export default MainPage;
