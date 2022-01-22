import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";

@Entity("orders")
export class Order {
    @PrimaryColumn('uuid')
    id : string;

    @Column()
    order : string;

    @ManyToOne(() => Game, (game) => game.order)
    games: Game[];

    @Column()
    uniPrice: number;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}