const prod = {
  url: {
    APP_URL: "https://reactjs-competition-app.herokuapp.com",
    API_URL: "https://competition-app-backend.herokuapp.com",
  },
};

const dev = {
  url: {
    APP_URL: "http://localhost:3000",
    API_URL: "http://localhost:3090",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
