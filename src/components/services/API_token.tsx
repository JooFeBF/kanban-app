import AxiosInstance from './Interface_axios';

// Get user
export async function getUser(){
  const data = await  AxiosInstance.get(`user/${localStorage.getItem('user_id')}`);
  return data;
}

// Create user
export async function createUser( username: string, email: string, password: string ){
  const data = await  AxiosInstance.post('user/register', { username, email, password });
  return data;
}

// Login user 
export async function loginUser( email: string, password: string ){
  const data = await  AxiosInstance.post('user/login', { email, password });
  console.log(data);
  return data;
}

// Logout user 
export async function logoutUser(){
  const data = await  AxiosInstance.get('user/logout');
  return data;
}

// Delete user 
export async function deleteUser( id: number){
  const data = await  AxiosInstance.delete( `cards/${id}`) 
  return data;
}

// Change username whit email and password 
export async function changeUserName( newUsername: string, email: string ){
  const data = await  AxiosInstance.put('user/update/username', { newUsername, email });
  return data;
}

// change email 
export async function changeEmail(email: string, newEmail: string ){
  const data = await  AxiosInstance.put('user/update/email', { 
    email, newEmail });
  return data;
} 

// change password 
export async function changePassword(email: string , newPassword: string ){
  const data = await  AxiosInstance.put('user/update/password', { email, newPassword });
  return data;
}


// Create column
export async function createColumn( user_id: number, title: string, position: number ){
  const data = await  AxiosInstance.post('columns', { user_id, title, position });
  return data;
}

// Create card
export async function createCard(user_id: number, column_id: number, title: string, description: string, position: number ){
  const data = await  AxiosInstance.post('cards', { column_id, title, description, user_id, position });
  return data;
}

// change position column
export async function changePositionColumn( column_id: number, position: number){
  const data = await  AxiosInstance.put('columns_position', { column_id, position });
  return data;
}

// chage position card
export async function changePositionCard( id: number , position: number ){
  const data = await  AxiosInstance.put('cards_position', { id, position });
  return data;
} 


// Delete a column 
export async function deleteColumn( id: number ){
  const data = await  AxiosInstance.delete(`columns/${id}`);
  return data;
}

// Delete a card
export async function deleteCard( id: number){
  const data = await  AxiosInstance.delete(`cards/${id}`);
  return data;
}



