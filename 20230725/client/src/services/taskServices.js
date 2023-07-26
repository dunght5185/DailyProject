import axios from 'axios';
const apiUrl = 'http://localhost:8081/api/tasks';

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTasks(task) {
    return axios.post(apiUrl, task);
}

export function updateTasks(id, task) {
    return axios.put(apiUrl+ '/' +id, task);
}

export function deleteTasks(id) {
    return axios.delete(apiUrl+ '/' +id);
}