import {
  Button,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
} from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Options from "../Options";
import { FieldValues, useForm } from "react-hook-form";
import { IProductUpdate } from "../../contexts/InputsContext";
import { BottomButtons, DefaultInputContainer, InputContainer02, InputContainerButtons, ModalBackground, ModalCard, ModalFormContainer, ModalUpContainer } from "../ModalCreate/style";
import { GrFormClose } from "react-icons/gr";

import api from "../../service/api";

interface modalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  idProduct: string;
}

export const ModalEdit = ({ state, setState, children, idProduct }: modalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const formSchema = yup.object().shape({
    type: yup.string(),
    title: yup.string(),
    year: yup.string(),
    // price: yup.number(),
    description: yup.string(),
    vehicle: yup.string(),
    cover_image: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductUpdate>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data: FieldValues) => {
      api.patch(`/product/${idProduct}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setState(!state)
        })
      .catch((err) => {
        console.log(err.response.data.error)
      })
  }

  const onDeleteFunction = (idProduct: string) => {
    api.delete(`/product/${idProduct}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      setState(!state)
      })
    .catch((err) => {
      console.log(err.response.data.error)
    })
}

  return (
    <Modal isOpen={state} onClose={() => setState(!state)}>
      <ModalBackground>
      <ModalContent>
             <ModalCard>
            <ModalUpContainer>
              <h1 className="modal_title">Editar anuncio</h1>
              <GrFormClose id="xis" onClick={() => setState(!state)} />
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
                <input
                  type="text"
                  placeholder="Digitar título"
                  {...register("title")}
                />
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
                <input
                  type="text"
                  placeholder="50.000,00"
                  {...register("price")}
                />
                <span>{errors?.price?.message}</span>
              </DefaultInputContainer>

              <DefaultInputContainer>
                <h2 className="body-2-500">Descrição</h2>
                <textarea
                  id=""
                  placeholder="Digitar Descrição"
                  {...register("description")}
                ></textarea>
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
                <input
                  id=""
                  placeholder="https://image.com"
                  {...register("cover_image")}
                />
                <span>{errors?.cover_image?.message}</span>
              </DefaultInputContainer>

              <button
                className="medium BrandOpacity"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Adicionar campo para imagem da galeria
              </button>

              <BottomButtons>
                <button
                  className="big negative"
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteFunction(idProduct)
                  }}
                >
                  Excluir anuncio
                </button>
                <button className="big brand1">Salvar alterações</button>
              </BottomButtons>
            </ModalFormContainer>
          </ModalCard>
          </ModalContent>
          </ModalBackground>
    </Modal>
  );
};
