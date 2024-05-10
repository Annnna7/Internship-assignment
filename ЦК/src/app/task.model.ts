export class Task {
  restaurant!: string;
  people!: number;
  date_time!: Date;
  first_name!: string;
  phone!:  string;
  wishes!: string;
  id!: number;
  soups!: string;
  salads!: string;
  pizza!: string;
  price!: string;
  tea_cof!: string;
  noalc!: string;
  alc!: string;
  beer!:number;
  createdAt!: Date;
  lastModifiedAt!: Date;

  constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}