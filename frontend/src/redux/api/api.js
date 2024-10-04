import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api=createApi({

   reducerPath:"api",
   baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/v1/`}),
   tagTypes:["Chat","User"],

   endpoints:(builder)=>({
    myChats:builder.query({
        query:()=>({
            url:"chat/my",
            credentials:"include"
        }),
        providesTags:["Chats"]
    }),

   searchUser:builder.query({

    query:(name)=>({
        url:`user/search?name=${name}`,
        credentials:"include"
    }),

    providesTags:["User"]


   }),

   sendFriendRequest:builder.mutation({
        query:(data)=>({
            url:"user/sendrequest",
            method:"PUT",
            credentials:"include",
            body:data,
        }),
        invalidatesTags:["User"]

   }),

   getNotis:builder.query({
    query:(data)=>({
        url:"user/notifications",
       
        credentials:"include",
       
    }),
   keepUnusedDataFor:0

}),

acceptFriendRequest:builder.mutation({
    query:(data)=>({
        url:"user/acceptrequest",
        method:"PUT",
        credentials:"include",
        body:data,
    }),
    invalidatesTags:["Chat"]

}),

   })



})



export default api
export const {useMyChatsQuery,useLazySearchUserQuery,useSendFriendRequestMutation,useGetNotisQuery,useAcceptFriendRequestMutation}= api