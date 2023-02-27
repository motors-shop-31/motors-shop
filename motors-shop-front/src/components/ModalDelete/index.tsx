import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { ModalHeaderStryled, ModalBoryStyled } from './style';





function ModalDelete() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeaderStryled>Excluir anúncio</ModalHeaderStryled>
            <ModalCloseButton />
            <ModalBoryStyled>
              <p className='title'>Tem certeza que deseja remover este anúncio?</p>
              <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>
              <div className='buttons'>
                <button className='cancel'>Cancelar</button>
                <button className='delete'>Sim, excluir anúncio</button>
              </div>
              
            </ModalBoryStyled>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalDelete;