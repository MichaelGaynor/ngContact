let AddContactController = function(ContactService) {
  
  let vm = this;
  vm.messagename = "Insert Name Here";
  vm.messagenameOK = "Thanks Buddy!";

  vm.messageemailOne = "Insert Email Here";
  vm.messageemailTwo = "Email must include an @ sign";
  vm.messageemailOK = "Doin' Real Good There Champ";

  vm.messagewebOne = "Insert Website Here";
  vm.messagewebTwo = "Website must begin with http or https";
  vm.messagewebOK = "Gettin Close To The End";

  vm.messagemessageOne = "Stick your brain-words here";
  vm.messagemessageOK = "Wow, Insightful!";

  vm.message = "";
  vm.count = 0;


  vm.addContact = addContact;

  function addContact (ContactObj) {
    ContactService.addContact(ContactObj).then( (res) => {
      console.log(res);
         vm.message= "You done did it, great job!";
    });
  }

};

AddContactController.$inject = ['ContactService'];

export default AddContactController;