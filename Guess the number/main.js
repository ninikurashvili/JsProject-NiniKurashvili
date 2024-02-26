while (true) {
  const guessedNumberArray = []; //ვქმნი მასივს ჩაფიქრებული და საცდელი რიცხვებისთვის,რადგან დავლოგო საუკეთესო მიახლოებები;
  let rightguess = false; //მომხმარებლის გამაჯვების აღსაწერად ვიყენებთ;
  let numberOfTries = +prompt("Enter number of tries"); // მომხმარებელს შემოყავს ცდების რაოდენობა;

  //თუ ცდების რაოდენობა ნულია ან Nan,მაშინ ცდების რაოდენობა ხდება 10;
  if (numberOfTries === 0 || isNaN(numberOfTries)) {
    numberOfTries = 10;
  }

  let secretNumber = Math.floor(Math.random() * 1000) + 1; // ვაგენერინებთ ჩაფირებულ (რენდომ) რიცხვს 1-დან 1000-მდე ;
  guessedNumberArray.push(secretNumber); //მასივში ვამატებ ჩაფიქრებულ რიცხვს;

  //ციკლი,რომლითაც შემოყავს მომხმარებელს იმდენი შესაძლო რიცხვი რამდენი ცდაც შემოიყვანა;
  for (let i = 0; i < numberOfTries; i++) {
    let possibleValidNumber = +prompt(
      "Enter your guess(number between 1 and 1000)"
    );
    //ამოწმებს ინფუთს არის თუ არა რიცხვი და არის თუ არა შესაბამის რიცხვით შუალედში;
    if (
      isNaN(possibleValidNumber) ||
      possibleValidNumber < 1 ||
      possibleValidNumber > 1000
    ) {
      alert("Invalid input. Please enter a valid number between 1 and 1000.");
      i--; //არასწორი ინფუთის შემოყვანისას არ ვაკლებ ცდების რაოდენობას;
      continue;
    }

    guessedNumberArray.push(possibleValidNumber); //მასივში ვამატებ ინფუთებს;

    //შემდეგი if პირობები ადარებს შემოყვანილი რიცხვსა და ჩაფიქრებულს და ლოგავს შესაბამის ტექსტს;
    if (possibleValidNumber === secretNumber) {
      console.log("you won.");
      console.log("your guess is right.");
      rightguess = true;
      break;
    } else if (possibleValidNumber > secretNumber) {
      console.log("Try to enter a lower number");
    } else if (possibleValidNumber < secretNumber) {
      console.log("Try to enter a higher number");
    }
  }

  //თუ ციკლი ამოიწურა და rightguess დარჩა false-ს ტოლი ,მომხმარებელმა წააგო;
  if (!rightguess) {
    console.log("You lost.");
  }
  console.log("Secret number was:", secretNumber); //ყველა შემთხვევაში ვალოგინებ საბოლოოდ ჩაფიქრებულ რიცხვს;

  guessedNumberArray.sort((a, b) => a - b); //ვასორტირებ მასივს ზრდადობით;

  //თუ მოხმარებელმა შემოიყვანა რიცხვი და წააგო ვალოგინებ
  //მარცხნიდან და მარჯვნიდან ყველაზე ახლო ინფუთ რიცხვების მიახლოებებს ჩაფიქრებულ რიცხვთან;
  if (guessedNumberArray.length > 1 && !rightguess) {
    let index = guessedNumberArray.indexOf(secretNumber); // ვპოულობ ჩაფიქრებული რიცხვის ინდექსს;

    // თუ ჩაფიქრებული რიცხვი მასივში არაა ყველაზე დიდი,მაშინ მას გააჩნია მარჯვნიდან ერთი მაინც ახლო ინფუთ რიცხვი;
    if (index < guessedNumberArray.length - 1) {
      // ვალოგინებ მასივიდან ჩაფიქრებული რიცხვის შემდეგ ინდექსზე მდგომ რიცხვს;
      console.log(
        "Your Best right approximation:",
        guessedNumberArray[index + 1]
      );
    }

    //თუ ჩაფიქრებული რიცხვი მასივში არაა ყველაზე პატარა,მაშინ მას გააჩნია მარცხნიდან ერთი მაინც ახლო ინფუთ რიცხვი;
    if (index > 0) {
      //ვალოგინებ მასივიდან ჩაფიქრებული რიცხვის წინა ინდექსზე მდგომ რიცხვს;
      console.log(
        "Your Best left approximation:",
        guessedNumberArray[index - 1]
      );
    }
  }
  const breakpoint = confirm("Do you want to try again?");
  if (!breakpoint) {
    break;
  }
}
