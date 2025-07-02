import Rating from "@/components/Rating/Rating";
import styles from "./page.module.css";
import { Button, Htag } from "@/components";
import { getMenu } from "@/api/get-menu";
import { MenuItem } from "@/interfaces/menu";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";

export default async function Home() {

  return (
    <div>
      <Input />
      <Textarea />
    </div>
  );
}
