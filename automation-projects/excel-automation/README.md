# Excel Automation

Automação em Python que lê uma planilha `.xlsx`, limpa os dados, organiza
as colunas e calcula totais automaticamente, gerando uma nova planilha.

## Funcionalidades

- Importa dados de um arquivo `.xlsx` (ou `.xls`).
- Remove linhas totalmente vazias.
- Remove espaços extras em colunas de texto.
- Organiza as colunas em ordem alfabética e padroniza os nomes (Title Case).
- Calcula o total de cada coluna numérica e adiciona uma linha `TOTAL` ao
  final da planilha.
- Gera uma nova planilha (`<nome>_organizado.xlsx`), preservando o arquivo
  original.
- Informa no terminal o resultado da operação (linhas antes/depois,
  colunas organizadas, colunas somadas).
- Trata erros de arquivo ausente, extensão incorreta e planilha vazia ou
  corrompida.

## Estrutura da pasta

```
excel-automation/
├── src/
│   └── main.py
├── examples/
│   ├── dados-brutos.xlsx        # exemplo de entrada
│   └── dados-organizados.xlsx   # exemplo de saída já gerado
├── requirements.txt
└── README.md
```

## Requisitos

- Python 3.10 ou superior.
- Bibliotecas `pandas` e `openpyxl`.

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
python src/main.py examples/dados-brutos.xlsx -o examples/dados-organizados.xlsx

# Usar com a sua própria planilha:
python src/main.py caminho/para/sua-planilha.xlsx
```

## Exemplo de entrada ([`examples/dados-brutos.xlsx`](./examples/dados-brutos.xlsx))

| nome   | vendas | regiao |
|--------|--------|--------|
| " Ana "| 1200.5 | " Sul" |
| "Bruno"| 980    | "Norte "|
| *(linha vazia)* | | |
| "Carla "| 750   | "Sul"  |

## Exemplo de saída (testado)

Terminal:

```
$ python src/main.py examples/dados-brutos.xlsx -o examples/dados-organizados.xlsx

Lendo 'dados-brutos.xlsx'...
Linhas antes da limpeza: 4
Linhas depois da limpeza: 3
Colunas organizadas: Nome, Regiao, Vendas
Colunas somadas (linha TOTAL): Vendas
Planilha gerada em: .../examples/dados-organizados.xlsx
```

Planilha gerada ([`examples/dados-organizados.xlsx`](./examples/dados-organizados.xlsx)):

| Nome  | Regiao | Vendas |
|-------|--------|--------|
| Ana   | Sul    | 1200.5 |
| Bruno | Norte  | 980.0  |
| Carla | Sul    | 750.0  |
| TOTAL |        | 2930.5 |

## Tratamento de erros

- Arquivo inexistente → `Erro: Arquivo '...' não encontrado.` (encerra com
  código `1`).
- Extensão diferente de `.xlsx`/`.xls` → mensagem clara, sem tentar
  processar.
- Planilha vazia ou corrompida → erro específico (`PlanilhaInvalidaError`),
  informando o motivo.
- Qualquer outra falha inesperada é capturada e exibida de forma
  compreensível, sem travar com um traceback cru.
