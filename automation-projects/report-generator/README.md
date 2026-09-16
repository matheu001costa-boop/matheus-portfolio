# Report Generator

Automação em Python que recebe um arquivo CSV, valida os dados, calcula um
resumo estatístico das colunas numéricas e gera um relatório em PDF
automaticamente.

## Funcionalidades

- Importa dados de um arquivo `.csv`.
- Valida se o arquivo existe, tem extensão correta, cabeçalho e dados.
- Identifica automaticamente quais colunas são numéricas.
- Calcula soma, média, mínimo e máximo de cada coluna numérica.
- Gera um relatório em PDF com título, data de geração e tabela de resumo.
- Informa no terminal o status da operação (linhas processadas, colunas
  numéricas encontradas).
- Trata erros de arquivo ausente, extensão errada, CSV vazio/sem cabeçalho
  e falhas inesperadas na geração do PDF.

## Estrutura da pasta

```
report-generator/
├── src/
│   └── main.py
├── examples/
│   ├── vendas.csv          # exemplo de entrada
│   └── vendas-saida.pdf    # exemplo de saída já gerado
├── requirements.txt
└── README.md
```

## Requisitos

- Python 3.10 ou superior.
- Biblioteca `reportlab` (geração de PDF).

## Instalação

```bash
# 1. Criar ambiente virtual
python -m venv .venv

# 2. Ativar o ambiente virtual
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# 3. Instalar dependências
pip install -r requirements.txt
```

## Como executar

```bash
# Testar com o exemplo incluído no projeto:
python src/main.py examples/vendas.csv -o examples/vendas-saida.pdf

# Usar com o seu próprio CSV:
python src/main.py caminho/para/seu-arquivo.csv
```

## Exemplo de entrada ([`examples/vendas.csv`](./examples/vendas.csv))

```csv
produto,quantidade,preco_unitario
Teclado,10,89.90
Mouse,25,49.90
Monitor,5,650.00
Headset,12,120.00
Webcam,8,180.00
```

## Exemplo de saída (testado)

Terminal:

```
$ python src/main.py examples/vendas.csv -o examples/vendas-saida.pdf

Lendo 'vendas.csv'...
Validando e calculando resumo...
Gerando PDF em '.../examples/vendas-saida.pdf'...
Concluído com sucesso.
  Linhas processadas: 5
  Colunas numéricas encontradas: 2
```

O PDF gerado ([`examples/vendas-saida.pdf`](./examples/vendas-saida.pdf)) contém:

| Coluna | Soma | Média | Mínimo | Máximo |
|---|---|---|---|---|
| quantidade | 60.00 | 12.00 | 5.00 | 25.00 |
| preco_unitario | 1089.80 | 217.96 | 49.90 | 650.00 |

## Tratamento de erros

- Arquivo inexistente → `Erro: Arquivo '...' não encontrado.` (encerra com
  código `1`).
- Extensão diferente de `.csv` → mensagem clara, sem tentar processar.
- CSV sem cabeçalho ou sem linhas → erro específico, informando o motivo.
- Qualquer outra falha inesperada é capturada e exibida de forma
  compreensível, sem travar com um traceback cru.
