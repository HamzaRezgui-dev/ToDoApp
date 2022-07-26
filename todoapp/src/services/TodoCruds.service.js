import axios from "axios";

const { REACT_APP_API_HOST } = process.env;

export const addTask = (data, setData) => {
  axios
    .post(`${REACT_APP_API_HOST}/task/add`, data)
    .then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      alert("erreur");
    });
};

export const getTasks = (setData) => {
  axios
    .get(`${REACT_APP_API_HOST}/task/get_all`)
    .then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      alert("erreur");
    });
};

export const deleteTask = (data, setData) => {
  axios
    .delete(`${REACT_APP_API_HOST}/task/delete/${data._id}`)
    .then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      alert("erreur");
    });
};

export const updateTask = (data, setData) => {
  axios
    .put(`${REACT_APP_API_HOST}/task/update/${data._id}`, data)
    .then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      alert("erreur");
    });
};

export const doneUndone = (data, setData) => {
  axios
    .put(`${REACT_APP_API_HOST}/task/done_and_undone/${data._id}`)
    .then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    })
    .catch((error) => {
      alert("erreur");
    });
};
