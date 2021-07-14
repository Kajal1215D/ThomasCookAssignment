var ViewModel = function () {
    var self = this;
    self.HotelArrayList = ko.observableArray(
        [{Hotel_Id : 101,Hotel_Name : "Sadananad" ,Hotel_Price : 5000,Location : "Pune"},
        {Hotel_Id : 102,Hotel_Name : "Pearl" ,Hotel_Price : 10000,Location : "Mumbai"},
        {Hotel_Id : 103,Hotel_Name : "Kiosk" ,Hotel_Price : 12000,Location : "Banglore"}
        ]);
        localStorage.setItem("HotelLists", JSON.stringify(self.HotelArrayList()));
        function getHotelList() {
            var Hotel = JSON.parse(localStorage.getItem("HotelLists"));
            self.HotelArrayList(Hotel);
        }
        self.deleteHotel = function (hotel1,event) {
            var Hotel = JSON.parse(localStorage.getItem("HotelLists"));
            var context = ko.contextFor(event.target);
            let index=context.$index();
            Hotel.splice(index, 1);
            alert('Hotel Deleted Successfully');
            localStorage.setItem("HotelLists", JSON.stringify(Hotel))
            getHotelList();
        }
    getHotelList();
}
ko.applyBindings(new ViewModel());