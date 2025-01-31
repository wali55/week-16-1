import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { InputBox } from "@repo/ui/input-box";

export default function Home() {
  return (
    <div>
      <Button appName="web" className={styles.secondary}>
        Open alert
      </Button>
      <InputBox />
    </div>
  );
}
