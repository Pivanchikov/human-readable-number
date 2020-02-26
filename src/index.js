module.exports = function toReadable(number) {
      let word = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine"
      }; 
      let words = {
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
      };

      let Words = {
            0: "ten",
            1: "eleven",
            2: "twelve",
            3: "thirteen",
            4: "fourteen",
            5: "fifteen",
            6: "sixteen",
            7: "seventeen",
            8: "eighteen",
            9: "nineteen"
      };
       number =  String(number);
      if (number.length === 3) {
            if (number[1] != 0 || number[2] != 0){
                  return (word[number[0]] + " hundred " + toReadable(number.substr(1)))
            } else {
                  return (word[number[0]] + " hundred")
            }
      }
      if (number.length === 2) {
            if (number[0] === "0") {
                  return word[number[1]];
            }
            if (number[0] === "1") {
                  return Words[number[1]];
            } else {
                  if (number[1] != "0"){
                        return (words[number[0]] + " " + toReadable(number.substr(1)))
                  } else {
                        return words[number[0]]
                  }
            }
      }
      if (number.length === 1) {
                  return (word[number[0]])
      }
}
