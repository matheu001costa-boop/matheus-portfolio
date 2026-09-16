# Projetos de Automação — Matheus Costa

Esta pasta reúne 3 automações em Python, independentes do site do
portfólio, criadas para demonstrar na prática habilidades de automação,
tratamento de dados e boas práticas de código.

Cada projeto é executado localmente (linha de comando) e possui seu
próprio `README.md` com instruções de instalação, execução, exemplos de
entrada/saída e tratamento de erros.

| Projeto | Descrição | Tecnologia |
|---|---|---|
| [`file-organizer/`](./file-organizer) | Organiza arquivos automaticamente por categoria, com base na extensão. | Python (biblioteca padrão) |
| [`report-generator/`](./report-generator) | Lê um CSV, calcula um resumo estatístico e gera um relatório em PDF. | Python + ReportLab |
| [`excel-automation/`](./excel-automation) | Limpa, organiza e calcula totais em planilhas `.xlsx`. | Python + pandas + openpyxl |

## Por que os projetos rodam localmente e não direto no navegador

O portfólio (React + Vite) é um site estático — ele não executa código
Python no navegador. Por isso, cada card na seção "Projetos de Automação"
do site aponta para o código-fonte real no GitHub e mostra as instruções
de execução, em vez de simular uma execução que não existe.

Se no futuro fizer sentido oferecer uma demonstração ao vivo, o caminho
recomendado é publicar cada script por trás de uma API simples (por
exemplo, com FastAPI ou Flask) e consumir essa API a partir do site — a
estrutura de pastas já está pronta para isso.

## Testado

Os três scripts foram executados e validados manualmente antes da entrega
(entradas de exemplo, geração de PDF/XLSX reais e simulação dos cenários
de erro). Os resultados estão documentados no `README.md` de cada
projeto.
