import { useQuery } from "@tanstack/react-query";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

function App() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error instanceof Error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>Posts List</h1>
      {data?.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
