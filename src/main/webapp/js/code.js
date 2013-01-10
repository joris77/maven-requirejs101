require(["knockout", "jqueryui", "dependency"], function (ko,$,d) {
    function ViewModel() {
        var self = this;

        self.x = ko.observable(d.x());
    }

    $(document).ready(function () {
        ko.applyBindings(new ViewModel());
    });
});