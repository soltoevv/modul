



const input = document.querySelector('.text-input')
const input_tell = document.querySelector('.tell-input')
const btn = document.querySelector('.save-btn')
const ul = document.querySelector('.list')

btn.addEventListener('click', () => {
    newToDo()
})

// input.addEventListener('keydown',(e) =>{
//     switch (e.key){
//         case "Enter" : newToDo()
//             break;
//         case "Delete" :  input.value = ""
//             break;
//     }

    // if (e.key === "Enter"){
    //     newToDo()
    // }
    // if (e.key === "Delete"){
    //     input.value = ""
    // }
// })

function newToDo() {
    if (input.value !== "" && input_tell.value !== ""){
        const newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
 <span class="d-flex align-items-center">
 <div class="circle"> ${input.value[0]}</div>
 <input type="checkbox" class="check-box mx-2">
${input.value} ${input_tell.value}
</span>
<button class="del-btn btn btn-danger" >delete</button></li>`
        ul.innerHTML += newList
    }
}

ul.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains('del-btn')){
        e.target.parentNode.remove()
    }
    if (e.target.classList.contains('check-box')){
        // if (!e.target.parentNode.classList.contains('line')){
        //     e.target.parentNode.classList.add('line')
        // } else{
        //     e.target.parentNode.classList.remove(  'line')

        e.target.parentNode.classList.toggle('line')
    }
})
