import React from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const CompModal = (props)=>{
    return(
        <div onClick={props.closeModal}>
            <Modal show={props.showModal}>
                <ModalHeader>
                <ModalTitle>Hi</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    asdfasdf
                </ModalBody>
                <ModalFooter>This is the footer</ModalFooter>
            </Modal>
        </div>
    )
}

export default CompModal;