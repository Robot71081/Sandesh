import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const api=createApi({

   reducerPath:"api",
   baseQuery:fetchBaseQuery({baseUrl:`http://localhost:3000/api/v1/`}),
   tagTypes:["Chat","User","Message"],

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

chatDetails:builder.query({
    query:({chatId,populate=false})=>{
       let url =`chat/${chatId}`
       if(populate) url+="?populate=true"

        return {
            url,
            credentials:"include"
        }
       
    },
   providesTags:["Chat"]

}),

getMessages:builder.query({
    query:({chatId,page})=>({
         
        url:`chat/message/${chatId}?page=${page}`,
            credentials:"include"
    }),
    
   keepUnusedDataFor:0

}),

sendAttachments:builder.mutation({
    query:(data)=>({
        url:"chat/message",
        method:"POST",
        credentials:"include",
        body:data,
    }),
    

}),

myGroups:builder.query({
    query:()=>({
        url:"chat/my/groups",
        credentials:"include"
    }),
    providesTags:["Chats"]
}),

availableFriends: builder.query({
    query: ( chatId ) => {
      let url = `user/friends`;
      if (chatId) {
        url += `?chatId=${chatId}`;
      }
  
      return {
        url,
        credentials: "include",
      };
    },
    providesTags: ["Chat"],
  }),
  


   })



})



export default api
export const {useAvailableFriendsQuery,useMyGroupsQuery,useSendAttachmentsMutation,useGetMessagesQuery,useMyChatsQuery,useLazySearchUserQuery,useSendFriendRequestMutation,useGetNotisQuery,useAcceptFriendRequestMutation,useChatDetailsQuery}= api