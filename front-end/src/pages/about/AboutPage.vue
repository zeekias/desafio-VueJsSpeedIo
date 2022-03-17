<template>
    <div class="main-container">
     <div>
        <section id="sobre-o-desafio">
                <h1>Sobre o Desafio VueJs - SpeedIo </h1>
                <hr/>
                <h2><i>Leia atentamente os requisitos.</i></h2>
                <hr/>
                <p>
                    - Pergunte em caso de dúvidas<br>
                    <br>- Implemente o que possa, qualidade é mais importante que completar todo o desafio.<br>
                    <br>- Eficiencia e otimização são itens importantes.<br>
                </p>
                <hr/>
                <h2><i>Requisitos fundamentais:</i> </h2>
                <hr/>
                <p>
                    - Construir um serviço de encurtamento de URLS com o menor tamanho possível.<br>
                    <br>- Cadastro de usuário básico ( sign up/ login) <br>
                    <br>- Usuarios podem criar urls de forma anonima ( sem fazer login )<br>
                    <br>- Usuarios registrados podem deletar urls criadas por eles mesmos.<br>
                    <br>- Redirecionar para url original quando a url encurtada for visitada (ex: shr.c/abcd -> www.google.com )<br>
                    <br>- Incrementar o número de visitas de uma url a cada visita.<br>
                    <br>- Página com o top 100 de urls visitadas<br>
                    <br>- Mostrar o titulo das urls no top100<br>
                    <br>- Escrever documentação de como rodar o projeto<br>
                    <br>- Explicar partes do código que poderiam ser melhoradas se tivesse mais tempo disponível e porque.<br>
                    <br>- Usar Vuejs no Frontend<br>
                    <br>- Backend Nodejs ou Rails<br>
                    <br>- Testes unitários e e2e<br>
                </p>
                <hr>
        </section>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script >

<style lang="scss" scoped>

    *{
     color: black;
    }

    #sobre-o-desafio{
        padding: 0 60px;
        text-align: left;
        h1{
            text-align: center;
            font-size: 2em;
            font-weight: bold;
        }
        hr{
            margin: 20px 0px 20px ;
        }
    }
</style>