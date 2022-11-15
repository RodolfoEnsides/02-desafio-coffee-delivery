import { CoffeeList } from "./components/CoffeeList";
import { Introduction } from "./components/Introduction";

export function HomePage() {
  return (
    <div>
        <Introduction/>
        <CoffeeList/>
    </div>
  );
}
