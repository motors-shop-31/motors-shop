import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { ModalHeaderStryled, ModalBoryStyled } from './style';


function ModalSucess() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeaderStryled>Sucesso!</ModalHeaderStryled>
            <ModalCloseButton />
            <ModalBoryStyled>
              <p className='title'>Sua conta foi criada com sucesso!</p>
              <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
              <button>Ir para o login</button>
            </ModalBoryStyled>
          </ModalContent>
        </Modal> */}
      </>
    )
  }

  export default ModalSucess;