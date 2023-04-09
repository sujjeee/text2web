export const sampleHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Todo Web App</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Todo Web App</h1>
    </div>
    <div class="input-box">
      <input type="text" id="input" placeholder="Enter your task">
      <button id="add-btn">Add</button>
    </div>
    <div id="list"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>`

export const sampleCss = `body {
    background-color: #333;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 20px auto;
    max-width: 600px;
  }
  
  .header {
    background-color: #555;
    padding: 20px;
    text-align: center;
  }
  
  .header h1 {
    margin: 0;
  }
  
  .input-box {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    display: flex;
    margin: 20px 0;
    padding: 10px;
  }
  
  .input-box input {
    border: none;
    flex: 1;
    font-size: 16px;
    padding: 10px;
  }
  
  .input-box button {
    background-color: #008CBA;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
  }
  
  .todo-list {
    color: black;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
    padding: 10px;
  }
  `
export const sampleJs = `const input = document.getElementById('input');
  const addBtn = document.getElementById('add-btn');
  const list = document.getElementById('list');
  
  function addTodo() {
    const todoText = input.value;
    if (todoText) {
      const todo = document.createElement('div');
      todo.classList.add('todo-list');
      todo.innerText = todoText;
      list.appendChild(todo);
      input.value = '';
    }
  }
  
  addBtn.addEventListener('click', addTodo);
  `