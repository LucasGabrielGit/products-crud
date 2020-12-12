import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("category")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  description: string;
}
