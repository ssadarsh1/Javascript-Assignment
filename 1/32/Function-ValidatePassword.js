function validatePassword(password) {
  let criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  let messages = [];

  if (criteria.length) {
    messages.push("At least 8 characters: Valid");
  } else {
    messages.push("At least 8 characters: Not valid");
  }

  if (criteria.uppercase) {
    messages.push("Contains uppercase letters: Valid");
  } else {
    messages.push("Contains uppercase letters: Not valid");
  }

  if (criteria.lowercase) {
    messages.push("Contains lowercase letters: Valid");
  } else {
    messages.push("Contains lowercase letters: Not valid");
  }

  if (criteria.number) {
    messages.push("Contains numbers: Valid");
  } else {
    messages.push("Contains numbers: Not valid");
  }

  if (criteria.special) {
    messages.push("Contains special characters: Valid");
  } else {
    messages.push("Contains special characters: Not valid");
  }

  if (Object.values(criteria).every(Boolean)) {
    return "Password is strong";
  } else {
    return messages.join("\n");
  }
}

let validationResult = validatePassword("Pass123@");
console.log(validationResult); // Strong password
