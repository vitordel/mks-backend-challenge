import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'movie'})
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  synopsis: string;

  @Column({length: 255})
  cover: string;

  @Column('int')
  duration: number;

  @Column('float')
  rating: number;
}