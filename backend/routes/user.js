import express from 'express'
import { login ,newUser} from '../controllers/user.js';
import { multerUpload } from '../middlewares/multer.js';

const app =express.Router()

app.post("/new",multerUpload.single("avatar"),newUser)
app.post("/login",login)


export default app;
