import Button from '../../../shared/uiXeny/components/Button/Button';
import Modal from '../../../shared/uiXeny/components/Modal/Modal';
import React from 'react';

const StyleModal = ({ open, onClose, onOk }) => {
  const styles = ['botania, default,'];

  return (
    <Modal
      open={open}
      title={'Добавить место работы'}
      onClose={onClose}
      footerActions={[
        <Button onClick={onClose} key={1}>
          Отмена
        </Button>,
        <Button buttonType="primary" key={2} onClick={onOk}>
          Ок
        </Button>,
      ]}
    ></Modal>
  );
};

export default StyleModal;
