"""
Excel Automation
----------------
Automação em Python que lê uma planilha .xlsx, limpa os dados, organiza as
colunas e calcula totais automaticamente, gerando uma nova planilha.

Autor: Matheus Costa
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import pandas as pd


class PlanilhaInvalidaError(Exception):
    """Lançado quando a planilha está vazia ou não pode ser processada."""


def ler_planilha(caminho: Path) -> pd.DataFrame:
    if not caminho.exists():
        raise FileNotFoundError(f"Arquivo '{caminho}' não encontrado.")
    if caminho.suffix.lower() not in (".xlsx", ".xls"):
        raise ValueError("O arquivo precisa ter extensão .xlsx ou .xls.")

    try:
        df = pd.read_excel(caminho)
    except Exception as e:
        raise PlanilhaInvalidaError(f"Não foi possível ler a planilha: {e}") from e

    if df.empty:
        raise PlanilhaInvalidaError("A planilha não possui dados.")

    return df


def limpar_dados(df: pd.DataFrame) -> pd.DataFrame:
    """Remove linhas totalmente vazias e espaços extras em colunas de texto."""
    df = df.dropna(how="all")

    for coluna in df.select_dtypes(include=["object", "string"]).columns:
        df[coluna] = df[coluna].astype(str).str.strip()
        df[coluna] = df[coluna].replace({"nan": pd.NA})

    return df.reset_index(drop=True)


def organizar_colunas(df: pd.DataFrame) -> pd.DataFrame:
    """Ordena as colunas em ordem alfabética e padroniza os nomes (Title Case)."""
    df = df.rename(columns=lambda c: str(c).strip().title())
    df = df.reindex(sorted(df.columns), axis=1)
    return df


def calcular_totais(df: pd.DataFrame) -> pd.DataFrame:
    """Adiciona uma linha 'TOTAL' ao final, somando as colunas numéricas."""
    colunas_numericas = df.select_dtypes(include="number").columns

    if len(colunas_numericas) == 0:
        return df

    linha_total = {}
    for coluna in df.columns:
        if coluna in colunas_numericas:
            linha_total[coluna] = df[coluna].sum()
        else:
            linha_total[coluna] = "TOTAL" if coluna == df.columns[0] else ""

    df_total = pd.concat([df, pd.DataFrame([linha_total])], ignore_index=True)
    return df_total


def processar(caminho_entrada: Path, caminho_saida: Path) -> dict:
    df_original = ler_planilha(caminho_entrada)
    linhas_antes = len(df_original)

    df = limpar_dados(df_original)
    df = organizar_colunas(df)
    colunas_numericas = list(df.select_dtypes(include="number").columns)
    df_final = calcular_totais(df)

    df_final.to_excel(caminho_saida, index=False)

    return {
        "linhas_antes": linhas_antes,
        "linhas_depois": len(df),
        "colunas": list(df.columns),
        "colunas_numericas": colunas_numericas,
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Limpa, organiza e calcula totais em uma planilha .xlsx."
    )
    parser.add_argument("planilha_entrada", help="Caminho da planilha .xlsx de entrada.")
    parser.add_argument(
        "-o",
        "--saida",
        default=None,
        help="Caminho da planilha de saída (padrão: <nome>_organizado.xlsx).",
    )
    args = parser.parse_args()

    entrada = Path(args.planilha_entrada).expanduser().resolve()
    saida = (
        Path(args.saida).expanduser().resolve()
        if args.saida
        else entrada.with_name(f"{entrada.stem}_organizado.xlsx")
    )

    try:
        print(f"Lendo '{entrada.name}'...")
        resultado = processar(entrada, saida)
    except (FileNotFoundError, ValueError, PlanilhaInvalidaError) as e:
        print(f"Erro: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Erro inesperado ao processar a planilha: {e}")
        sys.exit(1)

    print(f"Linhas antes da limpeza: {resultado['linhas_antes']}")
    print(f"Linhas depois da limpeza: {resultado['linhas_depois']}")
    print(f"Colunas organizadas: {', '.join(resultado['colunas'])}")
    print(f"Colunas somadas (linha TOTAL): {', '.join(resultado['colunas_numericas']) or 'nenhuma'}")
    print(f"Planilha gerada em: {saida}")


if __name__ == "__main__":
    main()
