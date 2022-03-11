import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor (
        private createUserUseCase : CreateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email} = request.body;

        try {
          await this.createUserUseCase.execute({
            name,
            email
          })

          return response.status(201).json({msg: "Usuário criado com sucesso"});  
        } catch (err) {
          return response.status(400).json({
            message: err.message || 'Unexpected error.'
          })
        }
    } 
}