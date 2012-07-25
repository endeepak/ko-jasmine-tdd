self.FullName = ko.computed(function(){
  return self.FirstName() + ' ' + self.LastName();
});