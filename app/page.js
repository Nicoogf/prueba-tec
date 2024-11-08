import Button from "./components/Button";
import ListUsers from "./components/ListUsers";
import { getData } from "./utils/FetchData";

export default async function Home() {

  const userList = await getData()


  return (
    <main className="w-full h-screen relative bg-slate-800 flex flex-col justify-center items-center">



      <ListUsers list = {userList} />

     
      

    </main>
  );
}
