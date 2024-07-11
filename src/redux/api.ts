"use client"

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/*
column router
router.put('/columns_position', authenticate, changeColumnPosition); // cambiar la posicion de una columna
router.get('/sections/:user_id', authenticate, getSectionsTasks); // obtener las columnas de un usuario con sus tareas
router.get('/columns/:user_id', authenticate, getColumnByUserId); // obtener las columnas de un usuario
router.post('/columns', authenticate, createColumn); // crear una nueva columna
router.put('/columns/:user_id', authenticate, updateColumn); // actualizar una columna

router.delete('/columns/:user_id', authenticate, deleteColumn); // eliminar una columna

card router
router.get('/cards/:column_id', authenticate, getCardsByColumnId);//obtener las cartas de una columna
router.post('/cards', authenticate, createCard);//crear una nueva carta
router.put('/cards/:id', authenticate, updateCard);//actualizar una carta
router.put('/cards_position', authenticate, updateCardPosition);//cambiar la posicion de una carta
router.delete('/cards/:id', authenticate, deleteCard);//eliminar una carta
*/

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kanban-con-typescript.onrender.com/' }),
  endpoints: (builder) => ({
    // Columns
    getColumns: builder.query({
      query: (userId) => ({
        url: `/api/columns/${userId}`,
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiZnJhbmtpQGdtYWlsLmNvbSIsImlhdCI6MTcyMDczNjI0NCwiZXhwIjoxNzIwNzYxNDQ0fQ.AEBs2_btS5qLtd8exGZSluxzDmh1iWcuK0MeCwoMeOc'
        },
      }),
    }),
    getColumnsWhitTasks: builder.query({
      query: (userId) => `/api/sections`,
    }),
    createColumn: builder.mutation({
      query: (body) => ({
        url: `/api/columns`,
        method: 'POST',
        body,
      })
    }),
    updateColumn: builder.mutation({
      query: ({ userId, header }) => ({
        url: `/api/columns/${userId}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImVtYWlsIjoiZnJhbmtpQGdtYWlsLmNvbSIsImlhdCI6MTcyMDczNjI0NCwiZXhwIjoxNzIwNzYxNDQ0fQ.AEBs2_btS5qLtd8exGZSluxzDmh1iWcuK0MeCwoMeOc"'
        },
      })
    }),
    deleteColumn: builder.mutation({
      query: (userId) => ({
        url: `/api/columns/${userId}`,
        method: 'DELETE',
      })
    }),
    changeColumnPosition: builder.mutation({
      query: (body) => ({
        url: `/api/columns_position`,
        method: 'PUT',
        body,
      })
    }),
    // Cards
    getCardsByColumnId: builder.query({
      query: (columnId) => `/api/cards/${columnId}`,
    }),
    createCard: builder.mutation({
      query: (body) => ({
        url: `/api/cards`,
        method: 'POST',
        body,
      })
    }),
    updateCard: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/cards/${id}`,
        method: 'PUT',
        body,
      })
    }),
    changeCardPositionIntoColumn: builder.mutation({
      query: (body) => ({
        url: `/api/cards_position`,
        method: 'PUT',
        body,
      })
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/api/cards/${id}`,
        method: 'DELETE',
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetColumnsQuery, 
  useGetColumnsWhitTasksQuery, 
  useCreateColumnMutation, 
  useUpdateColumnMutation, 
  useDeleteColumnMutation, 
  useChangeColumnPositionMutation, 
  useGetCardsByColumnIdQuery, 
  useCreateCardMutation, 
  useUpdateCardMutation, 
  useChangeCardPositionIntoColumnMutation, 
  useDeleteCardMutation
 } = api
