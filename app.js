module.exports = {
  validCandidate: function validCandidate(languages) {
    let validCandidate = false
    // Updated regex below
    let languageRegex  = /^ES/
    if(Array.isArray(languages)) {
      //validCandidate = !!languages.filter( (language)=> languageRegex.test(language) ).length
      validCandidate = !!languages.filter(function(language) {
        return languageRegex.test(language);
      }).length;
    } else if (typeof languages == 'string') {
      validCandidate = languageRegex.test(languages)
    }
    return validCandidate
  }
};



// See answers below which are indented

// 1. What does validCandidate expect and return?
  // The function expects either an array or a string, using the following rules
  // If the string ends with the word 'script' return true (Otherwise return false)
  // If at least one element in the array ends with the word 'script' return true
    // Otherwise return false
  // For eg. if array is ['Javascript', 'HTML'] - then validCandidate will return true
// 2. Tell us the reason(s) why we've created a variable to store the regex?
  // So we don't have to repeat the regex since it gets used twice (DRY principle)
// 3. Does it matter to use == or === when checking if typeof languages is equal to 'string' ?
  // In this case I say no, because typeof should generally always return a string and it is being
  // compared to 'string' so no type conversion should occur
// 4. Rewrite filter so it doesn't use =>. What does => do? Was it necessary in this instance?
  // See updated code block above.
  // The => fat arrow function is a short-hand for an inline anonymous function (it also removes the need to include 'return')
    // It is not necessary but makes the code more concise and readable.
// 5. Update validCandidate to accept candidate knowing "ES2015", "ES6" or "ES7". Basically ES whatever. By the way, what does "ES" stand for?
  // See updated function above
  // ES stands for ECMAScript
// 6. Nice to have: write validCandidate unit tests.
  // See test.js (uses mocha) - run with 'npm test' (run 'npm install' first)
