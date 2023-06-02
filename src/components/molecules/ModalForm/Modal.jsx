import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function ModalForm({
  show, handleSave, handleRandom, data, onHide
}) {
  const [name, setName] = useState(data.name || '')
  const [number, setNumber] = useState(data.number || '')
  const [imgUrl, setImgUrl] = useState(data.imgUrl || '')

  useEffect(() => {
    if (show) {
      setName(data.name || '');
      setNumber(data.number || '');
      setImgUrl(data.imgUrl || '');
    }
  }, [show, data]);

  return (
    <>
      <Modal centered show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Salvar ou Alterar dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nome do Contato</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: João Antonio"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Número</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: (55) 99875-4321"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Imagem do contato</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: https://www.google.com/images/teste013.png"
                onChange={(e) => setImgUrl(e.target.value)}
                value={imgUrl}
              />
            </Form.Group>
          </Form>
        </Modal.Body>


        <Modal.Footer style={{ justifyContent: 'end' }}>
          <Button variant="dark" onClick={() => handleRandom()}>
            Preenchimento Aleatório
          </Button>
          <Button variant="primary" onClick={() => handleSave({name, number, imgUrl, id: data.id})}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { ModalForm };