import React from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const rrWords = (msg) => {
  const words = ['a', 'love', 'and', 'run', 'down', 'guy', 'from', 'to', 'cry', "we've", "we're", "commitment's", "you're", 'but', 'we', 'lie', 'for', 'gotta', 'how', 'on', 'desert', 'aching,', "what's", 'wanna', 'up', 'me', 'your', 'a', 'so', 'do', 'see', 'ask', 'been', 'hurt', 'full', 'inside,', 'each', 'we', 'know', 'get', 'game', 'any', 'and', 'feeling', 'understand', 'never', 'rules', 'gonna', "heart's", 'play', 'make', 'too', 'around', "we're", 'both', "don't", 'tell', 'give', 'i', 'goodbye', 'no', 'going', 'blind', 'it', 'shy', 'if', 'you', 'what', 'this', 'of', 'just', 'long', 'thinking', 'other', 'you', "wouldn't", 'say', 'give,', 'let', 'known', 'strangers', 'the', 'never', "i'm"];
  return words.includes(msg.toLowerCase());
}

const states = (msg) => {
  const words = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  return words.includes(msg.toLowerCase());
}

function isSubSequence(s1, s2, m, n)
{
    
    // Base Cases
    if (m == 0)
        return true;
    if (n == 0)
        return false;
         
    // If last characters of two strings
    // are matching
    if (s1[m - 1] == s2[n - 1])
        return isSubSequence(s1, s2,
                             m - 1, n - 1);

    // If last characters are not matching
    return isSubSequence(s1, s2, m, n - 1);
}

function periodicSentence(text) {
  let output = {
    'html': '',
    'flags': Array(text.length).fill(0, 0),
    'elements': {}
  };

  let Elements = {
     'H': 'Hydrogen',     'He': 'Helium',        'Li': 'Lithium',
    'Be': 'Beryllium',     'B': 'Boron',          'C': 'Carbon',
     'N': 'Nitrogen',      'O': 'Oxygen',         'F': 'Fluorine',
    'Ne': 'Neon',         'Na': 'Sodium',        'Mg': 'Magnesium',
    'Al': 'Aluminium',    'Si': 'Silicon',        'P': 'Phosphorus',
     'S': 'Sulfur',       'Cl': 'Chlorine',      'Ar': 'Argon',
     'K': 'Potassium',    'Ca': 'Calcium',       'Sc': 'Scandium',
    'Ti': 'Titanium',      'V': 'Vanadium',      'Cr': 'Chromium',
    'Mn': 'Manganese',    'Fe': 'Iron',          'Co': 'Cobalt',
    'Ni': 'Nickel',       'Cu': 'Copper',        'Zn': 'Zinc',
    'Ga': 'Gallium',      'Ge': 'Germanium',     'As': 'Arsenic',
    'Se': 'Selenium',     'Br': 'Bromine',       'Kr': 'Krypton',
    'Rb': 'Rubidium',     'Sr': 'Strontium',      'Y': 'Yttrium',
    'Zr': 'Zirconium',    'Nb': 'Niobium',       'Mo': 'Molybdenum',
    'Tc': 'Technetium',   'Ru': 'Ruthenium',     'Rh': 'Rhodium',
    'Pd': 'Palladium',    'Ag': 'Silver',        'Cd': 'Cadmium',
    'In': 'Indium',       'Sn': 'Tin',           'Sb': 'Antimony',
    'Te': 'Tellurium',     'I': 'Iodine',        'Xe': 'Xenon',
    'Cs': 'Cesium',       'Ba': 'Barium',        'La': 'Lanthanum',
    'Ce': 'Cerium',       'Pr': 'Praseodymium',  'Nd': 'Neodymium',
    'Pm': 'Promethium',   'Sm': 'Samarium',      'Eu': 'Europium',
    'Gd': 'Gadolinium',   'Tb': 'Terbium',       'Dy': 'Dysprosium',
    'Ho': 'Holmium',      'Er': 'Erbium',        'Tm': 'Thulium',
    'Yb': 'Ytterbium',    'Lu': 'Lutetium',      'Hf': 'Hafnium',
    'Ta': 'Tantalum',      'W': 'Tungsten',      'Re': 'Rhenium',
    'Os': 'Osmium',       'Ir': 'Iridium',       'Pt': 'Platinum',
    'Au': 'Gold',         'Hg': 'Mercury',       'Tl': 'Thallium',
    'Pb': 'Lead',         'Bi': 'Bismuth',       'Po': 'Polonium',
    'At': 'Astatine',     'Rn': 'Radon',         'Fr': 'Francium',
    'Ra': 'Radium',       'Ac': 'Actinium',      'Th': 'Thorium',
    'Pa': 'Protactinium',  'U': 'Uranium',       'Np': 'Neptunium',
    'Pu': 'Plutonium',    'Am': 'Americium',     'Cm': 'Curium',
    'Bk': 'Berkelium',    'Cf': 'Californium',   'Es': 'Einsteinium',
    'Fm': 'Fermium',      'Md': 'Mendelevium',   'No': 'Nobelium',
    'Lr': 'Lawrencium',   'Rf': 'Rutherfordium', 'Db': 'Dubnium',
    'Sg': 'Seaborgium',   'Bh': 'Bohrium',       'Hs': 'Hassium',
    'Mt': 'Meitnerium',   'Ds': 'Darmstadtium',  'Rg': 'Roentgenium',
    'Cn': 'Copernicium',  'Nh': 'Nihonium',      'Fl': 'Flerovium',
    'Mc': 'Moscovium',    'Lv': 'Livermorium',   'Ts': 'Tennessine',
    'Og': 'Oganesson'
  };

  for (let x = 0, bit1, bit2; x < text.length; x++) {
    bit1 = text.substring(x, x + 1).toUpperCase();

    // If first character is not a letter, skip
    if (!bit1.match(/[A-Z]/)) continue;

    bit2 = text.substring(x + 1, x + 2).toLowerCase();

    // Check if next two letters are an element
    if (typeof Elements[bit1 + bit2] != 'undefined') {

      // If we are backtracking, the previous element letter must
      // succeed as a single letter element
      if (output['flags'][x]) {
        let bit0 = text.substring(x - 1, x).toUpperCase();
        if (typeof Elements[bit0] == 'undefined') {
          x++;
          continue;
        }
      }
      output['flags'][x] = 1;
      output['flags'][x + 1] = 2;
      x++;

    // We are currently backtracking and didn't find a match
    } else if (output['flags'][x]) {
      x++;

    // Else check if next single letter is an element
    } else if (typeof Elements[bit1] != 'undefined') {
      output['flags'][x] = 1;

    // An element was not found; if the previous symbol was a two
    // character match, backtrack to see if breaking it up will help
    } else if (x > 1 && output['flags'][x - 1] == 2) {
      x -= 2;

    }
  }

  for (let x = 0, bit1, bit2; x < text.length; x++) {
    bit1 = text.substring(x, x + 1).toUpperCase();
    bit2 = text.substring(x + 1, x + 2).toLowerCase();

    // Two character elements
    if (output['flags'][x] == 1 && x < text.length - 1 && output['flags'][x + 1] == 2) {
      output['html'] += '<span title="' + Elements[bit1 + bit2] + '">';
      output['html'] += text.substring(x, x + 2);
      output['html'] += '</span>';
      if (typeof output['elements'][bit1 + bit2] == 'undefined') {
        output['elements'][bit1 + bit2] = 1;
      } else output['elements'][bit1 + bit2]++;
      x++;

    // Single character elements
    } else if (output['flags'][x] == 1) {
      output['html'] += '<span title="' + Elements[bit1] + '">';
      output['html'] += text.substring(x, x + 1);
      output['html'] += '</span>';
      if (typeof output['elements'][bit1] == 'undefined') {
        output['elements'][bit1] = 1;
      } else output['elements'][bit1]++;

    // Non-matching letter characters
    } else if (bit1.match(/[a-zA-Z]/)) {
      output['html'] += '<del>' + text.substring(x, x + 1) + '</del>';

    // Sanitise, but otherwise ignore all other output
    } else output['html'] += text.substring(x, x + 1).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return !output['flags'].some(x => x === 0);
}

let puzzleInfo = [
  {
    puzzleId: 1337,
    name: "Undefined",
    points: 0
  }, {
    puzzleId: 1,
    name: "WHATS MY NAME?",
    points: 1,
    body: (<div><br/>Hint: Be thorough with your inputs!</div>),
    filter_fn: (msg) => {
      return isSubSequence("matt", msg, 4, msg.length)
    },
    answer: "Message must contain 'matt' as a subsequence"
  }, {
    puzzleId: 2,
    name: "Don't @ me",
    points: 1,
    body: (<div></div>),
    filter_fn: validateEmail,
    answer: "Must be a valid email"
  }, {
    puzzleId: 3,
    name: "A basic test",
    points: 2,
    body: (<div></div>),
    filter_fn: (msg) => {
      return msg.includes("a");
    },
    answer: "Must contain the letter 'a'"
  }, {

    puzzleId: 4,
    name: "U-NICK",
    points: 2,
    body: (<div></div>),
    filter_fn: (msg) => {
      const charCount = msg.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
      
      const duplicates = Object.keys(charCount).filter(char => charCount[char] > 1);
      return duplicates.length === 0;
    },
    answer: "Letters may only be used at most once (are unique)."
  }, {
    puzzleId: 5,
    name: "2hard4you",
    points: 2,
    body: (<div><br/>Hint: Try small inputs</div>),
    filter_fn: (msg) => {
      return (Math.log(msg)/Math.log(2)) % 1 === 0;
    },
    answer: "Message must be a power of 2."
  }, {

    puzzleId: 6,
    name: "Key Bored",
    points: 3,
    body: (<div></div>),
    filter_fn: (msg) => {
      return /^(([A-Ga-g]{1})(\#|b{1})?)+$/.test(msg)
    },
    answer: "Message must be able to be written as music letter notes (Ex. A#, Cb, etc.)"
  }, {
    puzzleId: 7,
    name: "BaNaNaS",
    points: 4,
    body: (<div></div>),
    filter_fn: periodicSentence,
    answer: "Message must be able to be written using abbreviations of elements of the Periodic Table of Elements"
  }, {
    puzzleId: 8,
    name: "Stars and stripes",
    points: 5,
    body: (<div></div>),
    filter_fn: states,
    answer: "Message must be a state abbreviation"
  }, {
    puzzleId: 9,
    name: "Legal Name",
    points: 6,
    body: (<div><br/>Hint: Be thorough with your testing!</div>),
    filter_fn: (msg) => {
      return /^[a-zA-Z_$][\w$]*$/.test(msg)
    },
    answer: "Message must be a valid Python variable name."
  }, {
    puzzleId: 10,
    name: "Search and Replace",
    points: 7,
    body: (<div><br/>Hint: Be thorough with your testing!</div>),
    filter_fn: (msg) => {
      var regex = new RegExp(msg);
      regex.test("test message");
      return true;
    },
    answer: "Message must be a valid Regex expression (in JS)"
  }, {
    puzzleId: 11,
    name: "Which rows?",
    points: 8,
    body: (<div><br/>Hint: Be thorough with your testing!</div>),
    filter_fn: (msg) => {
      let row1 = new Set("zxcvbnm,./<>?".split(""));
      let row2 = new Set(`asdfghjkl;':"'`.split(""));
      let row3 = new Set("qwertyuiop[]{}\\|".split(""));
      let row4 = new Set("1234567890!@#$%^&*()_+-=`~".split(""));

      let prevRow = 0;
      for (var i = 0; i < msg.length; i++) {
        let currRow = 0;
        if (row1.has(msg[i])) {
          currRow = 1;
        } else if (row2.has(msg[i])) {
          currRow = 2;
        } else if (row3.has(msg[i])) {
          currRow = 3;
        } else {
          currRow = 4;
        }
        if (prevRow === currRow) {
          return false;
        }
        prevRow = currRow;
      }
      return true;
    },
    answer: "The next letter in the message must come from a different row on the keyboard."
  }, {
    puzzleId: 12,
    name: "Never say Never",
    points: 9,
    body: (<div></div>),
    filter_fn: rrWords,
    answer: "Message must be a word from Rickroll"
  }
];

export default puzzleInfo;