import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  text: string;

  @ManyToOne((type) => Product, (product) => product.comments, {
    onDelete: "CASCADE",
  })
  product: Product;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: "CASCADE",
  })
  user: User;

  @CreateDateColumn()
  date_creation: Date;
}
