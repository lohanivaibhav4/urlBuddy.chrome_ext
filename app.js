let saved = [];
const inputBtn = document.getElementById("saveinput-btn")
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul");

inputBtn.addEventListener("click", function(){
    saved.push(inputEl.value);
    //ulEl.innerHTML += "<li>"+ inputEl.value +"</li>" // Create A Function For This And Calling It
    //showLastSaved();
    showSaved();
    inputEl.value = "";
})


function showSaved(){
    let listItems = ""; 
    for( i=0;i<saved.length;i++)
    {
        listItems += `
        <li>
            <a href = '${saved[i]}' target='_blank'>
                 ${saved[i]}
            </a>
        </li>` 
    }
    ulEl.innerHTML = listItems 
}

// Rendering Only The Newest Item Added To The List (Only Updating Whats Necessary)










function showLastSaved(){
    const listItem = "<li>"+ inputEl.value +"</li>"
    ulEl.innerHTML += listItem;
}

 