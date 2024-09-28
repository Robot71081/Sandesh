import express from 'express';
import { isAuth } from '../middlewares/auth.js';
import { newGroupChat,getMyChats ,getMyGroups,addMembers,removeMembers,leaveGroup,sendAttachments} from '../controllers/chat.js';
import {attachmentsMulter} from "../middlewares/multer.js"

const app =express.Router()



//login required
app.use(isAuth)

app.post("/new",newGroupChat)
app.get("/my",getMyChats)
app.get("/my/groups",getMyGroups)
app.put("/addmembers",addMembers)
app.put("/removemembers",removeMembers)
app.delete("/leave/:id",leaveGroup)
app.post("/message",attachmentsMulter,sendAttachments)


export default app;
