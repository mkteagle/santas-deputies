/**
 * Created by i68066 on 10/10/15.
 */
function getNames () {
    var names = ["Alisha", "Brian", "Mike", "Jen", "Alli", "Jordan", "Vanessa", "Austin"];
    var kids = ["Annika", "Adalyn", "Avery", "Madison", "Jed"];
    var nickname = '';
    if (user.google.name == 'Michael Teagle') {
        nickname = 'Mike';
        var namesfiltername = names.filter(function(n){ return n != nickname });
        var namesfinal = namesfiltername.filter(function(n){ return n != undefined});
        console.log(namesfinal);
        //document.getElementById("allnames").innerHTML = namesfinal;
    }

}

