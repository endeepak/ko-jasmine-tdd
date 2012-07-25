var Person = function(){
  var self = this;
  
  self.FirstName = ko.observable();
  self.LastName = ko.observable();

  self.FullName = ko.computed(function(){
    return self.FirstName() + ' ' + self.LastName();
  });
};