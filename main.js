let Rəqəmlər = [
    { value: 30, name: 'Pen' },
    { value: 60, name: 'Dog' },
    { value: 135, name: 'Laptop' },
    { value: 590, name: 'Car' },
    ];

    let Cəmlər = Rəqəmlər.reduce(function(Toplayıcı,HalHazırdakı){
        return Toplayıcı + HalHazırdakı.value
    },0);

    console.log(Cəmlər)