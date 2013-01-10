require(["js/lib/knockout/knockout-2.2.0.js","js/lib/jquery/jquery-1.8.2.js", "js/lib/jquery/jquery-ui-1.9.1.custom.js", "js/dependency.js"], function (ko) {
    function ViewModel() {
        var self = this;

        self.x = ko.observable(x());
    }

    $(document).ready(function () {
        ko.applyBindings(new ViewModel());
    });
});