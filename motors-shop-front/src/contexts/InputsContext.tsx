import { createContext, ReactNode, useContext, useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export interface IPostResponse{
    type: string;
    title: string;
    year: number;
    mileage: number;
    price: number;
    description: string;
    vehicle: string;
    published: boolean;
    cover_image: string;
    image: string[];
}

interface Values {
    formSchema: any;
    onSubmitFunction: (data: IPostResponse) => void;
}

export const ValuesFunctions = createContext<Values>({} as Values);
