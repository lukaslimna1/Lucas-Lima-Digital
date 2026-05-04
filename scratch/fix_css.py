import os

path = 'h:\\Sites\\Lucas-Lima-Digital\\src\\index.css'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Trunca explicitamente na linha 1338 (0-indexed 1337)
new_lines = lines[:1338]

with open(path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Truncated file at {len(new_lines)} lines.")
