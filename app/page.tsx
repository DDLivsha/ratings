import Rating from "@/components/Rating/Rating";
import styles from "./page.module.css";
import { Button, Htag } from "@/components";
import { getMenu } from "@/api/get-menu";
import { MenuItem } from "@/interfaces/menu";

export default async function Home() {

  const menu: MenuItem[] = await getMenu(0);

  return (
    <div>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}
