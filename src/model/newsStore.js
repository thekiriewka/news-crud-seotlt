import { createStore, createEvent, sample } from "effector";

/* Events */
export const addNews = createEvent();
export const deleteNews = createEvent();
export const openEdit = createEvent();
export const closeEdit = createEvent();
export const updateNews = createEvent();
export const changeEditTitle = createEvent();
export const changeEditContent = createEvent();
export const setNews = createEvent();

export const $news = createStore([])
  .on(addNews, (state, payload) => [...state, payload])
  .on(deleteNews, (state, id) => state.filter((n) => n.id !== id))
  .on(updateNews, (state, payload) =>
    state.map((n) => (n.id === payload.id ? payload : n))
  )
  .on(setNews, (_, payload) => payload);

/* Editable news */
export const $editingNews = createStore(null)
  .on(openEdit, (_, payload) => payload)
  .reset(closeEdit);

export const $editTitle = createStore("").on(changeEditTitle, (_, val) => val);
export const $editContent = createStore("").on(
  changeEditContent,
  (_, val) => val
);

/* Initializing news from localStorage */
const storedNews = localStorage.getItem("news");
if (storedNews) {
  try {
    const parsed = JSON.parse(storedNews);
    if (Array.isArray(parsed)) {
      setNews(parsed);
    }
  } catch (e) {
    console.error("Ошибка чтения новостей из localStorage:", e);
  }
}

$news.watch((state) => {
  localStorage.setItem("news", JSON.stringify(state));
});

/* Sample */
sample({
  clock: openEdit,
  fn: (news) => news.title,
  target: changeEditTitle,
});

sample({
  clock: openEdit,
  fn: (news) => news.content,
  target: changeEditContent,
});
