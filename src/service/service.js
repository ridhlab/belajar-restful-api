import http from "./http-common.js";

const getAll = () => {
  return http.get("/major");
};

const get = id => {
  return http.get(`/major/${id}`);
};

const create = data => {
  return http.post("/major", data);
};

const update = (id, data) => {
  return http.put(`/major/${id}`, data);
};

const remove = id => {
  return http.delete(`/major/${id}`);
};

const removeAll = () => {
  return http.delete(`/major`);
};

const findByTitle = title => {
  return http.get(`/major?title=${title}`);
};

export {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};