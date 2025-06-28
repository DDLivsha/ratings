import Rating from "@/components/Rating/Rating";
import styles from "./page.module.css";
import { Button, Htag } from "@/components";

export default function Home() {

  return (
    <div>
      <Htag tag="h1">Heading</Htag>
      <Button appearance="primary">Button</Button>
      <Rating rating={4} isEditable={true} />
    </div>
  );
}
