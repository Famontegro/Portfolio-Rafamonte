# Portfolio Rafamonte

Site estático de portfólio para Rafael Montenegro Ribeiro. Feito com HTML, CSS e JavaScript, sem etapa de compilação e pronto para publicação no GitHub Pages.

## Publicar no GitHub Pages

1. Envie os arquivos desta pasta para a raiz de um repositório GitHub.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch principal e a pasta `/ (root)` e salve.
4. Aguarde a publicação e abra o endereço informado pelo GitHub Pages.

## Ativar o formulário com Formspree

O formulário já está conectado ao endpoint informado, valida nome, e-mail e mensagem, envia por `POST` usando JavaScript puro e apresenta estados de sucesso e erro. O atributo `action` também aponta para o endpoint, permitindo o envio HTML padrão caso o JavaScript esteja indisponível.

O endpoint configurado está em `index.html` (atributo `action`) e `script.js` (constante `FORMSPREE_ENDPOINT`). Caso você troque de formulário no futuro:

1. Crie uma conta gratuita em [formspree.io](https://formspree.io/).
2. Crie um formulário e configure o endereço de e-mail que receberá as mensagens.
3. Confirme o endereço de e-mail, se o Formspree solicitar, e copie o endpoint gerado. Ele terá um formato como `https://formspree.io/f/xxxxxxxx`.
4. Atualize o endpoint nos dois locais: o atributo `action` do formulário em `index.html` e a constante `FORMSPREE_ENDPOINT` em `script.js`.
5. Publique as alterações no repositório do GitHub Pages.

Não coloque credenciais privadas no código; use somente o endpoint público do formulário.

## Preferências e conteúdo

- O tema claro e o idioma Português (Brasil) são os padrões. As preferências de idioma e tema são salvas separadamente no `localStorage`.
- Todos os textos da versão em inglês ficam no objeto `translations` de `script.js`.
- Os projetos de prevenção de incêndios estão descritos sem detalhes de funcionamento que ainda não foram fornecidos.
- As ilustrações do site são vetoriais e estão incluídas no HTML/CSS; não há dependências externas de imagens.
