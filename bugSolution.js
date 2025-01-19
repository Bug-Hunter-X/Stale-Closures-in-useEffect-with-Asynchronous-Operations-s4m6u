```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Use a functional update to avoid stale closures
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```