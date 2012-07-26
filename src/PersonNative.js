function updateFullName(){
      var firstName = $('#first-name').val();
      var lastName = $('#last-name').val();
      var fullName = firstName + ' ' + lastName;
      $('#full-name').html(fullName);
};

function bindPerson(){
  $('#first-name').on('change', updateFullName);
  $('#last-name').on('change', updateFullName);     
}

$(function() {
  bindPerson();
});
