import Modal from "react-modal";
import {useEffect, useState} from "react";
import classes from './modal.module.css';
import ModalContent from './../modalContent'

Modal.setAppElement("#modal");

const ModalWindow = ({selectedItem, toggleModal}) => {
    const [detailsData, setDetailsData] = useState(null);
    useEffect(() => {
        if(selectedItem) {
            fetch(`http://healthycanadians.gc.ca/recall-alert-rappel-avis${selectedItem}`)
                .then((response) => response.json())
                .then((data) => setDetailsData(data));
        }
    }, [selectedItem])

    return (
        <Modal
            isOpen={!!selectedItem}
            onRequestClose={() => {
                setDetailsData(null);
                toggleModal()}
        }
            contentLabel="Details"
        >
            <div className={classes.modal}>
                <div className={classes.modalHeader}>
                    <button
                        className={classes.closeBtn}
                        onClick={toggleModal}
                    >X</button>
                </div>
                {
                    detailsData ? <ModalContent data={detailsData}/> : null
                }
            </div>
        </Modal>
    )
}

export default ModalWindow