import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./address.entity";
import { Comments } from "./comments.entity";
import { Product } from "./product.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250, unique: true })
  email: string;

  @Column({ length: 250, unique: true })
  name: string;

  @Column({ length: 250 })
  @Exclude()
  password: string;

  @Column({ length: 30 })
  cpf: string;

  @Column()
  birthday: Date;

  @Column({ length: 30 })
  tel: string;

  @Column({ length: 250, nullable: true })
  description: string;

  @Column({ length: 250 })
  account_type: string;

  @CreateDateColumn()
  date_creation: Date;

  @UpdateDateColumn()
  date_update: Date;

  @OneToOne((type) => Address, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  address: Address;

  @OneToMany((type) => Product, (products) => products.user)
  products: Product[];

  @OneToMany((type) => Comments, (comments) => comments.user, { eager: true })
  comments: Comments[];
}
