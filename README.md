## Calculador de Média para o SISU da UFRN

### Introdução
Este código HTML e JavaScript tem como objetivo principal auxiliar estudantes a calcularem suas médias para o Sistema de Seleção Unificada (SISU) da Universidade Federal do Rio Grande do Norte (UFRN). A ferramenta permite que o usuário insira suas notas do Exame Nacional do Ensino Médio (ENEM) e selecione o curso desejado, obtendo assim uma estimativa de sua média final.

### Estrutura do Código HTML
* **Cabeçalho:** Define o título da página, o charset e o viewport para garantir a compatibilidade com diferentes dispositivos.
* **Corpo:**
    * **Seleção do Curso:** Um dropdown interativo permite ao usuário escolher dentre os diversos cursos oferecidos pela UFRN.
    * **Inserção das Notas:** Campos de entrada numérica são fornecidos para que o usuário digite suas notas nas diferentes áreas do ENEM.
    * **Cálculo:** Um botão "Calcular" aciona a função JavaScript responsável por realizar os cálculos e exibir os resultados.
    * **Resultados:** As médias calculadas (geral do ENEM e específica para o curso) são apresentadas em campos de texto.
* **Rodapé:** Contém informações sobre os créditos do desenvolvedor e a versão da aplicação.

### Funcionalidades do JavaScript
* **Captura de Dados:** O script JavaScript captura os valores inseridos pelo usuário nos campos de entrada, incluindo a escolha do curso e as notas do ENEM.
* **Cálculo da Média:** 
    * Realiza o cálculo da média simples do ENEM, somando as notas e dividindo por 5.
    * Calcula a média ponderada específica para cada curso, considerando os pesos atribuídos a cada área do ENEM (detalhes dos pesos não foram fornecidos no código apresentado).
* **Exibição dos Resultados:** Os resultados dos cálculos são exibidos em campos de texto pré-formatados na página.

### Potencialidades e Melhorias
* **Personalização:** A ferramenta pode ser personalizada para outras universidades, bastando ajustar a lista de cursos e os pesos utilizados no cálculo das médias.
* **Funcionalidades Adicionais:**
    * **Comparação com Notas de Corte:** Comparar a média calculada com as notas de corte históricas dos cursos, fornecendo uma estimativa de chance de aprovação.
    * **Gráficos:** Visualizar os resultados em gráficos para facilitar a compreensão.
    * **Salvamento de Dados:** Permitir que o usuário salve seus cálculos para consulta posterior.
* **Melhorias na Interface:**
    * **Feedback ao Usuário:** Fornecer feedback visual ou textual durante o cálculo, como um indicador de carregamento ou uma mensagem de confirmação.
    * **Validação de Dados:** Implementar validação para garantir que os dados inseridos pelo usuário sejam válidos (por exemplo, que as notas estejam dentro do intervalo permitido).
    * **Acessibilidade:** Garantir que a ferramenta seja acessível a pessoas com deficiência, seguindo as diretrizes de acessibilidade web.

### Considerações Finais
Este código demonstra uma aplicação prática de HTML e JavaScript para criar uma ferramenta útil para estudantes. Com algumas adaptações e melhorias, ele pode se tornar ainda mais completo e eficiente.

Texto gerado por inteligência artificial
