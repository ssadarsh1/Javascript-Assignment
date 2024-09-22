function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}
let eligibility = isEligibleToVote(20);
console.log(eligibility); // Eligible to vote

let eligibility1 = isEligibleToVote(17);
console.log(eligibility1); // Not eligible to vote
