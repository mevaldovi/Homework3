//here's all the global variables
var upperCase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '<', '>', '?', '/', '[', ']'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; //this will contain whatever chracters the user chooses and will cancatenacte.
var generate = document.querySelector('#generate');

//add event listener for as soon as the user clicks "Generate" button
var generateBtn = document.querySelector('#generate');
console.log(generateBtn);


//WHEN all prompts are answered, THEN a password is generated that matches the selected criteria
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(){

    //WHEN the password is generated, THEN the password is either displayed in an alert or written to the page

    //window alert: 'Thank you for choosing the FunHouse! would you like to play again?!'
    // passcode generator homework: test
    var popupTest = prompt('welcome Clowns lets do this!')
    console.log(popupTest);
    // Assignment Code
    var welcomeMessage = confirm('Welcome to the FunHouse! Ready to Generate Your Own Password??')
    console.log(welcomeMessage);
    confirm('Welcome to the FunHouse! Ready to Generate Your Own Password??');
    //if they say 'ok'
    if (welcomeMessage===true){
            confirm('Lets begin!!!')
    }
        //if they say no
        else {
            console.log('boo hoo');
            alert('boo hoo to you')
            window.close();

        }
    //window alert: 'how long would you like your password? '8 min 26 max'
    var msgLength = parseInt(prompt('How long would you like your password? 8 min 110 max'));
    console.log(msgLength);

    if ((msgLength >= 8 && msgLength <= 110) && !isNaN(msgLength)){
        console.log('yay!!!');
        alert('hoorayyyyy!!');
    }
        else{
            console.log('this password needs to be longer');
            prompt('Ooops! This Password needs to be at least 8 characters long');
        }

        
    //window prompt: lowercase letters
    var lowerCaseMsg = confirm('Do you want to inlcude lowercase letters in your password?');
    if (lowerCaseMsg==true){
        console.log('adding lowercase letters');
        alert('Yay!! Adding Lowercase Letters');
        //now we need to cancatenate the lowercase on to the superArray.
        superArray = superArray.concat(lowerCase);
    } else{
        console.log('no lowercase letters');
        alert('Okey dokey! No lowercase. Got it');
    }
    console.log('this is the superArray after the lowercase', superArray);

    //window prompt: upper case letters
    var upperCaseMsg = confirm('Do you want to include uppercase letters in your password?');
    if (upperCaseMsg ==true){
        console.log('adding uppercase letters');
        alert('Okey dokey! Adding Uppercase Letters');
        //now we need to cancatenate the uppercase on to the superArray.
        superArray = superArray.concat(upperCase);
        
    } else{
        console.log('no uppercase letters');
        alert('Okey dokey! no uppercase letters, got it');
    }
    console.log('this is the superArray after the uppercase', superArray);

    //window prompt: special characters
    var spCharMsg = confirm('Do you want to add special characters to your password?!');
    if (spCharMsg==true){
        console.log('adding special characters');
        alert('Okoey dokey! Adding special characters');
        //now we need to cancatenate the special characters on to the superArray.
        superArray = superArray.concat(specialCharacters);
    } else{
        console.log('no special characters');
        alert('okey dokey! No special characters got it');
    }
    console.log('this is the array after the special characters', superArray);

    //window prompt: 'do you want numbers in your password?' t/f Boolean (ok/cancel)
    var num = confirm('Do you want to add numbers to your password?!');
    if (num==true){
        console.log('adding numbers');
        alert('Okoey dokey! Adding numbers');
        //now we need to cancatenate the numbers on to the superArray.
        superArray = superArray.concat(numbers);
    } else{
        console.log('no numbers');
        alert('okey dokey! No numbers got it');
    }
    console.log('this is the superArray after the numbers', superArray);

    //lets bring it home!!!
    //for loop!

    var password = ''//this stores all the users actual random password chracters from which the computer will pul land randomly generate;
    
    for (var i = 0; i < msgLength; i++){

        var randomNumber = Math.floor(Math.random() * superArray.length)// so its zero to 1, zero being the beginning of the selected array and 1 being the end of the array
        password += superArray[randomNumber] //this password will be generated randomly from allllll the selected characters the user made. all of these add on to each other, making it longer and longer assuming the user says "yes" to all options
        
    }

    return password;

    
}

    alert('Do you want to play again?!')




