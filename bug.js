```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
    // Potential bug: if an asynchronous operation is started here, 
    // it might lead to stale closures, where the effect uses an outdated value of count.
    const timeoutId = setTimeout(() => {
      setCount(count + 1); // This might use a stale value of count
    }, 1000);
    return () => clearTimeout(timeoutId); // Cleanup function
  }, [count]); // Add count to the dependency array to re-run the effect when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```