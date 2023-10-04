function isCharacterMatch(string1, string2) {
	string1 = string1.toLowerCase()
	string2 = string2.toLowerCase()

	let current_index = 0
	while (string1.length > 0){
		let current_len = string1.length;
		for (let letter of string2){
			if(string1[0] == letter){
				string1 = string1.substring(1);
				current_index += 1
				break;
            }
        }
		if (current_len == string1.length){
            return false;
        }
    }
	return true;
};

function anagramsFor(checkWord, listOfWords) {
    anagramArray = [];
    for (let word of listOfWords){
        if(isCharacterMatch(checkWord, word)){
            anagramArray.push(word);
        }
    }
    return anagramArray;
};
module.exports = { isCharacterMatch, anagramsFor };



