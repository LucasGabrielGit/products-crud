import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "description", default: "" })
  description: string;

  @Column({ name: "price", default: "" })
  price: number;

  @Column({ name: "category" })
  category: string;
}
