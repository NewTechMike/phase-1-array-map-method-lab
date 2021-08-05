const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(upper);
}

const first = 'what does the this keyword mean?';

function upper(array){
  let newArr = array.split(" ");
  
  let arr = [];
  for(let count of newArr){
      newArr = count.charAt(0).toUpperCase()+ count.slice(1);
      arr.push(newArr)    
    }
  return arr.join(" ");
}