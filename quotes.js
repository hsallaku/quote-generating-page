const quotes = [
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "Well done is better than well said.", author: "Benjamin Franklin" },
    { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "If life were predictable it would cease to be life and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { quote: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
    { quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
    { quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", author: "Oscar Wilde" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "In this life we cannot do great things. We can only do small things with great love.", author: "Mother Teresa" },
    { quote: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
    { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.", author: "John Lennon" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "Don't worry when you are not recognized, but strive to be worthy of recognition.", author: "Abraham Lincoln" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { quote: "May you live all the days of your life.", author: "Jonathan Swift" },
    { quote: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { quote: "Do not let making a living prevent you from making a life.", author: "John Wooden" },
    { quote: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.", author: "Albert Camus" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" }
];

let randomIdx = Math.floor(Math.random() * (quotes.length));

function reload(){
    const generateBtn = document.getElementById('generate-btn')
    const quote = document.getElementById('quote')
    const author = document.getElementById('author')
    randomIdx = Math.floor(Math.random() * (quotes.length));
    quote.textContent = "\"" + quotes[randomIdx].quote + "\""
    author.textContent = "- " + quotes[randomIdx].author;
}

