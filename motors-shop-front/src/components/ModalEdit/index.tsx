// import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from 'react'
import { Input } from '../Input'
import { ButtonFooter, Buttons, FormMain, InputsInfos, Modal, ModalBody, ModalHeader } from './style';
import { IPostResponse, ValuesFunctions } from '../../contexts/InputsContext';
import { ModalHeaderStryled } from '../ModalSucess/style';
import { AuthContext } from '../../contexts/modalContext';
import { ModalCloseButton } from "@chakra-ui/react";
import  { GrFormClose } from "react-icons/gr"
import ModalDelete from "../ModalDelete";

const ModalFormEdit = () =>  {
    const { formSchema, onSubmitFunction } = useContext(ValuesFunctions);
    const { modal, openModal, closeModal, openModalDelete, modalDelete} = useContext(AuthContext);
  
    const {
        register,
        handleSubmit,
        // formState: { errors }
      } = useForm<IPostResponse>({
        resolver: yupResolver(formSchema)
      });

    return modal === true ? (
      <> 
      <Modal>
        {modalDelete === true ? <ModalDelete/> : null}
        <ModalBody>
        <ModalHeader>
          <ModalHeaderStryled>Editar anuncio</ModalHeaderStryled>
          <GrFormClose id='xis' onClick={() => closeModal()}/>
        </ModalHeader>
        <div>
          <FormMain onSubmit={handleSubmit(onSubmitFunction)}>
          <label className='label'>Tipo do anuncio</label>
                  <Buttons>
                      <button className='button1'>Venda</button>
                      <button className='button2'>Leilão</button>
                  </Buttons>
                  <label className='label'>Informações de veículo</label>
                  <Input label='Título' placeholder='Mercedes Benz A 200 CGI ADVANCE SEDAN' {...register("title")}/>
                  <InputsInfos>
                      <Input label='Ano' placeholder='2018' {...register("year")}/>
                      <Input label='Quilometragem' placeholder='0' {...register("mileage")}/>
                      <Input label='Preço' placeholder='50.000.00' {...register("price")}/>
                  </InputsInfos>
                  <Input  label='Descrição'  {...register("description")} placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/> 
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
                  <Input label='Imagem de capa' placeholder='https://image.com' {...register("cover_image")}/>         
                  <Input label='1º imagem da galeria' placeholder='https://image.com' {...register("image")}/>         
                  <Input label='2º imagem da galeria' placeholder='https://image.com' {...register("image")}/>  
                  <button id='adcCampo'>Adicionar campo para imagem da galeria</button> 
                  <ButtonFooter>
                      <button className='cancel' onClick={() => openModalDelete()}>Excluir anuncio</button>
                      <button type='submit' className='enter'>Salvar alterações</button>
                  </ButtonFooter>
          </FormMain>
        </div>
        </ModalBody>
      </Modal>
    </>
 ) : null;
} 


export default ModalFormEdit