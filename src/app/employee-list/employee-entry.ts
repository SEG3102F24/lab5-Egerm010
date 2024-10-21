export class EmployeeEntry {
    public id?: string | null;
    public firstName: string;
    public lastName: string;
    public phone?: string;
    public email?: string;
    public workLocation?: string;
    public notes?: string;
  
  
    constructor(firstName: string, lastName: string, phone?: string, email?: string,workLocation?: string, notes?: string) {
      this.id = null;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.email = email;
      this.notes = notes;
      this.workLocation = workLocation;
    }
  }