exports.getInfo = function() {
    const today=new Date();
    // conts url =
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
//     let day=today.toLocaleDateString("en-US", options);
//     return day;
    return today.toLocaleDateString("en-US", options);
}