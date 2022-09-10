import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/**Para o import do Typeorm funcionar é necessario instalar ele primeiro com o comando 
 * npm install typeorm
 */

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    username:string;

}