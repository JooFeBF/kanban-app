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
          useDeleteCardMutation,
          useGetColumnsWhitTasksQuery,
          useChangeCardPositionBetweenColumnsMutation
 } from "@/redux/api"
import React from "react"

export default function Page() {
  // const {data, error, isLoading} = useGetColumnsQuery(localStorage.getItem('user_id'))
  try {
    const response = useCreateColumnMutation({title: "Columna 1", position: 5})
    console.log(response)
    console.log("pasa")
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      Hello
    </div>
  )
}