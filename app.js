const branchData = {
  "branch1": {
    "branch_name": "Branch 1",
    "zipcodes": ["10001", "10002", "10003"]
  },
  "branch2": {
    "branch_name": "Branch 2",
    "zipcodes": ["20001", "20002", "20003"]
  },
  "branch3": {
    "branch_name": "Branch 3",
    "zipcodes": ["30001", "30002", "30003"]
  }
};

function findBranch() {
  const zipcode = document.getElementById("zipcodeInput").value;
  let branchName = "No branch found for this zipcode.";

  // Loop through the branch data to find the matching branch
  for (const branch in branchData) {
    if (branchData[branch].zipcodes.includes(zipcode)) {
      branchName = branchData[branch].branch_name;
      break;
    }
  }

  // Update the result on the page
  document.getElementById("result").innerText = branchName;
}
