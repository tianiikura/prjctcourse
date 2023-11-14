class API {
    apiUrl = "https://api.github.com";
    #token = "g" + "hp_0lDiXhcScdaUhvoFy" + "19NhYkYvu3dZR2Plgl8";
  
    async getUser(userName) {
      const response = await fetch(`${this.apiUrl}/users/${userName}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.#token}`
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      return data;
    }
  
    async getFollowers(userName, amount = 10) {
      const response = await fetch(
        `${this.apiUrl}/users/${userName}/followers?per_page=${amount}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.#token}`
          }
        }
      );
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      return data;
    }

    async getRepoList(userName, amount = 5, sort = "pushed") {
        const response = await fetch(
            `${this.apiUrl}/users/${userName}/repos?per_page=${amount}&sort=${sort}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.#token}`,
                    Accept: "application/vnd.github+json",
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            }
        );
        const data = await response.json();
    
        if (!response.ok) {
        throw new Error(data.message);
        }
      
        return data;
    }
}
  
  export const api = new API();
  