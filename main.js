
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});


const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Iltimos, vazifani kiriting!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-btn');
  editButton.addEventListener('click', () => {
    const newText = prompt('Soz yozing');  
    if (newText !== null && newText.trim() !== '') {
      li.firstChild.textContent = newText; 
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', () => {
    li.remove(); 
  });

  
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  tasksList.appendChild(li);

  taskInput.value = '';  
});












// const userName = document.getElementById("user");
// const knopka = document.getElementById("form");

// knopka.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const dom = document.createElement("h1");
//     dom.textContent = `Hello, ${userName.value}!`;
//     document.body.appendChild(dom);
//     userName.value = "";

// })


// const elForm = document.getElementById("form");
// const elInput = document.getElementById("user");
// const box = document.getElementById("list");

// elForm.addEventListener("submit", (anonim) => {
//     anonim.preventDefault();
//     const inputningQiymati = elInput.value;

//     const newLi = document.createElement("li");
//     const userName = document.getElementById("h2");
//     const check = document.getElementById("input");
//     const deleteBtn = document.getElementById("button");
//     const editBtn = document.getElementById("button");

//     newLi.className = "item"

//     userName.textContent = inputningQiymati;
//     check.type = "checkbox";
//     deleteBtn.textContent = "Delete";
//     editBtn.textContent = "Edit";

//     newLi.append(check,userName,deleteBtn,editBtn);
//     box.append(newLi);

//     elInput

    
    
// }):








