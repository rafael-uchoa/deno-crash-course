window.addEventListener('load', () => {
  console.log('Loaded');
});

window.addEventListener('unload', () => {
  console.log('Unloaded');
});

await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => console.log(data));
