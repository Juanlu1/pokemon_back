export class Pokemon {
  id!: string;
  name!: string;
  type!: string;
  height!: number;
  weight!: number;
  imageUrl!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(props: Partial<Pokemon>) {
    Object.assign(this, props);
    this.createdAt ??= new Date();
    this.updatedAt ??= new Date();
  }
}
