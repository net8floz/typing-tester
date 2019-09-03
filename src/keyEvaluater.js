// allow letters, comma, and period
const allowedChars = /^[a-zA-Z\. \,]*$/;

export default (event, expectedCharacter, onSuccess, onFail) =>{
    const input = event.key;
    const match = input.match(allowedChars);

    if(match.length == 0 || match[0].length > 1){
        // ignore things like "Shift" or not recognized keys
        return;
    }else if(input == expectedCharacter){
        // found a match!
        onSuccess(input);
    }else{
        // pressed the wrong key
        onFail();
    }
}