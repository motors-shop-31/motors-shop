import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Comments } from "./comments.entity";
import { Image } from "./image.entity";
import { User } from "./user.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  type: string;

  @Column({ length: 250 })
  title: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column({ type: "float" })
  price: number;

  @Column({ length: 250 })
  description: string;

  @Column({ length: 250 })
  vehicle: string;

  @Column()
  published: boolean;

  @Column({ type: "text" })
  cover_image: string;

  @OneToMany((type) => Image, (image) => image.product, {
    eager: true,
  })
  image: Image[];

  @OneToMany((type) => Comments, (comments) => comments.product, {
    eager: true,
  })
  comments: Comments[];

  @ManyToOne((type) => User, (user) => user.products, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  date_creation: Date;

  @UpdateDateColumn()
  date_update: Date;
}
