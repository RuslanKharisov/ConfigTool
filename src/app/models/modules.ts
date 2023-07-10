// {
//     "id": 1,
//     "sku": "1321001600", 
//     "partNumber": "K3.DO.00.16.00",
//     "typeOfChanels":"DI",
//     "qtyOfChanels": 8,
//     "title": "Модуль дискретного ввода, 16 каналов, поканальная гальваническая изоляция, горячая замена, резервированная системная шина, 30VDC",
//     "price": 88880.00,
//     "weight": 350
// }


export interface IPlcModules {
        id: number,
        sku: string, 
        partNumber: string,
        typeOfChanels:string,
        qtyOfChanels: number,
        title: string,
        price: number,
        weight: number
}