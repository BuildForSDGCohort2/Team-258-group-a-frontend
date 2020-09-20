$(function() {
    // Variables catching
    var $date = new Date(),
    thisYear = $date.getFullYear(),
    $copyrightYear = $("#copyrightYear");
    $copyrightYear.text(thisYear); // Sets current year as text
})
