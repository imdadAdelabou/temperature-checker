"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use("/auth", auth_route_1.default);
// //Error Handling
// app.use((err: ErrReq, req: Request, res: Response) => {
//   return res.status(err.code ?? 500).json({message: err.message});
// });
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//Install morgan and bordyParser
