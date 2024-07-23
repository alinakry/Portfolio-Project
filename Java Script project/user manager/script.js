const check = localStorage.getItem('users');

const users = [
    {
        fname: ' ',
        lname: ' ',
        email: ' ',
        password: ' ',
    }
];


if (check) {
    console.log('we have users');
} else {
    console.log('we dont have users');
    localStorage.setItem('users', JSON.stringify(users));
}


const register = document.querySelector('.register');

const table = document.getElementById('table');

const section = document.getElementById('section');



register.addEventListener('submit', (e) => {
    e.preventDefault(); //prevent refreshing of the page

    const obj = {
        fname: e.target['fname'].value,
        lname: e.target['lname'].value,
        email: e.target['email'].value,
        password: e.target['password'].value
    }
    const newUsers = JSON.parse(localStorage.getItem('users')) || [];
    newUsers.push(obj);
    localStorage.setItem('users', JSON.stringify(newUsers));

    //console.log(newUsers);


    function renderUsers(user) {


        let row = document.createElement('tr');

        row.classList.add('user-row');

        row.innerHTML = `
                    <td>${user.fname}</td>
                    <td>${user.lname}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td id='btn-container'>
                    <button class = 'delete-btn'>מחקה</button>
                    </td>
                        `
            ;


        table.appendChild(row);

        row.querySelector('.delete-btn').addEventListener('click', () => {
            table.removeChild(row);
            const updatedUsers = newUsers.filter(u => u.email !== user.email && u.password !== user.password);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        });

    };



    renderUsers(obj);
    register.reset();




});



const signIn = document.querySelector('.sigh-in');

signIn.addEventListener('submit', (e) => {
    e.preventDefault();


    let userMail = document.getElementById('signIn-email').value;
    let userPass = document.getElementById('sighIn-password').value;

    signIn.reset();


    const userCheck = JSON.parse(localStorage.getItem('users')) || [];




    const userSuccess = userCheck.find(u => u.email === userMail && u.password === userPass);


    if (userSuccess) {
        let row = document.querySelectorAll('.user-row');
        row.forEach((r) => {
            const userEmail = r.cells[2].textContent;
            if (userEmail === userMail) {
                const signBtn = document.createElement('button');
                signBtn.classList.add('sigh-btn');
                signBtn.textContent = 'לנתק';
                r.cells[4].appendChild(signBtn);

                signBtn.addEventListener('click', () => {
                    signBtn.style.display = 'none';
                });
            }
        });
    } else {
        alert('You need to register first');
    }

    signIn.reset();
});




//localStorage.clear();