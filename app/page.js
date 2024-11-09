import ListUsers from "./components/ListUsers";
import Windows from "./components/Windows";
import { getData } from "./utils/FetchData";

export default async function Home() {

  const userList = await getData()


  return (
    <main className="w-full h-screen relative bg-gradient flex flex-col justify-center items-center ">

      <ListUsers list = {userList} />

      <Windows />   
      

    </main>
  );
}
