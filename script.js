console.log("Portal de notícias carregado com sucesso!");

// Pergunta o nome do usuário e exibe mensagem personalizada
let nomeVisitante = prompt("Qual é o seu nome?");
alert("Olá, " + nomeVisitante + "! Bem-vindo ao Portal ETEC News.");
console.log("Visitante ativo: " + nomeVisitante);

// Pergunta se deseja ativar as notificações do site
let desejaNoticias = confirm("Deseja receber notificações sobre novas matérias?");
console.log("Aceitou receber notificações: " + desejaNoticias);

