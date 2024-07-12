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
import React from "react";
import { useState } from "react";

export default function Page() {
  try {
    const response = useCreateColumnMutation( { title: "probar", position: 5 } );
    console.log(response)
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      Hello
    </div>
  )
}