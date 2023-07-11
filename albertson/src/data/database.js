import backendOrigin from "../config/origin";

export default class Database {

    static async postUserSession(loginRequest) {
        console.log(loginRequest);
        console.log("I CALLED THIS FUNCTION");
    
        try {
            const response = await fetch(`${backendOrigin}/users/login`, {
            method: "POST",     
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginRequest),
            });
  
        if (response.status === 401) {
            console.log("I AM HERE IN THE 401");
            throw new Error("Invalid login credentials");
        }
  
        if (response.ok) {
            return response.json();
        } else {
            console.log("THE RESPONSE IS NOT OKAY");
            throw new Error("An error occurred");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  