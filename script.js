var arrayOfLines = document.getElementById('message').value;
const button = document.getElementById("submit");
// let sentence = arrayOfLines
// console.log(arrayOfLines)

let sentence = "Hello my name is Bek and I do not know how to paste here sentences from arrayOfLines re re er re re re er re";
let words = sentence.split(" ");
// console.log(words);
// var words = []
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < words.length; i++) {
    for (var j = i; j < words.length; j++) {
        if (words[i] == words[j]) m++;
        if (mf< m) {
            mf = m;
            item= words[i];
        }
    }

    m=0
}


button.addEventListener('click', () => {
    alert( "The most frequent word of the message is: "+item + " ( " + mf + "times)\n"+ " The number of words in the message:" + words.length);
} )

/*I can make it work, but I need extra time(I guess*)
// const randomPhrasesAndPictures = [
//     {
//         phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
//         imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
//     },
//     {
//         phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
//         imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
//     },
//     {
//         phrase: "You are a wizard, Harry (c) Hagrid",
//         imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
//     }
// ]
