export class AddressEntry {
  public id?: string | null;
  public firstName: string;
  public lastName: string;
  public phone?: string;
  public email?: string;
  public workplace?: string;
  public workLocation?: string;
  public salary?: number;
  public notes?: string;


  constructor(firstName: string, lastName: string, phone?: string, email?: string, workplace?: string, workLocation?: string, salary?: number, notes?: string) {
    this.id = null;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.workplace = workplace;
    this.workLocation = workLocation;
    this.salary = salary;
    this.notes = notes;
  }
}
