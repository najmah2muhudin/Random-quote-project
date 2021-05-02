let btn =document.getElementById("btn");
let output = document.getElementById("output");
let quotes = 
[
    "`Happiness is an inside job ~unknown`",
    "`sunsets and self-love is all you need to save your soul`",
    "`Things will workout`",
    "`One day at a time`",
    "`Make it a habit to always be happy and smile through tough times`",
    "`usiforce`",
    "`kaa ni kuchoma choma full hakuna kuchoma half half`",
]

btn.addEventListener("click", function(){
    let randomQuotes = Math.floor(Math.random() *quotes.length);
     output.innerHTML = quotes[randomQuotes];
    
})