// Dao | "Service Repositorio"
import { hash } from "../../../kernel/functions";
import { pool } from "../../../config/postgres";
import { TUser } from "../entities/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = `SELECT * FROM users ORDER BY id DESC;`
        const {rows: userRows} = await pool.query(query)
        return userRows.map(user => <TUser> user);
    }
    findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }

    async save(user: TUser): Promise<boolean> {
        const password = await hash(user.password)
        const query = `INSERT INTO users (username, password, status) VALUES (${user.username}, ${password}, ${user.status}) RETURNING *;`
        const {rows: userRows} = await pool.query(query)
        return userRows.length > 0;
    }

    update(user: TUser): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }  
}
// Escribe una respuesta de cómo es el ciclo de vida de un service worker
