//jshint esversion:6

/** module.exports.getDay = getDay; */
//or we can also write
exports.getDay = getDay;
function getDay() {
    const today=new Date();
    // var currday=today.getDay();
    // var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // if(currday==0 || currday==6)
    // day=daylist[currday]+" YooHoo!! It's a Holiday";
    // else
    // day=daylist[currday];

    /** ANOTHER WAY OF PRINTING THE DAY,DATE */
    const options = {
        weekday: 'long',
    };
    return today.toLocaleDateString("en-US", options);
}
// OR WE CAN ALSO WRITE AN ANONYMOUS FUNCTION
exports.getDate = function() {
    const today=new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
//     let day=today.toLocaleDateString("en-US", options);
//     return day;
    return today.toLocaleDateString("en-US", options);
}