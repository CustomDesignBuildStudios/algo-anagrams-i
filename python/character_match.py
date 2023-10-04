# Don't forget to run the tests (and create some of your own)

# Part 1
def is_character_match(string1, string2):
	string1 = string1.lower()
	string2 = string2.lower()

	current_index = 0
	while len(string1) > 0:
		current_len = len(string1)
		for letter in string2:
			if string1[0] == letter:
				string1 = string1[1:]
				current_index += 1
				break
		if current_len == len(string1):
			return False
	return True


# Part 2
def anagrams_for(check_word, list_of_words):
	anagram_array = []
	for word in list_of_words:
		if is_character_match(word, check_word):
			anagram_array.append(word)
	return anagram_array
