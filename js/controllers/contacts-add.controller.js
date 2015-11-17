let ContactsAddController = function(ContactService) {
  
  let vm = this;
  vm.messagename = "Kindly provide your name";
  vm.messagenameOK = "Thank you for providing your name";

  vm.messageemailOne = "Kindly provide an email";
  vm.messageemailTwo = "Please provide a valid email address";
  vm.messageemailOK = "Thank you for providing your email.  We will contact you soon!";

  vm.messagewebOne = "Kindly provide your web address";
  vm.messagewebTwo = "Please provide a valid web address (http or https)";
  vm.messagewebOK = "Thank you for providing your web address.";

  vm.messagemessageOne = "Kindly provide your comments";
  vm.messagemessageOK = "Thank you for providing your comments.";

  vm.message = "";
  vm.count = 0;


  vm.addContact = addContact;

  function addContact (ContactObj) {
    ContactService.addContact(ContactObj).then( (res) => {
      console.log(res);
         vm.message= (vm.count === 1) ? "Thank you for your submission.  We will contact you soon!" : "Thank you for your interest!";

    });
  }

};

ContactsAddController.$inject = ['ContactService'];

export default ContactsAddController;