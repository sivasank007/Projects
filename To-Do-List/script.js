
const handleAdd = () => {
    let Input = document.querySelector('.form-control').value;
    let listContainer = document.querySelector('.listContainer');
    if(Input.length<=0){
        alert("Please enter something")
    }
    else{
        listContainer.innerHTML += 
        `
            <li class="d-flex align-items-center justify-content-between list-items">
                <div onclick='handleToggle(this)' class="d-flex gap-2 list-items">
                    <img class="image" style="height: 30px;width: 30px;" src="./assests/radio.png" alt="">
                    <p class="value" >${Input}</p>
                </div>
                <button onclick='handleRemove(this)' class="btn btn-sm btn-danger">X</span>
            </li>
        `
    }
    saveTask();

    document.querySelector('.form-control').value = ""
}

const handleRemove = (element) => {
    element.parentElement.remove()  
    saveTask();
}

const handleToggle = (element) => {
    console.log(element.children[1]);
    element.children[1].classList.toggle('checked')

    element.children[0].src = (element.children[1].classList.contains('checked')) ? './assests/check-circle.png' : './assests/radio.png'
    saveTask();
}

const saveTask = () => {
    let listContainer = document.querySelector('.listContainer');
    localStorage.setItem('todo',listContainer.innerHTML);
}

const showTask = () => {
    document.querySelector('.listContainer').innerHTML = localStorage.getItem('todo');
}

showTask();