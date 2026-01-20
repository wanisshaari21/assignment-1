// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request<{ num: string }>, res: Response): void => {
  const num = req.params.num;

  const n = parseInt(num, 10);
  const fibN = fibonacci(n);

  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};