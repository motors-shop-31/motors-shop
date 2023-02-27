import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
// import * as yup from "yup";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react'
import { Input } from '../Input'
import { Buttons, FormMain, InputsInfos } from './style';


function ModalForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        // resolver: yupResolver(formSchema)
      });
  
    function onSubmitFunction(data: any){
        console.log(data);
    }

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edição</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl onSubmit={handleSubmit(onSubmitFunction)}>
                <FormMain>
                  <label className='label'>Tipo do anuncio</label>
                  <Buttons>
                      <button className='button1'>Venda</button>
                      <button className='button2'>Leilão</button>
                  </Buttons>
                  <label className='label'>Informações de veículo</label>
                  <Input label='Título' placeholder='Mercedes Benz A 200 CGI ADVANCE SEDAN'/>
                  <InputsInfos>
                      <Input label='Ano' placeholder='2018'/>
                      <Input label='Quilometragem' placeholder='0'/>
                      <Input label='Preço' placeholder='50.000.00'/>
                  </InputsInfos>
                  <Input  label='Descrição' placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/> 
                  <label className='label'>Tipo de veículo</label>
                  <Buttons>
                      <button className='button1'>Carro</button>
                      <button className='button2'>Moto</button>
                  </Buttons> 
                  <label className='label'>Publicado</label>
                  <Buttons>
                      <button className='button1'>Sim</button>
                      <button className='button2'>Não</button>
                  </Buttons>    
                  <Input label='Imagem de capa' placeholder='https://image.com'/>         
                  <Input label='1º imagem da galeria' placeholder='https://image.com'/>         
                  <Input label='2º imagem da galeria' placeholder='https://image.com'/>  
                  <button id='adcCampo'>Adicionar campo para imagem da galeria</button> 
                  <Buttons>
                      <button className='button1'>Excluir anúncio</button>
                      <button className='button2'>Salvar alterações</button>
                  </Buttons>
                </FormMain>      
                </FormControl>
             
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }


export default ModalForm