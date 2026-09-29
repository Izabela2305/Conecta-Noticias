// =====================================================
// CONECTA NOTÍCIAS
// JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {


    // =================================================
    // 1. BUSCA DE NOTÍCIAS
    // =================================================

    const campoBusca = document.getElementById("campoBusca");
    const mensagemBusca = document.getElementById("mensagemBusca");

    if (campoBusca) {

        campoBusca.addEventListener("input", function () {

            const texto = campoBusca.value
                .toLowerCase()
                .trim();

            const noticias = document.querySelectorAll(".noticia-card");

            let quantidadeEncontrada = 0;

            noticias.forEach(function (noticia) {

                const titulo = noticia
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();

                const coluna = noticia.closest(".col-noticia");

                if (titulo.includes(texto)) {

                    coluna.style.display = "";

                    quantidadeEncontrada++;

                } else {

                    coluna.style.display = "none";

                }

            });


            if (texto !== "" && quantidadeEncontrada === 0) {

                mensagemBusca.textContent =
                    "Nenhuma notícia encontrada.";

            } else {

                mensagemBusca.textContent = "";

            }

        });

    }


    // =================================================
    // 2. FAVORITOS
    // =================================================

    const botoesFavorito =
        document.querySelectorAll(".favorito-btn");

    const contadorFavoritos =
        document.getElementById("contadorFavoritos");

    let favoritos = 0;


    botoesFavorito.forEach(function (botao) {

        botao.addEventListener("click", function () {

            if (botao.classList.contains("ativo")) {

                botao.classList.remove("ativo");

                botao.textContent = "♡ Favoritar";

                favoritos--;

            } else {

                botao.classList.add("ativo");

                botao.textContent = "♥ Favoritado";

                favoritos++;

            }


            if (contadorFavoritos) {

                contadorFavoritos.textContent =
                    favoritos;

            }

        });

    });


    // =================================================
    // 3. VALIDAÇÃO DO FORMULÁRIO
    // =================================================

    const formulario =
        document.getElementById("formContato");


    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome");

            const email =
                document.getElementById("email");

            const mensagem =
                document.getElementById("mensagem");

            const resultado =
                document.getElementById("resultadoFormulario");


            let erros = [];


            if (nome.value.trim() === "") {

                erros.push("Digite seu nome.");

            }


            if (email.value.trim() === "") {

                erros.push("Digite seu e-mail.");

            } else {

                const formatoEmail =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!formatoEmail.test(email.value)) {

                    erros.push(
                        "Digite um e-mail válido."
                    );

                }

            }


            if (mensagem.value.trim() === "") {

                erros.push(
                    "Digite uma mensagem."
                );

            }


            if (erros.length > 0) {

                resultado.innerHTML =
                    erros.join("<br>");

                resultado.className =
                    "erro-formulario";

            } else {

                resultado.textContent =
                    "Mensagem enviada com sucesso!";

                resultado.className =
                    "sucesso-formulario";

                formulario.reset();

            }

        });

    }


    // =================================================
    // 4. BOTÃO VOLTAR AO TOPO
    // =================================================

    const botaoTopo =
        document.getElementById("voltarTopo");


    window.addEventListener("scroll", function () {

        if (!botaoTopo) {
            return;
        }


        if (window.scrollY > 400) {

            botaoTopo.style.display = "block";

        } else {

            botaoTopo.style.display = "none";

        }

    });


    if (botaoTopo) {

        botaoTopo.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});


// =====================================================
// 5. JQUERY
// =====================================================

$(document).ready(function () {

    // Animação dos cards ao carregar a página
    $(".noticia-card").hide().each(function (indice) {

        $(this)
            .delay(indice * 150)
            .fadeIn(600);

    });


    // Efeito ao passar o mouse pelo nome do site
    $(".navbar-brand").hover(
        function () {
            $(this).fadeTo(200, 0.7);
        },
        function () {
            $(this).fadeTo(200, 1);
        }
    );


    // Rolagem suave para links internos
    $('a[href^="#"]').on("click", function (event) {

        const destino =
            $($(this).attr("href"));

        if (destino.length) {

            event.preventDefault();

            $("html, body").animate({

                scrollTop: destino.offset().top - 70

            }, 600);

        }

    });

});