    document.getElementById("contato-form").addEventListener("submit", async function(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const sucesso = document.getElementById("mensagem-sucesso");

        try {
            const resposta = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (resposta.ok) {
                sucesso.classList.remove("hidden");
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente mais tarde.");
            }
        } catch (erro) {
            alert("Erro de rede. Verifique sua conexão.");
        }
    });
