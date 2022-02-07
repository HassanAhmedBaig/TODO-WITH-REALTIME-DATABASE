   // Import the functions you need from the SDKs you need
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
   import { getDatabase,push,ref,set ,onValue,remove,update,} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyAhKn9xjoViTbUjwOlNaSaqkY1uUQ9Q09U",
     authDomain: "todo-with-firebase-9a638.firebaseapp.com",
     databaseURL: "https://todo-with-firebase-9a638-default-rtdb.firebaseio.com",
     projectId: "todo-with-firebase-9a638",
     storageBucket: "todo-with-firebase-9a638.appspot.com",
     messagingSenderId: "446193737475",
     appId: "1:446193737475:web:7d8ec4ee5c72fa58dd9336",
     measurementId: "G-P9RKD12SFR"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
 const db = getDatabase()
window.AddTodo = function(){
    var obj = {
        todo : document.getElementById('txt').value
    }
    var ToDoRef = push(ref(db,'Todos/'))
    obj.id = ToDoRef.key;
    set(ToDoRef,obj)


}

window.GetTodo=function(){
    var TodoList = document.getElementById('TodoList')
    onValue(ref(db,'Todos/'),function(data){
    TodoList.innerHTML=''
    // console.log(data)
    // var Todos = data.val()
    // var TodosList = Object.values(Todos)
    // console.log(TodosList)
    data.forEach(function(a){
        var Todos= a.val()
        console.log(Todos)
        TodoList.innerHTML+=`TODOS : ${Todos.todo} 
        
 <button onclick="Edit('${Todos.id}')">EDIT</button>
 <button onclick="DeleteTodo('${Todos.id}')">REMOVE</button>

 
        
        <br/>`



    })

})




}


window.Edit= function(id){
    var NewTodo = prompt('NEWTODO')
    update(ref(db,`Todos/${id}`),{
        todo : NewTodo
    })
}
window.DeleteTodo= function(id){
    
    remove(ref(db,`Todos/${id}`))
}
