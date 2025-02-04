let saved = [];
const inputBtn = document.getElementById("saveinput-btn")
const deleteAllBtn = document.getElementById("deleteAll-btn")
const grabBtn = document.getElementById("grab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

showSaved();

//GRAB-URL

grabBtn.addEventListener("click",function(){
    chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
        saved.push(tabs[0].url)
        localStorage.setItem("Saved-Links",JSON.stringify(saved))
        showSaved();
    })
    
})

//SAVE-INPUT
inputBtn.addEventListener("click", function(){
    saved.push(inputEl.value);
    //ulEl.innerHTML += "<li>"+ inputEl.value +"</li>" // Create A Function For This And Calling It
    //showLastSaved();
    localStorage.setItem("Saved-Links",JSON.stringify(saved))
    showLastSaved();
    inputEl.value = "";
})

// On Refreshing Tab, Checking Local Storage For Any Previously Saved Links And If Yes, Calling ShowSaved()
const loadLocal = JSON.parse(localStorage.getItem("Saved-Links"))
if(loadLocal){
    saved = loadLocal;
    showSaved();
}

deleteAllBtn.addEventListener("dblclick",function(){
    let itemList = "";
    ulEl.innerHTML = itemList;
    localStorage.clear();
    saved = [];
})

// Only To Be Called Once, While Page Refresh, Restart
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

 