// import { Response } from "express";
// import { ICustomer } from "../../../../models/Customer";
// import { statusCode } from "../../../protocols";
// import { IGetCustomersController, IGetCustomersRepository } from "./protocols";

// export class GetCustomersController implements IGetCustomersController {
//   constructor(
//     private readonly getAllCustomersRepository: IGetCustomersRepository
//   ) {}

//   async handleGetAllCustomers(): Promise<Response<ICustomer[]>> {
//     try {
//       const getAllCustomers =
//         await this.getAllCustomersRepository.getAllCustomers();
//       return { statusCode: statusCode.OK, body: getAllCustomers };
//     } catch (error) {
//       return {
//         statusCode: statusCode.BadRequest,
//         body: "Ocorreu um erro" + error,
//       };
//     }
//   }
// }
