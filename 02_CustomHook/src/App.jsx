import useFetch from "./Hooks/useFetch";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const [fetchData, error, loading] = useFetch(API_URL);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {fetchData &&
        fetchData?.map((item) => (
          <ul key={item?.id}>
            <li>{item?.name}</li>
            <li>{item?.phone}</li>
            <li>{item?.email}</li>
          </ul>
        ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};
export default App;
