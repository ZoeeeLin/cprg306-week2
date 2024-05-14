import Link from "next/link";
import MyFirstComponent from "../components/my-first-component";

export default function Page2(){
    return(
        <main>
            <h1>This is page 2</h1>
            <p>Ho la aaaaaaaaaaaaaaaaaaaaaaa</p>
            <MyFirstComponent />
            <Link href="../">Back</Link>
        </main>
    )
}