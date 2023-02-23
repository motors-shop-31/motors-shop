import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  image: string;

  @ManyToOne((type) => Product, (product) => product.image)
  product: Product;
}
