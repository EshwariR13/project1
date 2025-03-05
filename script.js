document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        
        // Get current date and time
        const now = new Date();
        const dateTime = now.toLocaleString();

        li.innerHTML = `${task} <span class="todo-time">${dateTime}</span>`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
});

document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-button').click();
    }
});
