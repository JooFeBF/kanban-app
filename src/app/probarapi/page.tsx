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
import { useEffect } from "react";
import { getUser } from "@/components/services/API_token";

export default function Page() {

  useEffect( () => {
    const createNewColumn = async () => {
      try {
        const response = await getUser();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    createNewColumn();
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}