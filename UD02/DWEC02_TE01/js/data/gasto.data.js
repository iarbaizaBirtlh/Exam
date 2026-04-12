import { GastoCombustible } from "../model/gasto.model.js";

const historico_db = [
    {"id":1,"vehicleType":"moto","date":"2015-04-04","kilometers":28,"precioViaje":1.68},
    {"id":2,"vehicleType":"furgoneta","date":"2015-09-18","kilometers":145,"precioViaje":14.10},
    {"id":3,"vehicleType":"camion","date":"2015-10-30","kilometers":350,"precioViaje":56.00},
    {"id":4,"vehicleType":"moto","date":"2016-05-17","kilometers":40,"precioViaje":2.40},
    {"id":5,"vehicleType":"furgoneta","date":"2016-08-19","kilometers":130,"precioViaje":13.00},
    {"id":6,"vehicleType":"camion","date":"2016-09-14","kilometers":300,"precioViaje":48.00},
    {"id":7,"vehicleType":"camion","date":"2017-02-22","kilometers":300,"precioViaje":48.00},
    {"id":8,"vehicleType":"moto","date":"2017-04-22","kilometers":60,"precioViaje":3.60},
    {"id":9,"vehicleType":"camion","date":"2017-06-05","kilometers":290,"precioViaje":47.00},
    {"id":10,"vehicleType":"furgoneta","date":"2018-03-11","kilometers":135,"precioViaje":13.75},
    {"id":11,"vehicleType":"moto","date":"2018-05-23","kilometers":50,"precioViaje":3.50},
    {"id":12,"vehicleType":"camion","date":"2018-07-17","kilometers":190,"precioViaje":30.40},
    {"id":13,"vehicleType":"camion","date":"2019-02-27","kilometers":275,"precioViaje":44.00},
    {"id":14,"vehicleType":"moto","date":"2019-07-12","kilometers":45,"precioViaje":3.60},
    {"id":15,"vehicleType":"furgoneta","date":"2019-09-30","kilometers":160,"precioViaje":16.00},
    {"id":16,"vehicleType":"camion","date":"2020-02-14","kilometers":320,"precioViaje":51.20},
    {"id":17,"vehicleType":"furgoneta","date":"2020-10-08","kilometers":180,"precioViaje":18.90},
    {"id":18,"vehicleType":"moto","date":"2020-12-04","kilometers":34,"precioViaje":2.04}
];

export const GASTOS_DB = historico_db.map(data =>
    new GastoCombustible(
        data.id,
        data.vehicleType,
        new Date(data.date),
        data.kilometers,
        data.precioViaje
    )
);

