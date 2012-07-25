describe("Person", function(){
  describe("FullName", function() {
    it("should be combination of first name and last name", function() {
      var person = new Person();
      person.FirstName("John");
      person.LastName("Doe");
      
      expect(person.FullName()).toBe("John Doe");
    });
  });
});