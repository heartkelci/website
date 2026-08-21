import type { Alpine } from "alpinejs";

interface interestFormData{
    [x: string]: any;
    submitted:boolean;
    name:string;
    email:string;
    interest:string;
    message:string;
    handleSubmit(): void;
}
export default (Alpine: Alpine) => {
    Alpine.data("interestForm", (): interestFormData => ({
        submitted : false,
        name : "",
        email: "",
        interest : "",
        message : "",
        handleSubmit(){
            let response = fetch("/", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: new URLSearchParams({"form-name": "interest", name: this.name, email: this.email, interest: this.interest, message: this.message}).toString()
            }).then(() => {this.submitted = true; console.log("Form submitted successfully")})
            .catch(error => console.log(error));
        }
    }))
};
