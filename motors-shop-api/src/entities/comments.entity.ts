import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  type: string;

  @ManyToOne((type) => Product, (product) => product.comments)
  product: Product;

  @CreateDateColumn()
  date_creation: Date;

  @UpdateDateColumn()
  date_update: Date;
}
