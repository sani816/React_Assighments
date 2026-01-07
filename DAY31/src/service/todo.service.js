import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const todosRef = collection(db, "todos");

export const createTodo = async (data) => await addDoc(todosRef, data);

export const getTodos = async () => {
  const snap = await getDocs(todosRef);
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateTodo = async (id, data) =>
  await updateDoc(doc(db, "todos", id), data);

export const deleteTodoById = async (id) =>
  await deleteDoc(doc(db, "todos", id));
