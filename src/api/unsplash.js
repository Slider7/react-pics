import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 9op0aGMn4XR-RFxqpYFQGOHEVRGQIwhgZ97-SU_zems",
  },
});
