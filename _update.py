# -*- coding: utf-8 -*-
"""Reorganiza o portfolio: troca fotos embutidas, 'i am', trilha social,
faixa editorial estilo poster e ingles tecnico nas habilidades."""
import base64, io, re, sys
from PIL import Image

PATH = "viviane-lima-portfolio.html"
html = open(PATH, encoding="utf-8").read()

def sub_once(old, new, label):
    global html
    n = html.count(old)
    if n != 1:
        sys.exit(f"FALHA [{label}]: padrao encontrado {n}x (esperado 1)")
    html = html.replace(old, new)
    print(f"ok: {label}")

def webp_b64(path, max_h):
    im = Image.open(path).convert("RGBA")
    if im.height > max_h:
        im = im.resize((round(im.width * max_h / im.height), max_h), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=85, method=6)
    return "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode()

# ---------- 1. tipografia do 'i am' (referencia Figma: branco, bold) ----------
sub_once(
    ".cover-title .hello{font-size:clamp(1.6rem,3.6vw,2.6rem);font-style:italic;color:#ffe3e3;font-weight:400}",
    ".cover-title .hello{font-size:clamp(2rem,4.6vw,3.4rem);font-weight:700;color:#fff;line-height:1.05;letter-spacing:-.01em}",
    "css .hello")

# ---------- 2. trilha lateral vertical (local + contatos), estilo Figma ----------
sub_once(
    ".cover-side{position:absolute;left:18px;top:50%;transform:translateY(-50%) rotate(180deg);\n"
    "  writing-mode:vertical-rl;font-size:.72rem;letter-spacing:.3em;text-transform:uppercase;color:#ffd9d9;z-index:4}",
    ".cover-rail{position:absolute;left:20px;top:50%;transform:translateY(-50%);z-index:6;\n"
    "  display:flex;flex-direction:column;align-items:center;gap:16px}\n"
    ".rail-loc{writing-mode:vertical-rl;transform:rotate(180deg);font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:#ffd9d9}\n"
    ".rail-line{width:1.5px;height:52px;background:#ffffff66}\n"
    ".rail-social{writing-mode:vertical-rl;transform:rotate(180deg);font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:#fff;font-weight:700;transition:.2s}\n"
    ".rail-social:hover{color:var(--ink)}",
    "css trilha lateral")

# ---------- 3. CSS da faixa editorial (referencia poster Spider-Man) ----------
sub_once(
    "/* ---------- sections (dark) ---------- */",
    "/* ---------- faixa editorial ---------- */\n"
    ".quote-band{position:relative;background:linear-gradient(120deg,var(--red-dark),var(--red) 60%,#d21f2c);padding:84px 0;overflow:hidden;border-bottom:1px solid var(--line)}\n"
    ".quote-band::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(#0000001f 1px,transparent 1.4px);background-size:18px 18px;pointer-events:none}\n"
    ".qb-side{position:absolute;right:22px;top:50%;transform:translateY(-50%);writing-mode:vertical-rl;font-size:.68rem;letter-spacing:.3em;text-transform:uppercase;color:#ffd0d0}\n"
    ".qb-quote{position:relative;font-size:clamp(1.9rem,5.4vw,4rem);font-weight:700;text-transform:uppercase;line-height:1.08;letter-spacing:.01em;color:#fff;max-width:22ch}\n"
    ".qb-quote em{font-style:normal;color:var(--ink)}\n"
    ".qb-credit{position:relative;margin-top:18px;font-size:.78rem;letter-spacing:.24em;text-transform:uppercase;color:#ffe3e3}\n"
    "\n"
    "/* ---------- sections (dark) ---------- */",
    "css faixa editorial")

# ---------- 4. media query: esconder trilha e rotulo vertical no mobile ----------
sub_once(
    ".cover-links,.cover-side{display:none}",
    ".cover-links,.cover-rail,.qb-side{display:none}",
    "media query mobile")

# ---------- 5. capa: 'eu sou' -> 'i am' + trilha de contatos ----------
sub_once(
    '<div class="hello">eu sou</div>',
    '<div class="hello">i am</div>',
    "texto i am")

sub_once(
    '    <div class="cover-side">Teresina — Piauí — Brasil</div>',
    '    <aside class="cover-rail">\n'
    '      <span class="rail-loc">Teresina — Piauí — Brasil</span>\n'
    '      <span class="rail-line"></span>\n'
    '      <a class="rail-social" href="https://www.linkedin.com/in/viviane-lima-49445a373/" target="_blank" rel="noopener">LinkedIn</a>\n'
    '      <a class="rail-social" href="mailto:kristhyneviviane@gmail.com">E-mail</a>\n'
    '    </aside>',
    "html trilha lateral")

# ---------- 6. faixa editorial entre projetos e habilidades ----------
sub_once(
    "  <!-- HABILIDADES -->",
    '  <!-- FAIXA EDITORIAL -->\n'
    '  <div class="quote-band">\n'
    '    <span class="qb-side">portfólio — viviane lima — 2026</span>\n'
    '    <div class="wrap">\n'
    '      <p class="qb-quote">"com grandes projetos<br><em>vêm grandes responsabilidades"</em></p>\n'
    '      <div class="qb-credit">adaptado de um clássico do homem-aranha — vale para código também</div>\n'
    '    </div>\n'
    '  </div>\n'
    '\n'
    "  <!-- HABILIDADES -->",
    "html faixa editorial")

# ---------- 7. ingles tecnico nas habilidades ----------
sub_once(
    "<li>Aprendizagem contínua, sem atalhos</li>",
    "<li>Aprendizagem contínua, sem atalhos</li>\n"
    '            <li><b>Inglês técnico</b> — leitura de documentação e referências</li>',
    "skill ingles tecnico")

# ---------- 8. fotos: capa (foto-1) e sobre (foto-2) ----------
cover = webp_b64("foto-1.png", 1400)
about = webp_b64("foto-2.png", 960)

new, n1 = re.subn(r'(<div class="cover-photo"><img src=")data:image/webp;base64,[^"]+',
                  lambda m: m.group(1) + cover, html)
if n1 != 1: sys.exit(f"FALHA [foto capa]: {n1} substituicoes")
html = new

new, n2 = re.subn(r'(<img src=")data:image/webp;base64,[^"]+(" alt="Viviane sorrindo)',
                  lambda m: m.group(1) + about + m.group(2), html)
if n2 != 1: sys.exit(f"FALHA [foto sobre]: {n2} substituicoes")
html = new
print("ok: foto capa (foto-1) e foto sobre (foto-2)")

open(PATH, "w", encoding="utf-8").write(html)
print("gravado:", PATH, len(html), "chars")
