
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) 
  .then(data => {
    console.log(data); 


    const tableBody = document.getElementById('userTable').querySelector('tbody');


    data.forEach(user => {
      const row = document.createElement('tr'); 
      row.innerHTML = `
        <td>${user.name}</td> 
        <td>${user.email}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Ошибка при получении данных:', error)); 
