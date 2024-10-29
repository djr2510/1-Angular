import { Component } from "@angular/core";

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html'
})
export class LivroListComponent {
    livros = [
        {
            titulo: "D&D E5",
            descricao: "Livro de RPG de mesa",
            imagem: "https://imgv2-1-f.scribdassets.com/img/document/338648187/original/320cbb7db8/1574435934?v=1",
            autores: [
                "Wizards of the Coast"
            ]
        },
        {
            titulo: "Tormenta 20",
            descricao: "Livro de RPG de mesa",
            imagem: "https://t20ac.vercel.app/assets/t20-basico-jogo-do-ano-removebg-preview.png",
            autores: [
                "Marcelo Cassaro",
                "Talisma",
                "Leonardo"
            ]
        },
        {
            titulo: "Ordem paranormal",
            descricao: "Livro de RPG de mesa",
            imagem: "https://online.anyflip.com/qmmjb/gzqf/files/shot.jpg",
            autores: [
                "Rafael Lange",
                "Fábio S. Tavares"
            ]
        }
    ]

    adicionar() {
        this.livros.push({
            titulo: "Novo Livro",
            descricao: "Descricao do novo Livro",
            imagem: "",
            autores: []
        })
    }
}
