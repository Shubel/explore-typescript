var salary = 7500;
var friendSalaries = [7500, 12300, 17200, 9400, 8300];
var friends = ["Sakib", "Rakib", "Nakib", "Dakib"];
friendSalaries[0] = 10500;
friendSalaries.push(13100);
// friendSalaries[4] = '9800';
// friendSalaries.push('7300');
friends.push("Bakib");
friends[2] = "Qakib";
// friends.push(45800);
var max = 0;
for (var _i = 0, friendSalaries_1 = friendSalaries; _i < friendSalaries_1.length; _i++) {
    var salary_1 = friendSalaries_1[_i];
    if (salary_1 > max) {
        max = salary_1;
    }
}
