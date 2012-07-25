describe("Person", function(){
  beforeEach(function(){
    
  });
  
  describe("FullName", function() {
    it("should be combination of first name and last name", function() {
      var person = new Person();
      person.FirstName("Foo");
      person.LastName("Bar");
      
      expect(person.FullName()).toBe("Foo Bar");
    });
  });
});