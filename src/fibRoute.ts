// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const num: string = req.params.num;

  const n: number = parseInt(num, 10);
  const fibN: number = fibonacci(n);

  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
