while (true) {
  //ციკლი,არითმეტიკული მოქმედების იმდენჯერ შესასრულებლად რამდენჯერაც გვსურს;

  //შემოსატანი ცვლადები(ვიყენებ შექმნილ ფუნქციას ცვლადების ვალიდაციისთვის);
  const firstNumber = getValidNumber("Enter the first number");
  const operator = getValidOperator("Enter the operator");
  const secondNumber = getValidNumber("Enter the second number");

  //არითმეტიკული მოქმედებების შესრულება შესაბამისი არითმეტიკული მოქმედების მიხედვით;
  let answer;
  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
    case "*":
      answer = firstNumber * secondNumber;
      break;
    case "/": // გაყოფის შემთხვევაში გვაქვს ორი შემთხვევა;
      switch (secondNumber) {
        case 0: //ნულზე გაყოფისას დალოგავს შემდეგ ტექსტს;
          console.log("Devision by zero is not allowed");
          break;
        default:
          answer = firstNumber / secondNumber;
          break;
      }
      break;
    case "%":
      answer = firstNumber % secondNumber;
      break;
    case "**":
      answer = firstNumber ** secondNumber;
      break;
    default:
      alert("Invalid operator");
      continue;
  }
  //პასუხის დალოგვა(თუ მეორე რიცხვი ნულია ტექსტი უკვე დალოგილი გვაქვს ამიტომ answer-ის დალოგვა არ გვჭირდება);
  if (secondNumber != 0) {
    console.log(`${firstNumber}${operator}${secondNumber}=${answer}`);
  }
  //while ციკლის შეჩერების პირობა;
  const breakpoint = confirm("Do you want to continue?");
  if (!breakpoint) {
    break;
  }
}
// ფუნქცია, რომელსაც ვიყენებთ რიცხვითი ტიპის ცვლადის შემოსატანად და ვალიდაციისთვის;
function getValidNumber(message) {
  let number;
  //ციკლი,რომელიც გაეშვება მანამ,სანამ მომხმარებლის მიერ შემოყვანილი ცვლადი არ იქნება რიცხვი;
  while (isNaN(Number(number)) || number === "" || number === null) {
    number = prompt(message);
    if (isNaN(Number(number)) || number === "" || number === null) {
      alert("Please enter a valid number");
    }
  }
  //რიცხვითი ტიპის ცვლადის შემოყვანის შემდეგ ფუნქცია დაგვიბრუნებს ამ რიცხვს;
  return Number(number);
}
//ფუნქცია,რომელსაც ვიყენებთ არითმეტიკული მოქმედების შემოსაყვანად და ვალიდაციისთვის ;
function getValidOperator(message) {
  let operator;
  const validOperators = ["+", "-", "*", "/", "%", "**"]; //მასივი,რომელშიც შედის ყველა გათვალისწინებული მოქმედება;

  //ციკლი,რომელიც გაეშვება მანამ,სანამ მომხმარებლის მიერ შემოყვანილი ინფუთი არ დაემთხვევა არითმეტიკული ოპერატორების მასივის ელემენტს;
  while (!validOperators.includes(operator)) {
    operator = prompt(message);
    if (!validOperators.includes(operator)) {
      alert("Please enter a valid operator");
    }
  }
  //შესაბამისი ოპერატორის შემოყვანის შემდეგ ფუნქცია დაგვიბრუნებს ამ არითმეტიკულ მოქმედებას;
  return operator;
}
