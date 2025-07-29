import { useUnit } from "effector-react";
import { $news } from "../model/newsStore";
import { NewsForm } from "./NewsForm";
import { NewsItem } from "./NewsItem";

export function NewsList() {
  const news = useUnit($news);

  return (
    <div>
      <NewsForm />
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
