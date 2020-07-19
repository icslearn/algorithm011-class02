/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var own5 = 0;
    var own10 = 0;

    for (var i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            own5++;
        } else if (bills[i] === 10) {
            if (own5) {
                own5--;
                own10++;
            } else {
                return false;
            }
        } else {
            if (own5) {
                if (own10) {
                    own5--;
                    own10--
                } else if (own5 > 2) {
                    own5 -= 3;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return true
};