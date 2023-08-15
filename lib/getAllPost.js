export default async function getAllPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (!res.ok) {
    throw new Error("Error fetching Data");
  }

  return res.json();
}
