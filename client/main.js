Template.from.events({
    'click .btn' : function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var name = first_name +' '+ last_name;

        newUser = Users.insert({name: name}, function (errors, result) {
           if (result) {
               Session.setPersistent("userID", result);
           }
        });
}

});

Template.home.helpers({
   currentUser: function () {
        return Users.findOne({_id: Session.get("userID")})
   }
});
Template.chat.helpers({
    account: function () {
        return Users.findOne({_id: Session.get("userID")})
    }
});
