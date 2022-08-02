import Modal from "react-modal";
import {useEffect, useState} from "react";

Modal.setAppElement("#modal");

const ModalWindow = ({selectedItem, toggleModal}) => {
    const [detailsData, setDetailsData] = useState(null);
    useEffect(() => {
        if(selectedItem) {
            fetch(`http://healthycanadians.gc.ca/recall-alert-rappel-avis${selectedItem}`)
                .then((response) => response.json())
                .then((data) => setDetailsData(data.results));
        }
    }, [selectedItem])


    return (
        <Modal
            isOpen={!!selectedItem}
            onRequestClose={toggleModal}
            contentLabel="Details"
        >
            <div>{detailsData}</div>
            <button onClick={toggleModal}>Close modal</button>
        </Modal>
    )
}

export default ModalWindow