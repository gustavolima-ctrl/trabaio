const nome = document.getElementById("nome");
nome.addEventListener("mouseenter",function(){
    nome.textContent =" Bem-vindo, prazer em te conhecer";
});
nome.addEventListener("mouseleave",function(){
    nome.textContent =" Oi, sou Gustavo Rodrigues";
});

const formulario = document.getElementById("formNome");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nomeusuario = document.getElementById("nomeusuario").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "oi" + nomeusuario +
        " Venha ver meus projetos!";

});
