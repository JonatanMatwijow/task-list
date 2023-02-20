//Debo de importar la lista, en este caso llamada task, del archivo ts llamdado Task, del cual sera exportado para que pueda ser leido por la interfaz.
import { task } from "./Task"

export const TASKS: task[] = [
    {
        id: 1,
        text: "Tengo que ponerme las pilas para aprender bien y asi obtener laburo de desarrollador",
        day: "Mayo 31 a las 22hs",
        reminder: true
    },
    {
        id: 2,
        text: "Que quede lindo el front, no te olvides de que sea responsive",
        day: "febrero 29 a las 17hs",
        reminder: true
    },
    {
        id: 3,
        text:"Debes de practicas mas codigo, para que no te olvides lo aprendido",
        day:"Todos los dias, hacer un poco",
        reminder: false
    },
    {
        id: 4,
        text:"ver los videos que estan en youtube, programaTK, son de re ayuda",
        day:"Agosto 5 a las 15hs",
        reminder: false
    },
    {
        id: 5,
        text:"Tengo que terminar el pozo ciego",
        day:"antes de que vero me ahorque",
        reminder: true
    }
]