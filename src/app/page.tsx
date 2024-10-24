import { getMacros } from "./action";
import Form from "./Form";

export default function Home() {

  return (
    <Form onSubmit={getMacros}/>
  );
}
