import backendOrigin from "../config/origin";

export default class Database {
  static async authenticateUser(loginRequest) {
    console.log(loginRequest);
    try {
      const response = await fetch(`${backendOrigin}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });
      if (response.status === 401) {
        throw new Error("Invalid login credentials");
      }
      if (response.ok) {
        return response.json();
      } else {
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

  static async getPredictionFromModel() {
    const API_ENDPOINT = "us-central1-aiplatform.googleapis.com";
    const PROJECT_ID = "natural-motif-392613";
    const MODEL_ID = "text-bison@001";
    const API_KEY = "ya29.a0AbVbY6NUKsdSwj8a-ljbiqT7JaNI0rIKtV71-nXpokWFCsZUF6si_bvHgls-VTmZnL5_kLpy3RRp606LxmzH0sq31ozhyPNKJH2QL_qRDEp7g6C3wXh9lwVbkMzRgYwQdySOn3ZWrkIUKUysMku16EJvOcNW9PC9Y0fjaCgYKASUSARESFQFWKvPlyJDn9RuUitkbB_mCZr19xg0171";

    const predictRequest = {
      instances: [
        {
          content:
            "Give me 10 products that a grocery store might recommend given the following restrictions:\nthe products have to be available at an albertsons\n\nlocation - california\nseason - summer\n\nlist out the products and provide reasoning for them",
        },
      ],
      parameters: {
        temperature: 0.2,
        maxOutputTokens: 1024,
        topP: 0.8,
        topK: 40,
      },
    };

    fetch(
      `https://${API_ENDPOINT}/v1/projects/${PROJECT_ID}/locations/us-central1/publishers/google/models/${MODEL_ID}:predict`,
      {
        method: "POST",
        headers: {
           "Authorization": `Bearer ${API_KEY}`, // Replace YOUR_ACCESS_TOKEN with the actual access token
          "Content-Type": "application/json",
        },
        body: JSON.stringify(predictRequest),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }
}

