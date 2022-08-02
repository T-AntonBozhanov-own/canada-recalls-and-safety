import classes from "./ItemsList.module.css";
import {useState} from "react";
import ModalWindow from "../modal";

const mappedTitles = {
    recallId:  'ID',
    title:  'TITLE',
    category: 'CATEGORY',
    date_published:'DATE',
    url: 'DETAILS'
}

const ItemsList = ({selectedItemList}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const getCellvalue = (list, value) => {
        switch (value) {
            case 'date_published': return new Date(list[value] * 1000).toJSON().split("T")[0];
            case 'url': return <button onClick={() => setSelectedItem(list[value])}>Details</button>

            default: return list[value]
        }
    }

    return <>{
        !selectedItemList || !selectedItemList.length ?
            (<span>Please select category in sidebar</span>) :
            (<>
                <div className={classes.tableWrapper}>
                    <table className={classes.tableStyles}>
                        <thead>
                           <tr>{Object.keys(selectedItemList[0])
                            .map(el => <th key={mappedTitles?.[el] ?? ''} className={classes.thStyles}>{mappedTitles?.[el] ?? ''}</th>)
                           }
                           </tr>
                        </thead>
                        <tbody>{selectedItemList.map(el => <tr>{
                            Object.keys(el)
                                .map((item, index) => <td key={`${el.recallId}${index}`} className={classes.tdStyles}>
                                    {getCellvalue(el, item)}
                                </td>)
                        }</tr>)}</tbody>
                    </table>
                </div>
                <ModalWindow selectedItem={selectedItem} toggleModal={() => setSelectedItem(null)} />
            </>
        )}</>
}

export default ItemsList;