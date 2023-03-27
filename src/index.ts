import { writeFile } from "fs";
// import { generate } from "shortid"; //server will not start if this is enabled
import express from "express";

// generate;
writeFile("", "", () => {});
const app = express();

//with types always start with first letter uppercase

//suggestion use type for everything else - by Ben Awad
type ParamsType = {
  a: number;
  b: number;
};

//suggestion use interfaces for objects - by Ben Awad
interface Params {
  a: number;
  b: number;
}

//template function type that return void nothing
//can be used with any function just change the func name and return type from void to string or number or object ...etc
type Fn = () => void;

//use the template function type above for our function below
type AddEvenMore = (x: Params) => number;

const addEvenMore: AddEvenMore = (x): number => x.a + x.b;
console.log("add even more", addEvenMore({ a: 50, b: 4 }));

//below without function type
const addMore = (x: Params): number => {
  const { a, b } = x;
  return a + b;
};
console.log("add more", addMore({ a: 10, b: 20 }));

//below handling TS errors
const add = (a: number, b?: number) => {
  //b is optional - below diff solutions to fix error

  //cast or casting it to number
  return a + (b as number);

  //OR
  //add ! to the b
  //return a + b!; //this will show error without !

  //OR
  //fixing the error
  // if (b) {
  //   return a + b;
  // } else {
  //   return a;
  // }

  //OR
  //@ts-ignore
  //return a + b; //this will show error
};

app.get("/", (req: any, res) => {
  //any or as any below
  (req as any).custom = "hassan";
  add(1, 2);
});

//if @types/express are added and still shows red underline then type
//command shit p -  then search for typescript then select Restart TS server

console.log("hello hassan from ts", add(1, 10));

app.listen(1000, () => {
  console.log("server started on 1000");
});

//in package.json
//either use ts-node-dev to keep the server running all the time without restarting or nodemon
