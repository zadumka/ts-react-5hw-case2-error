export interface Note {
    id: number;
    title: string;
    content: string;
    tag: string;
    isArchived?: boolean;
}
