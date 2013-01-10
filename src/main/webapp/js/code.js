require(["knockout","jquery", "jqueryui", "dependency"], function (ko) {
    function ViewModel() {
        var self = this;

        self.x = ko.observable(x());
    }

    $(document).ready(function () {
        ko.applyBindings(new ViewModel());
    });
});