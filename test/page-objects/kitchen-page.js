var KitchenPage = function () {
    var self = this;
    var url = "http://localhost:3000/#!/kitchen";

    self.get = function () {
        browser.get(url);
    };

    self.getFirstList = function () {
        return element.all(by.repeater('order in $ctrl.newOrderList'));
    };

    self.getSecondList = function () {
        return element.all(by.repeater('order in $ctrl.cookingOrderList'));
    };

    self.getFirstDish = function (list) {
        return list.first().element(by.css('.dish-name')).getText();
    };

    self.getDishCount = function (list, searchDish) {
        return list.filter(function (row) {
            return row.element(by.css('.dish-name')).getText().then(function (dishName) {
                return dishName === searchDish;
            })
        }).count();
    }
};

module.exports = KitchenPage;