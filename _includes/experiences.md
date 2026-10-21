{% assign tl = site.data.i18n.en %}{% if page.lang == 'zh' %}{% assign tl = site.data.i18n.zh %}{% endif %}
<h2 id="experiences">{{ tl.experiences }}</h2>

<div class="experience-entry">
  <div class="experience-role">{% if page.lang == 'zh' %}研究实习生 · 字节跳动（Trae）{% else %}Research Intern · ByteDance (Trae){% endif %}</div>
  <div class="experience-meta">{% if page.lang == 'zh' %}2025.09 – 2026.04 · 中国{% else %}Sep. 2025 – Apr. 2026 · China{% endif %}</div>
  <ul class="experience-points">
    {% if page.lang == 'zh' %}<li>参与 Doubao-Seed-Code 模型的训练数据合成与后训练工作。</li>{% else %}<li>Contributed to training data synthesis and post-training for the Doubao-Seed-Code model.</li>{% endif %}
  </ul>
</div>
