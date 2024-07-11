"use client"

import { useGetColumnsQuery } from "@/redux/api";


export default function Home() {
  const { data, error, isLoading } = useGetColumnsQuery(2);
  console.log("data", data);

  return (

    <body>
      <WelcomePage />
    </body>

  );
}
