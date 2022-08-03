export class Product {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public author: string,
    public price: number,
    public borrowedBy: string,
    public borrowedOn: string,
    public status: string,
    public createdBy: string,
    public createdAt: Date,
    public updatedBy: string,
    public updatedAt: Date,
  ) {}
}
