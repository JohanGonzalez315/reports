import { UseCase } from "../../../kernel/contract";
import { TUser } from "../entities/user";
import { IUserRepository } from "./ports/user.repository";
//npm run dev


export class SaveUserInteractor implements UseCase<TUser, boolean> {
    constructor(private userRepository: IUserRepository) {}

    async execute(user: TUser): Promise<boolean> {
        return await this.userRepository.save(user);
    }
}
