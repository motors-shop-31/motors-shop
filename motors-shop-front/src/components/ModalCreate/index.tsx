import {
  Modal, ModalBody,
  ModalCloseButton, ModalContent,
  ModalHeader, ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { GrFormClose } from "react-icons/gr";
import * as yup from "yup";
import { IPostResponse } from '../../contexts/InputsContext';
import { AuthContext } from '../../contexts/modalContext';
import api from "../../service/api";
import Options from "../Options";
import {
  BottomButtons,
  DefaultInputContainer,
  InputContainer02,
  InputContainerButtons,
  InputContainerMarginBottom, ModalBackground, ModalCard,
  ModalContainer,
  ModalFormContainer,
  ModalUpContainer,
  ModaMessageContainer
} from './style';

const ModalForm = () => {
  const { closeModal } = useContext(AuthContext);
  const [imagesURLs, setImagesURLs] = useState([""]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.body.classList.add("modal_body");
  })

  const addImage = () => {
    setImagesURLs([...imagesURLs, ""]);
  };

  const updateImage = (index: number, url: string) => {
    const newImages = [...imagesURLs];
    newImages[index] = url;
    setImagesURLs(newImages);
  };

  const formSchema = yup.object().shape({
    type: yup.string().required("Tipo obrigratório"),
    title: yup.string().required("Título obrigatório"),
    year: yup.string().required("Ano obrigatório"),
    mileage: yup.string().required("Kilometragem obrigatória"),
    price: yup.number().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    vehicle: yup.string().required("Tipo do veículo obrigatório"),
    cover_image: yup.string().required("Url da imagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IPostResponse>({
    resolver: yupResolver(formSchema)
  });

  const onSubmitFunction = (data: FieldValues) => {
    const request = { ...data, image: imagesURLs, published: true }
    console.log(request)

    api.post("/product", request, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      onOpen();
    })
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader><h2 className="Heading-7-500">Sucesso!</h2></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ModaMessageContainer>
                  <h2 className="Heading-7-500">Seu anúncio foi criado com sucesso!</h2>
                  <h3 className="opa body-1-400">Agora você poderá ver seus negócios crescendo em grande escala</h3>
                </ModaMessageContainer>
              </ModalBody>
            </ModalContent>
          </Modal>
          <ModalCard>
            <ModalUpContainer>
              <h1 className="modal_title">Criar anuncio</h1>
              <GrFormClose id='xis' onClick={() => closeModal()} />
            </ModalUpContainer>
            <ModalFormContainer onSubmit={handleSubmit(onSubmitFunction)}>
              <InputContainerButtons>
                <h2 className="body-2-500">Tipo de anúncio</h2>
                <Options
                  options={[
                    {
                      htmlFor: "Venda",
                      fieldValue: "sale",
                    },
                    {
                      htmlFor: "Leilão",
                      fieldValue: "auction",
                    },
                  ]}
                  fieldName="type"
                  register={register}
                />
                <span>{errors?.type?.message}</span>
              </InputContainerButtons>

              <DefaultInputContainer>
                <h2 className="body-2-500">Título</h2>
                <input type="text" placeholder="Digitar título" {...register("title")} />
                <span>{errors?.title?.message}</span>
              </DefaultInputContainer>

              <InputContainer02>
                <DefaultInputContainer>
                  <h2 className="body-2-500">Ano</h2>
                  <input type="text" placeholder="2018" {...register("year")} />
                  <span>{errors?.year?.message}</span>
                </DefaultInputContainer>
                <DefaultInputContainer>
                  <h2 className="body-2-500">Quilometragem</h2>
                  <input type="text" placeholder="0" {...register("mileage")} />
                  <span>{errors?.mileage?.message}</span>
                </DefaultInputContainer>
              </InputContainer02>

              <DefaultInputContainer>
                <h2 className="body-2-500">Preço</h2>
                <input type="text" placeholder="50.000,00" {...register("price")} />
                <span>{errors?.price?.message}</span>
              </DefaultInputContainer>

              <DefaultInputContainer>
                <h2 className="body-2-500">Descrição</h2>
                <textarea id="" placeholder="Digitar Descrição" {...register("description")}></textarea>
                <span>{errors?.description?.message}</span>
              </DefaultInputContainer>

              <InputContainerButtons>
                <h2 className="body-2-500">Tipo de veículo</h2>
                <Options
                  options={[
                    {
                      htmlFor: "Carro",
                      fieldValue: "car",
                    },
                    {
                      htmlFor: "Moto",
                      fieldValue: "motocycle",
                    },
                  ]}
                  fieldName="vehicle"
                  register={register}
                />
                <span>{errors?.vehicle?.message}</span>
              </InputContainerButtons>

              <DefaultInputContainer>
                <h2 className="body-2-500">Imagem da capa</h2>
                <input id="" placeholder="https://image.com" {...register("cover_image")} />
                <span>{errors?.cover_image?.message}</span>
              </DefaultInputContainer>

              {imagesURLs.map((url, index) => {
                return (
                  <InputContainerMarginBottom key={index}>
                    <h2 className="body-2-500">{index + 1 + "° Imagem da galeria"}</h2>
                    <input
                      placeholder="https://image.com"
                      onChange={(event) => {
                        updateImage(index, event.target.value)
                      }}
                    />
                  </InputContainerMarginBottom>
                );
              })}

              <button className="medium BrandOpacity" onClick={(e) => {
                e.preventDefault()
                addImage()
              }}>
                Adicionar campo para imagem da galeria
              </button>

              <BottomButtons>
                <button className="big negative" onClick={(e) => {
                  e.preventDefault()
                  closeModal()
                }}>Cancelar</button>
                <button className="big brand1">Criar anúncio</button>
              </BottomButtons>

            </ModalFormContainer>
          </ModalCard>
        </ModalContainer>
      </ModalBackground>
    </>
  )
}


export default ModalForm
