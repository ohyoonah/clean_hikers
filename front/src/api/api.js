import axios from "axios";

const backPort = "5000";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}/`;

async function get(endpoint, params = "") {
  console.log(`GET ${serverUrl + endpoint + "/" + params}`);
  return axios.get(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  console.log(`POST ${serverUrl + endpoint} : ${bodyData}`);
  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);
  console.log(`PUT ${serverUrl + endpoint} : ${bodyData}`);
  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function del(endpoint, params = "") {
  console.log(`DELETE ${serverUrl + endpoint + "/" + params}`);
  return axios.delete(serverUrl + endpoint + "/" + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

export { get, post, put, del as delete, serverUrl };
