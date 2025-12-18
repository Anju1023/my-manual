# フォルダ・ファイル作成
import os


def create_file(file_name, write_text):
    with open(file_name, 'w', encoding='utf-8') as f:
        f.write(write_text)


folders = [
    '01_daily',
    '02_weekly',
    '03_monthly',
    '04_ad_hoc',
    '99_system_specs',
]

if __name__ == '__main__':
    for folder in folders:
        path_name = f'content/docs/{folder}/index.mdx'
        write_text = """---
title: タイトルを入れる
description: 説明を入れる
---
"""
        create_file(path_name, write_text)

    print('完了')
