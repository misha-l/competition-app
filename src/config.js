const prod = {
  url: {
    APP_URL: "https://myapp.herokuapp.com",
    API_URL: "https://myapp.herokuapp.com",
  },
};

const dev = {
  url: {
    APP_URL: "http://localhost:3000",
    API_URL: "http://localhost:3090",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
