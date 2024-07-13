"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { useKanban } from "../../context/kanbanContext";
import React, { useState, ChangeEvent } from 'react';
import { Column } from "../../types"
import { useCreateColumnMutation } from "@/redux/api";

export function ModalSection({ toggleModal }: { toggleModal: () => void }) {
  const [ title, setString ] = useState('');
  const [createColumn, { isLoading, isSuccess, isError, data, error }] = useCreateColumnMutation();
  const { columns, setColumns } = useKanban();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setString(e.target.value)
  } 

  const handleColumn = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const newColumn: Column = {
      id: columns.length + 1,
      user_id: 2,
      title: title,
      position: 1
    }

    const response = await createColumn({title: title, position: columns.length});

    setColumns((prevColumns) => [...prevColumns, response.data]);
    toggleModal();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Section</CardTitle>
        <CardDescription>Enter a title for your new Kanban section.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleColumn}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" placeholder="Enter section title" onChange={handleChange}/>
          </div>
          <div className="flex justify-end">
            <Button onClick={toggleModal} variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button type="submit">Create Section</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
