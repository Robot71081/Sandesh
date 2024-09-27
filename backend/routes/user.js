import express from 'express'
import { getMyProfile, login ,logout,newUser, searchUser} from '../controllers/user.js';
import { multerUpload } from '../middlewares/multer.js';
import { isAuth } from '../middlewares/auth.js';

const app =express.Router()

//no login required
app.post("/new",multerUpload.single("avatar"),newUser)
app.post("/login",login)

//login required
app.use(isAuth)
app.get("/me",getMyProfile)
app.get("/logout",logout)
app.get("/search",searchUser)


export default app;
