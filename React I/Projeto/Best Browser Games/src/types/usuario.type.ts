export type UsuarioType = {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: string;
    estado: string;
    pais: string;
    [prop: string]: string | number;
}