"use client"

import { useGetColumnsQuery,
          useCreateColumnMutation,
          useUpdateColumnMutation,
          useDeleteColumnMutation,
          useChangeColumnPositionMutation,
          useGetCardsByColumnIdQuery,
          useCreateCardMutation,
          useUpdateCardMutation,
          useChangeCardPositionIntoColumnMutation,
          useDeleteCardMutation
 } from "@/redux/api"

export default function Page() {
  const {data, error, isLoading} = useGetColumnsQuery(2)
  console.log(data)
  console.log(error)
  console.log(isLoading)

  return (
    <div >
      Hello
    </div>
  )
}