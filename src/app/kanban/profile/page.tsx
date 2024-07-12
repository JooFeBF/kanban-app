"use client"
import { Profile } from '@/components/component/profile'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function ProfilePage() {
  const router = useRouter()
   useEffect(() => {
  
    if ( !localStorage.token   )
      router.push("/login") 
     } ,  ) ; 
  return (
    <Profile />
  );
}