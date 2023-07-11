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

    static async getAllUsers() {
        const response = await fetch(`${backendOrigin}/users`);
        const userData = await response.json();
        return userData;
    }

    static async getStoreById(storeId) {
        const response = await fetch(`${backendOrigin}/stores/${storeId}`);
        const storeData = await response.json();
        console.log(storeData);

        return storeData;
    }

    static async getStoresByStoreIds(storeIds) {
        let storeList = [];
        for (let i = 0; i < storeIds.length; i++) {
            storeList.push(Database.getStoreById(storeIds[i]));
        }
        return storeList;
    }

    static async getAllStores() {
        const response = await fetch(`${backendOrigin}/stores`);
        const storeData = await response.json();
        return storeData;
    }
}
