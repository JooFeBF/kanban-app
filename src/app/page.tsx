"use client"

import { useGetColumnsQuery } from "@/redux/api";
import { WelcomePage } from '@/components/component/welcome-page'
import React from "react";


export default function Home() {
  const { data, error, isLoading } = useGetColumnsQuery(2);
  console.log("data", data);

  return (
    <body>
      <WelcomePage />
    </body>
  );
}
