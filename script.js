function sendData(){
    let names = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let date = document.getElementById('date').value;

    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch (url,{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            nombre: names,
            apellido: lastName,
            date: date,
        })
    })
    .then(response => response.json())
    .then(data =>{
        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('date').value = "";
        Swal.fire('Envío exitoso');
        console.log(data);
    })
    
};
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
});