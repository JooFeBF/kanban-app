"use client"

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/*
column router
router.put('/columns_position', authenticate, changeColumnPosition); // cambiar la posicion de una columna
router.get('/sections/:user_id', authenticate, getSectionsTasks); // obtener las columnas de un usuario con sus tareas
router.get('/columns/:user_id', authenticate, getColumnByUserId); // obtener las columnas de un usuario
router.post('/columns/create', authenticate, createColumn); // crear una nueva columna
router.put('/columns/:user_id', authenticate, updateColumn); // actualizar una columna

router.delete('/columns/:id', authenticate, deleteColumn); // eliminar una columna

card router
router.get('/cards/:column_id', authenticate, getCardsByColumnId);//obtener las cartas de una columna
router.post('/cards', authenticate, createCard);//crear una nueva carta
router.put('/cards/:id', authenticate, updateCard);//actualizar una carta
router.put('/cards_position', authenticate, updateCardPosition);//cambiar la posicion de una carta
router.patch('/cards/position_column', updateCardPosition_column)// cambia la posicon de la targeta 
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
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }),
    }),
    getColumnsWhitTasks: builder.query({
      query: () => ({
        url: `/api/sections`,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    createColumn: builder.mutation({
      query: ({ title, position }) => ({
        url: `/api/columns/create`,
        method: 'POST',
        body: { title, position },
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    updateColumn: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/api/columns/${userId}`,
        method: 'PUT',
        body: body,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    deleteColumn: builder.mutation({
      query: (id) => ({
        url: `/api/columns/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    changeColumnPosition: builder.mutation({
      query: (propiedades) => ({
        url: `/api/columns_position`,
        method: 'PUT',
        body: propiedades,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    // Cards
    getCardsByColumnId: builder.query({
      query: (columnId) => ({
        url: `/api/cards/${columnId}`,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }),
    }),
    createCard: builder.mutation({
      query: (propiedades) => ({
        url: `/api/cards`,
        method: 'POST',
        body: {
          ...propiedades
        },
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    updateCard: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/cards/${id}`,
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    changeCardPositionIntoColumn: builder.mutation({
      query: (body) => ({
        url: `/api/cards_position`,
        method: 'PUT',
        body,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    changeCardPositionBetweenColumns: builder.mutation({
      query: (body) => ({
        url: `/api/cards/position_column`,
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/api/cards/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
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
  useDeleteCardMutation,
  useChangeCardPositionBetweenColumnsMutation
 } = api
