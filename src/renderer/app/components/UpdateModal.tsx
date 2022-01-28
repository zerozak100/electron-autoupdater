import React, { FC } from 'react';

type UpdateModalProps = {};

const UpdateModal: FC<UpdateModalProps> = () => {
    return (
        <>
            <div id="modal" className="modal">
                <div className="modal-guts">
                    hola
                </div>
            </div>
            <div id="modal-overlay" className="modal-overlay"></div>
        </>
    );
}

export default UpdateModal;