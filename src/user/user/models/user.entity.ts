import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/**Para o import do Typeorm funcionar é necessario instalar ele primeiro com o comando 
 * npm install typeorm
 */

@Entity('user')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    username:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLowerCase();
    }

}