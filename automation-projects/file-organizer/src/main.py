"""
File Organizer
--------------
Automação em Python que organiza arquivos automaticamente por categoria,
com base na extensão de cada arquivo.

Autor: Matheus Costa
"""

from __future__ import annotations

import argparse
import logging
import shutil
import sys
from pathlib import Path

# Mapa de extensão -> categoria (pasta de destino).
# Adicione ou ajuste extensões livremente.
EXTENSION_MAP: dict[str, str] = {
    # Documentos
    ".pdf": "Documentos",
    ".doc": "Documentos",
    ".docx": "Documentos",
    ".txt": "Documentos",
    ".odt": "Documentos",
    # Imagens
    ".jpg": "Imagens",
    ".jpeg": "Imagens",
    ".png": "Imagens",
    ".gif": "Imagens",
    ".svg": "Imagens",
    ".webp": "Imagens",
    # Vídeos
    ".mp4": "Videos",
    ".mov": "Videos",
    ".avi": "Videos",
    ".mkv": "Videos",
    # Compactados
    ".zip": "Compactados",
    ".rar": "Compactados",
    ".7z": "Compactados",
    ".tar": "Compactados",
    ".gz": "Compactados",
    # Planilhas
    ".xlsx": "Planilhas",
    ".xls": "Planilhas",
    ".csv": "Planilhas",
    # Áudio
    ".mp3": "Audio",
    ".wav": "Audio",
}

CATEGORIA_PADRAO = "Outros"


def configurar_log(pasta_destino: Path) -> logging.Logger:
    """Configura o logger para gravar em arquivo e também exibir no console."""
    logger = logging.getLogger("file_organizer")
    logger.setLevel(logging.INFO)
    logger.handlers.clear()

    formato = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s", "%H:%M:%S")

    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setFormatter(formato)
    logger.addHandler(console_handler)

    log_path = pasta_destino / "organizer_log.txt"
    file_handler = logging.FileHandler(log_path, encoding="utf-8")
    file_handler.setFormatter(formato)
    logger.addHandler(file_handler)

    return logger


def nome_sem_conflito(destino: Path) -> Path:
    """Evita sobrescrever arquivos: adiciona (1), (2)... se já existir um arquivo com o mesmo nome."""
    if not destino.exists():
        return destino

    base, ext = destino.stem, destino.suffix
    contador = 1
    novo_destino = destino.with_name(f"{base} ({contador}){ext}")
    while novo_destino.exists():
        contador += 1
        novo_destino = destino.with_name(f"{base} ({contador}){ext}")
    return novo_destino


def organizar_pasta(pasta: Path, simular: bool = False) -> dict[str, int]:
    """
    Organiza os arquivos da pasta informada em subpastas por categoria.

    Retorna um dicionário com a contagem de arquivos movidos por categoria.
    """
    if not pasta.exists():
        raise FileNotFoundError(f"A pasta '{pasta}' não existe.")
    if not pasta.is_dir():
        raise NotADirectoryError(f"'{pasta}' não é uma pasta.")

    logger = configurar_log(pasta)
    resumo: dict[str, int] = {}
    erros = 0

    arquivos = [f for f in pasta.iterdir() if f.is_file() and f.name != "organizer_log.txt"]
    logger.info("Iniciando organização de %d arquivo(s) em '%s'.", len(arquivos), pasta)

    for arquivo in arquivos:
        categoria = EXTENSION_MAP.get(arquivo.suffix.lower(), CATEGORIA_PADRAO)
        pasta_categoria = pasta / categoria

        try:
            if not simular:
                pasta_categoria.mkdir(exist_ok=True)

            destino = nome_sem_conflito(pasta_categoria / arquivo.name)

            if simular:
                logger.info("[SIMULAÇÃO] %s -> %s/", arquivo.name, categoria)
            else:
                shutil.move(str(arquivo), str(destino))
                logger.info("Movido: %s -> %s/", arquivo.name, categoria)

            resumo[categoria] = resumo.get(categoria, 0) + 1

        except PermissionError:
            logger.error("Sem permissão para mover '%s'. Pulando.", arquivo.name)
            erros += 1
        except OSError as e:
            logger.error("Erro ao mover '%s': %s", arquivo.name, e)
            erros += 1

    logger.info("Concluído. %d arquivo(s) organizados, %d erro(s).", sum(resumo.values()), erros)
    return resumo


def main() -> None:
    parser = argparse.ArgumentParser(description="Organiza arquivos de uma pasta por categoria.")
    parser.add_argument("pasta", help="Caminho da pasta que será organizada.")
    parser.add_argument(
        "--simular",
        action="store_true",
        help="Mostra o que seria feito, sem mover nenhum arquivo de verdade.",
    )
    args = parser.parse_args()

    try:
        resumo = organizar_pasta(Path(args.pasta).expanduser().resolve(), simular=args.simular)
    except (FileNotFoundError, NotADirectoryError) as e:
        print(f"Erro: {e}")
        sys.exit(1)

    print("\nResumo:")
    if not resumo:
        print("  Nenhum arquivo precisou ser movido.")
    for categoria, total in sorted(resumo.items()):
        print(f"  {categoria}: {total} arquivo(s)")


if __name__ == "__main__":
    main()
