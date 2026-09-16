"""
Report Generator
-----------------
Automação em Python que lê um arquivo CSV, valida os dados, calcula um
resumo estatístico e gera um relatório em PDF automaticamente.

Autor: Matheus Costa
"""

from __future__ import annotations

import argparse
import csv
import sys
from datetime import datetime
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate,
    Table,
    TableStyle,
    Paragraph,
    Spacer,
)
from reportlab.lib.styles import getSampleStyleSheet


class DadosInvalidosError(Exception):
    """Lançado quando o CSV está vazio ou não possui colunas legíveis."""


def ler_csv(caminho: Path) -> tuple[list[str], list[dict[str, str]]]:
    """Lê o CSV e retorna (cabeçalhos, linhas)."""
    if not caminho.exists():
        raise FileNotFoundError(f"Arquivo '{caminho}' não encontrado.")
    if caminho.suffix.lower() != ".csv":
        raise ValueError("O arquivo precisa ter extensão .csv.")

    with caminho.open(newline="", encoding="utf-8-sig") as f:
        leitor = csv.DictReader(f)
        linhas = list(leitor)
        cabecalhos = leitor.fieldnames or []

    if not cabecalhos:
        raise DadosInvalidosError("O CSV não possui cabeçalho.")
    if not linhas:
        raise DadosInvalidosError("O CSV não possui nenhuma linha de dados.")

    return cabecalhos, linhas


def calcular_resumo(cabecalhos: list[str], linhas: list[dict[str, str]]) -> dict:
    """
    Calcula um resumo simples: total de linhas e, para cada coluna numérica,
    soma / média / mínimo / máximo.
    """
    resumo_colunas: dict[str, dict[str, float]] = {}

    for coluna in cabecalhos:
        valores_numericos: list[float] = []
        for linha in linhas:
            valor = (linha.get(coluna) or "").strip().replace(",", ".")
            if valor == "":
                continue
            try:
                valores_numericos.append(float(valor))
            except ValueError:
                valores_numericos = []  # coluna não é numérica, ignora
                break

        if valores_numericos:
            resumo_colunas[coluna] = {
                "soma": sum(valores_numericos),
                "media": sum(valores_numericos) / len(valores_numericos),
                "minimo": min(valores_numericos),
                "maximo": max(valores_numericos),
            }

    return {
        "total_linhas": len(linhas),
        "total_colunas": len(cabecalhos),
        "colunas_numericas": resumo_colunas,
    }


def gerar_pdf(origem: Path, resumo: dict, saida: Path) -> None:
    """Gera o relatório em PDF a partir do resumo calculado."""
    estilos = getSampleStyleSheet()
    doc = SimpleDocTemplate(str(saida), pagesize=A4, title="Relatório")
    elementos = []

    elementos.append(Paragraph("Relatório de Dados", estilos["Title"]))
    elementos.append(
        Paragraph(
            f"Arquivo de origem: {origem.name} — Gerado em "
            f"{datetime.now().strftime('%d/%m/%Y %H:%M')}",
            estilos["Normal"],
        )
    )
    elementos.append(Spacer(1, 0.6 * cm))

    elementos.append(
        Paragraph(
            f"Total de linhas: {resumo['total_linhas']} • "
            f"Total de colunas: {resumo['total_colunas']}",
            estilos["Normal"],
        )
    )
    elementos.append(Spacer(1, 0.6 * cm))

    if resumo["colunas_numericas"]:
        elementos.append(Paragraph("Resumo das colunas numéricas", estilos["Heading2"]))
        dados_tabela = [["Coluna", "Soma", "Média", "Mínimo", "Máximo"]]
        for coluna, stats in resumo["colunas_numericas"].items():
            dados_tabela.append(
                [
                    coluna,
                    f"{stats['soma']:.2f}",
                    f"{stats['media']:.2f}",
                    f"{stats['minimo']:.2f}",
                    f"{stats['maximo']:.2f}",
                ]
            )

        tabela = Table(dados_tabela, hAlign="LEFT")
        tabela.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0f172a")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTSIZE", (0, 0), (-1, -1), 9),
                    ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f1f5f9")]),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 6),
                ]
            )
        )
        elementos.append(tabela)
    else:
        elementos.append(
            Paragraph(
                "Nenhuma coluna numérica foi encontrada para calcular totais.",
                estilos["Normal"],
            )
        )

    doc.build(elementos)


def main() -> None:
    parser = argparse.ArgumentParser(description="Gera um relatório em PDF a partir de um CSV.")
    parser.add_argument("csv_entrada", help="Caminho do arquivo CSV de entrada.")
    parser.add_argument(
        "-o",
        "--saida",
        default=None,
        help="Caminho do PDF de saída (padrão: mesmo nome do CSV, com .pdf).",
    )
    args = parser.parse_args()

    origem = Path(args.csv_entrada).expanduser().resolve()
    saida = Path(args.saida).expanduser().resolve() if args.saida else origem.with_suffix(".pdf")

    try:
        print(f"Lendo '{origem.name}'...")
        cabecalhos, linhas = ler_csv(origem)

        print("Validando e calculando resumo...")
        resumo = calcular_resumo(cabecalhos, linhas)

        print(f"Gerando PDF em '{saida}'...")
        gerar_pdf(origem, resumo, saida)

    except (FileNotFoundError, ValueError, DadosInvalidosError) as e:
        print(f"Erro: {e}")
        sys.exit(1)
    except Exception as e:  # tratamento genérico para falhas inesperadas
        print(f"Erro inesperado ao gerar o relatório: {e}")
        sys.exit(1)

    print("Concluído com sucesso.")
    print(f"  Linhas processadas: {resumo['total_linhas']}")
    print(f"  Colunas numéricas encontradas: {len(resumo['colunas_numericas'])}")


if __name__ == "__main__":
    main()
