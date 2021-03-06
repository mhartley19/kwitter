import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      // baseURL: "https://socialapp-api.herokuapp.com/",
      baseURL: "https://kwitter-api-b.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async register({ username, displayName, password }) {
    try {
      const result = await this.axiosInstance.post("/users", {
        username,
        displayName,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async recentPosts(diff, latestLocalPostId) {
    try {
      let result = await this.axiosInstance.get(
        `/messages?limit=${diff}&offset=0`
      );
      result = result.messages.filter((post) => post.id > latestLocalPostId);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async newestPost() {
    try {
      const result = await this.axiosInstance.get("/messages?limit=1&offset=0");
      return result.messages[0];
    } catch (err) {
      throw err;
    }
  }

  async initiateMessages(offset) {
    try {
      const result = await this.axiosInstance.get(
        `/messages?limit=25&offset=${offset}`
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async createNewMessage(message) {
    try {
      const result = await this.axiosInstance.post("/messages", {
        text: message,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteOldMessage(id) {
    try {
      const result = await this.axiosInstance.delete(`/messages/${id}`);

      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async postLike(id) {
    try {
      await this.axiosInstance.post("/likes", { messageId: id });
      const request = await this.axiosInstance.get(`/messages/${id}`);
      return request;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async deleteLike(likeId, id) {
    try {
      await this.axiosInstance.delete(`/likes/${likeId}`);
      const request = await this.axiosInstance.get(`/messages/${id}`);
      return request;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getUser(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async getUserMessages(user) {
    try {
      const result = await this.axiosInstance.get(
        `/messages?limit=100&offset=0&username=${user}`
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async putPicture(username, file) {
    try {
      const result = await this.axiosInstance.put(
        `/users/${username}/picture`,
        file
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async updateUser({ username, password, displayName, about }) {
    try {
      const result = await this.axiosInstance.patch(`/users/${username}`, {
        password,
        displayName,
        about,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api-b.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
