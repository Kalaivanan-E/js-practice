

document.addEventListener('DOMContentLoaded',function(){


    const input = document.querySelector('textarea');
    const characterCount = document.querySelector("#characterCount");

    const wordCount = document.querySelector("#wordCount");

    const sentenceCount = document.querySelector("#sentenceCount");

    input.addEventListener('input',function(){
        const text = input.value.trim();

        // character Count
        characterCount.textContent = text.length;

        // word Count

        const words = text.split(/\s+/).filter(word => word.length >0);
        wordCount.textContent = words.length;

        // sentence Count

        const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length >0);
        sentenceCount.textContent = sentences.length;
        

    })

})