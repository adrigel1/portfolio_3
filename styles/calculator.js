function calculatePrice() {
    var designPrice = 500; // Example price for design
    var layoutPrice = 1000; // Example price for layout
    var additionalServicesCost = 0; // Initial cost for additional services
  
    // Get user input
    var homePageDesign = document.getElementById("homePageDesign").checked;
    var adaptiveHomePage = document.getElementById("adaptiveHomePage").checked;
    var internalPages = parseInt(document.getElementById("internalPages").value);
    var adaptiveInternalPages = document.getElementById("adaptiveInternalPages").checked;
    var repeatCustomer = document.getElementById("repeatCustomer").checked;
    var urgentProject = document.getElementById("urgentProject").checked;
  
    // Calculate additional services cost
    if (repeatCustomer) {
      additionalServicesCost += 200; // Example cost for repeat customer
    }
    if (urgentProject) {
      additionalServicesCost += 500; // Example cost for urgent project
    }
  
    // Calculate total price
    var totalPrice = designPrice + layoutPrice + (internalPages * 50) + additionalServicesCost;
  
    // Display result
    document.getElementById("price").innerText = "$" + totalPrice;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to checkboxes and input fields
    var inputs = document.querySelectorAll("input[type='checkbox'], input[type='number']");
    inputs.forEach(function(input) {
      input.addEventListener("change", calculatePrice);
    });
  });