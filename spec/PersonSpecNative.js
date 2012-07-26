describe("Person", function(){
  beforeEach(function(){
    $('body').append("<div id='test-fixtures'>" +
                        "<input id='first-name'/>" +
                        "<input id='last-name'/>" +
                        "Hello <span id='full-name'></span>" +
                      "</div>")
  });

  afterEach(function() {
    $('#test-fixtures').remove();
  });

  describe("FullName", function() {
    it("should be combination of first name and last name", function() {
        bindPerson();

        $('#first-name').val('John').change();
        $('#last-name').val('Doe').change();        

        expect($('#full-name').text()).toBe('John Doe');
    });
  });
});