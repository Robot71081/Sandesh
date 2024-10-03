import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api=createApi({

   reducerPath:"api",
   baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/v1/`}),
   tagTypes:["Chat"],

   endpoints:(builder)=>({
    myChats:builder.query({
        query:()=>({
            url:"chat/my",
            credentials:"include"
        }),
        providesTags:["Chats"]
    })
   })

})



export default api
export const {useMyChatsQuery}= api