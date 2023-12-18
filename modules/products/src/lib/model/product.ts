export class product {
    id: number;
    productName:string;
    description:string='';
    manufacturerName:string;
    sku:string;    
    categoryName:string;
    price:number=0;
    
    constructor(Id:number, prodname:string,manufacturer:string, sku:string,category:string) {
        this.id=Id;
        this.productName=prodname;
        this.manufacturerName=manufacturer;
        this.sku=sku;
        this.categoryName=category;
    }
}