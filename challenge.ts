// Create a User class
//Add a firstName, lastName and email
//Add a get to return fullName
//Add a method to check if your emal param matches the user's current email

export class User {
    firstName: string;
    lastName: string;
    email: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    checkMatch(email: string): boolean {
        return this.email === email
    }
}
