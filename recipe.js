
let container=document.getElementById('container')
let data
let id;
let search;

// let arr=document.querySelectorAll('#filtering>button')




let searchMe= async ()=>{
    // if(!search){
    //     value="chicken"
    // }else{
        try{
            search=document.getElementById('search_bar').value
            // value=search
            let res=await fetch(`https://api.spoonacular.com/food/search?query=${search}&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
            
            data=await res.json()
            let actual_data=data.searchResults[0].results
            // console.log('data:', actual_data)
            appendData(data)
            localStorage.setItem('empty','full')
        }catch(err){
            console.log(err);
        }
    }
    

    let defaultFunction= async ()=>{
        // if(!search){
        //     value="chicken"
        // }else{
            try{
                // search=document.getElementById('search_bar').value
                // value=search
                let res=await fetch(`https://api.spoonacular.com/food/search?query=&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
                
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
                localStorage.setItem('empty','full')
            }catch(err){
                console.log(err);
            }
        }
defaultFunction()









// }

// arr.forEach(element => {
//     element.addEventListener('click',func)
//     function func(){
//         search=(element.id)
//         searchMe()
//         // localStorage.setItem('empty','full')
//     }
// });


    function appendData(data){
        container.innerHTML=null
        data.searchResults[0].results.forEach(element => {
            let div=document.createElement("div")
    
            let img=document.createElement("img")
            img.src=element.image

            let name=document.createElement("h3")
            name.innerHTML=element.name

            let rating=document.createElement("p")
            rating.innerText="4.0 ⭐⭐⭐⭐ 1380 Reviews"

            let calories=document.createElement("p")
            calories.innerText="⌚30min  🔥295 Calories"
    
            div.append(img,name,rating,calories)
            container.append(div)
            
        });
    }


    let chinese=document.getElementById('chinese')
    async function China(){
        try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=chinese&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }


    let quick=document.getElementById('quick')
    async function Quick(){
        try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=quick&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }

    let burger=document.getElementById('burger')
    async function Burger(){
        try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=burger&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }

    let desert=document.getElementById('desert')
    async function Desert(){
        try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=dess&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }




    let all=document.getElementById('all')
    async function All(){
    try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=a&number=100&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }

    let most=document.getElementById('most')
    async function Most(){
    try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=po&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }

    let special=document.getElementById('special')
    async function Special(){
    try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=sp&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)

    }catch(err){
        console.log(err);
    }
    }

    let recipe=document.getElementById('recipe')
    async function Bevrages(){
    try{
            let res=await fetch(`https://api.spoonacular.com/food/search?query=be&number=30&apiKey=6601f3596bbc48d18afb36d368315f0d`)
             
                data=await res.json()
                let actual_data=data.searchResults[0].results
                // console.log('data:', actual_data)
                appendData(data)
    }catch(err){
        console.log(err);
    }
    }
    function showMenu() {
        let mobileview = document.querySelector(".mobile-access-btn");
        let data = document.getElementById("nav");
        let mobileMenu = document.querySelector(".mobile-menu");
        if (mobileMenu.style.display == "none") {
          mobileMenu.style.display = "block";
          mobileview.innerHTML=null;
          mobileview.append(data);
        } else {
          mobileMenu.style.display = "none";
        }
      }

    // let home=document.getElementById('search_bar').addEventListener('input',function(){
    //     localStorage.setItem('empty','empty')
    // })
    
    // let empty = localStorage.getItem('empty')
    // if(empty=='full'){
    //     console.log('empty');
    // }else{
    //     search='in'
    //     searchMe()
    // }


    function premium(){
        window.location.href='checkout.html'
    }
