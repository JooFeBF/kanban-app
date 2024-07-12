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

export default function Page() {
  const [createColumn, { isLoading, isSuccess, isError, data, error }] = useCreateColumnMutation();

  useEffect(() => {
    const createNewColumn = async () => {
      try {
        const response = await createColumn({ title: "probar", position: 5 });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    createNewColumn();
  }, [createColumn]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && <p>Column created successfully!</p>}
      {isError && <p>Error creating column: {error.toString()}</p>}
      <p>Hello</p>
    </div>
  );
}