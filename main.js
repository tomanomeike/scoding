var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

var data = {
  cars: [
    {
      carImage: './images/cars/car1.png',
      carTitle: 'Nissan Pathfinder',
      carPrice: '$13 700',
      carYear: '2015',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/VolkswagenTiguan20121.png',
      carTitle: 'Volkswagen Tiguan',
      carPrice: '$9 600',
      carYear: '2012',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/AudiSQ5201801.png',
      carTitle: 'Audi sq5 premium plus',
      carPrice: '$72 500',
      carYear: '2018',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/BMW52820131-1.png',
      carTitle: 'BMW 528',
      carPrice: '$13 700',
      carYear: '2015',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/vw.png',
      carTitle: 'Nissan Pathfinder',
      carPrice: '$13 700',
      carYear: '2015',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/car1.png',
      carTitle: 'Volkswagen Tiguan',
      carPrice: '$13 700',
      carYear: '2015',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/car1.png',
      carTitle: 'Audi sq5 premium plus',
      carPrice: '$72 500',
      carYear: '2018',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    },
    {
      carImage: './images/cars/VolkswagenTiguan20121.png',
      carTitle: 'BMW 528',
      carPrice: '$19 700',
      carYear: '2013',
      carFuel: 'Бензин',
      carGeardbox: 'Автомат',
      carDrivenWheels: 'Передний',
      carEngine: '2.0 л',
      carMileage: '51 130 км',
      city: 'Mn-Minneapolis',
      date: '22.02.2020 18:00 UTC'
    }
  ]
};

var i;

var source = $('#car-template').html();
var template = Handlebars.compile(source);

// Event Handling
$(document).on('click', '.module-car', function() {
  alert('car added');
});

// display logic
for (i = 0; i < data.cars.length; i++) {
  var html = template(data.cars[i]);
  $('#cars').append(html);
}
