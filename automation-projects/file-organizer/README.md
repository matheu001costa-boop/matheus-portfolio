# File Organizer

Automação em Python que organiza arquivos automaticamente por categoria,
com base na extensão de cada arquivo (PDF → Documentos, JPG/PNG → Imagens,
MP4 → Vídeos, ZIP/RAR → Compactados, XLSX/CSV → Planilhas, etc.).

## Funcionalidades

- Analisa todos os arquivos de uma pasta.
- Cria automaticamente as pastas de categoria que forem necessárias.
- Move cada arquivo para a pasta correspondente.
- Evita sobrescrever arquivos: se já existir um arquivo com o mesmo nome,
  o novo é salvo como `nome (1).ext`, `nome (2).ext`, etc.
- Registra todas as operações em `organizer_log.txt`, dentro da própria
  pasta organizada, além de exibir no terminal.
- Trata erros de permissão e de sistema de arquivos sem interromper o
  processamento dos demais arquivos.
- Modo `--simular`, que mostra o que seria feito sem mover nada de fato.

## Estrutura da pasta

```
file-organizer/
├── src/
│   └── main.py
├── examples/
│   └── pasta-exemplo/     # arquivos de exemplo prontos para testar
├── requirements.txt
└── README.md
```

## Requisitos

- Python 3.10 ou superior.
- Nenhuma biblioteca externa (usa apenas a biblioteca padrão).

## Instalação

```bash
# 1. Criar ambiente virtual
python -m venv .venv

# 2. Ativar o ambiente virtual
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# 3. Instalar dependências (não há nenhuma neste projeto)
pip install -r requirements.txt
```

## Como executar

```bash
# Testar com a pasta de exemplo incluída no projeto:
python src/main.py examples/pasta-exemplo --simular
python src/main.py examples/pasta-exemplo

# Organizar uma pasta sua:
python src/main.py "/caminho/da/sua/pasta"
```

## Exemplo de entrada

A pasta [`examples/pasta-exemplo/`](./examples/pasta-exemplo) já vem com 4
arquivos reais prontos para teste:

```
relatorio.txt
foto1.png
backup.zip
planilha.xlsx
```

## Exemplo de saída (testado)

```
$ python src/main.py examples/pasta-exemplo

08:36:05 - INFO - Iniciando organização de 4 arquivo(s) em 'examples/pasta-exemplo'.
08:36:05 - INFO - Movido: planilha.xlsx -> Planilhas/
08:36:05 - INFO - Movido: relatorio.txt -> Documentos/
08:36:05 - INFO - Movido: backup.zip -> Compactados/
08:36:05 - INFO - Movido: foto1.png -> Imagens/
08:36:05 - INFO - Concluído. 4 arquivo(s) organizados, 0 erro(s).

Resumo:
  Compactados: 1 arquivo(s)
  Documentos: 1 arquivo(s)
  Imagens: 1 arquivo(s)
  Planilhas: 1 arquivo(s)
```

Estrutura resultante:

```
pasta-exemplo/
├── Compactados/backup.zip
├── Documentos/relatorio.txt
├── Imagens/foto1.png
├── Planilhas/planilha.xlsx
└── organizer_log.txt
```

## Tratamento de erros

- Pasta inexistente ou caminho inválido → mensagem clara e encerra com
  código de saída `1`, sem quebrar com um traceback cru.
- Sem permissão para mover um arquivo → o erro é registrado no log e o
  script continua processando os demais arquivos.
- Arquivo de destino já existe → renomeado automaticamente, nunca
  sobrescrito.
