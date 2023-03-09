import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { GrFormClose } from "react-icons/gr";
import * as yup from "yup";
import {
  IPostResponse,
  IProductUpdate,
  ValuesFunctions,
} from "../../contexts/InputsContext";
import { AuthContext } from "../../contexts/modalContext";
import api from "../../service/api";
import Options from "../Options";
import {
  BottomButtons,
  DefaultInputContainer,
  InputContainer02,
  InputContainerButtons,
  InputContainerMarginBottom,
  ModalBackground,
  ModalCard,
  ModalContainer,
  ModalFormContainer,
  ModalUpContainer,
  ModaMessageContainer,
} from "../ModalCreate/style";
import { ModalBoryStyled, ModalHeaderStryled } from "../ModalSucess/style";
import { FormStyleConteiner } from "../userModal/style";

interface props {
  // id: string;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFormEdit = ({ modalOpen, setModalOpen }: props) => {
  const { formSchema, onSubmitFunction2 } = useContext(ValuesFunctions);
  const { closeModal, modalDelete } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(modalOpen);
  // console.log(id)

  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<IProductUpdate>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    document.body.classList.add("modal_body");
  });

  // const onSubmitFunction2 = (data: FieldValues) => {
  //   const request = { ...data}

  //   api.patch(`/product/${id}`, request, {
  //     headers: {
  //       "Authorization": `Bearer ${localStorage.getItem("token")}`
  //     }
  //   }).then((res) => {
  //     onOpen();
  //   })
  // };

  return (
    <>
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeaderStryled>Editar perfil</ModalHeaderStryled>
        <ModalCloseButton />
        <ModalBoryStyled>
          <h1>oi</h1>
          {/* <FormStyleConteiner>{children}</FormStyleConteiner> */}
        </ModalBoryStyled>
      </ModalContent>
    </Modal>
    </>
      //  <ModalBackground>
      //   <ModalContainer>
      //     <Modal isOpen={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
      //       <ModalOverlay />
      //     </Modal>
      //     <ModalCard>
      //       <ModalUpContainer>
      //         <h1 className="modal_title">Editar anuncio</h1>
      //         <GrFormClose id="xis" onClick={() => closeModal()} />
      //       </ModalUpContainer>
      //       <ModalFormContainer onSubmit={handleSubmit(onSubmitFunction2)}>
      //         <InputContainerButtons>
      //           <h2 className="body-2-500">Tipo de anúncio</h2>
      //           <Options
      //             options={[
      //               {
      //                 htmlFor: "Venda",
      //                 fieldValue: "sale",
      //               },
      //               {
      //                 htmlFor: "Leilão",
      //                 fieldValue: "auction",
      //               },
      //             ]}
      //             fieldName="type"
      //             register={register}
      //           />
      //         </InputContainerButtons>
      //         <DefaultInputContainer>
      //           <h2 className="body-2-500">Título</h2>
      //           <input
      //             type="text"
      //             placeholder="Digitar título"
      //             {...register("title")}
      //           />
      //         </DefaultInputContainer>

      //         <InputContainer02>
      //           <DefaultInputContainer>
      //             <h2 className="body-2-500">Ano</h2>
      //             <input type="text" placeholder="2018" {...register("year")} />

              //     <span>{errors?.year?.message}</span> 
              //   </DefaultInputContainer>
              //   <DefaultInputContainer>
              //     <h2 className="body-2-500">Quilometragem</h2>
              //     <input type="text" placeholder="0" {...register("mileage")} />
              //   </DefaultInputContainer>
              // </InputContainer02>

              // <DefaultInputContainer>
              //   <h2 className="body-2-500">Preço</h2>
              //   <input
              //     type="text"
              //     placeholder="50.000,00"
              //     {...register("price")}
              //   />
              // </DefaultInputContainer>

              // <DefaultInputContainer>
              //   <h2 className="body-2-500">Descrição</h2>
              //   <textarea
              //     id=""
              //     placeholder="Digitar Descrição"
              //     {...register("description")}
              //   ></textarea>
              // </DefaultInputContainer>

              // <InputContainerButtons>
              //   <h2 className="body-2-500">Tipo de veículo</h2>
              //   <Options
              //     options={[
              //       {
              //         htmlFor: "Carro",
              //         fieldValue: "car",
              //       },
              //       {
              //         htmlFor: "Moto",
              //         fieldValue: "motocycle",
              //       },
              //     ]}
              //     fieldName="vehicle"
              //     register={register}
              //   />
              //    <span>{errors?.vehicle?.message}</span>
              // </InputContainerButtons>

              // <DefaultInputContainer>
              //   <h2 className="body-2-500">Imagem da capa</h2>
              //   <input
              //     id=""
              //     placeholder="https://image.com"
              //     {...register("cover_image")}
              //   />
              // </DefaultInputContainer> 

              //  {imagesURLs.map((url, index) => {
              //   return (
              //     <InputContainerMarginBottom key={index}>
              //       <h2 className="body-2-500">{index + 1 + "° Imagem da galeria"}</h2>
              //       <input
              //         placeholder="https://image.com"
              //         onChange={(event) => {
              //           updateImage(index, event.target.value)
              //         }}
              //       />
              //     </InputContainerMarginBottom>
              //   );
              // })} 

      //         <button
      //           className="medium BrandOpacity"
      //           // onClick={(e) => {
      //           //   e.preventDefault()
      //           //   addImage()
      //           // }}
      //         >
      //           Adicionar campo para imagem da galeria
      //         </button>

      //         <BottomButtons>
      //           <button
      //             className="big negative"
      //             onClick={(e) => {
      //               e.preventDefault();
      //               closeModal();
      //             }}
      //           >
      //             Excluir anuncio
      //           </button>
      //           <button className="big brand1">Editar anúncio</button>
      //         </BottomButtons>
      //       </ModalFormContainer>
      //     </ModalCard>
      //   </ModalContainer>
      // </ModalBackground>



      // <Modal>
      //   {modalDelete === true ? <ModalDelete/> : null}
      //   <ModalBody>
      //   <ModalHeader>
      //     <ModalHeaderStryled>Editar anuncio</ModalHeaderStryled>
      //     <GrFormClose id='xis' onClick={() => closeModal()}/>
      //   </ModalHeader>
      //   <div>
      //     <FormMain onSubmit={handleSubmit(onSubmitFunction)}>
      //     <label className='label'>Tipo do anuncio</label>
      //             <Buttons>
      //                 <button className='button1'>Venda</button>
      //                 <button className='button2'>Leilão</button>
      //             </Buttons>
      //             <label className='label'>Informações de veículo</label>
      //             <Input label='Título' placeholder='Mercedes Benz A 200 CGI ADVANCE SEDAN' {...register("title")}/>
      //             <InputsInfos>
      //                 <Input label='Ano' placeholder='2018' {...register("year")}/>
      //                 <Input label='Quilometragem' placeholder='0' {...register("mileage")}/>
      //                 <Input label='Preço' placeholder='50.000.00' {...register("price")}/>
      //             </InputsInfos>
      //             <Input  label='Descrição'  {...register("description")} placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'/> 
      //             <label className='label'>Tipo de veículo</label>
      //             <Buttons>
      //                 <button className='button1'>Carro</button>
      //                 <button className='button2'>Moto</button>
      //             </Buttons> 
      //             <label className='label'>Publicado</label>
      //             <Buttons>
      //                 <button className='button1'>Sim</button>
      //                 <button className='button2'>Não</button>
      //             </Buttons>    
      //             <Input label='Imagem de capa' placeholder='https://image.com' {...register("cover_image")}/>         
      //             <Input label='1º imagem da galeria' placeholder='https://image.com' {...register("image")}/>         
      //             <Input label='2º imagem da galeria' placeholder='https://image.com' {...register("image")}/>  
      //             <button id='adcCampo'>Adicionar campo para imagem da galeria</button> 
      //             <ButtonFooter>
      //                 <button className='cancel' onClick={() => openModalDelete()}>Excluir anuncio</button>
      //                 <button type='submit' className='enter'>Salvar alterações</button>
      //             </ButtonFooter>
      //     </FormMain>
      //   </div>
      //   </ModalBody>
      // </Modal> 

  )
};

export default ModalFormEdit;
