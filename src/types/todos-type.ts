export type todo = {
    userId: number;
    title: string;
    completed: boolean;
}

export type todoImport = todo & {
    id: number
}