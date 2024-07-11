"use client"

import { useGetColumnsQuery } from "@/redux/api";

export default function Home() {
  const { data, error, isLoading } = useGetColumnsQuery(2);
  console.log("data", data);


  return (
    <main>
      Here i am using rtk query
    </main>
  );
}