const production = process.env.NODE_ENV !== "development"
const serverUrl = production ? "https://sangkapnxt.vercel.app" : "http://localhost:3000"
export default serverUrl