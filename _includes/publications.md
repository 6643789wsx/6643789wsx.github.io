{% assign tl = site.data.i18n.en %}{% if page.lang == 'zh' %}{% assign tl = site.data.i18n.zh %}{% endif %}
<h2 id="publications" style="margin: 2px 0px -15px;">{{ tl.publications }}</h2>

<div class="publications">
<ul class="publication-list">

{% for link in site.data.publications.main %}

<li>
  <div class="publication-entry">
    <a class="publication-title" href="{{ link.pdf }}" target="_blank" rel="noopener">{{ link.title }}</a>
    <span class="publication-authors">{{ link.authors }}</span>
    <span class="publication-venue"><em>{{ link.conference }}</em>{% if link.ccf_rank %} <span class="ccf-rank">CCF {{ link.ccf_rank }}</span>{% endif %}</span>
    <span class="publication-links">
      {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank" rel="noopener">[PDF]</a>{% endif %}
      {% if link.code %}<a href="{{ link.code }}" target="_blank" rel="noopener">[Code]</a>{% endif %}
      {% if link.dataset %}<a href="{{ link.dataset }}" target="_blank" rel="noopener">[Dataset]</a>{% endif %}
      {% if link.page %}<a href="{{ link.page }}" target="_blank" rel="noopener">[Project]</a>{% endif %}
      {% if link.bibtex %}<a href="{{ link.bibtex }}" target="_blank" rel="noopener">[BibTeX]</a>{% endif %}
    </span>
  </div>
</li>

{% endfor %}

</ul>
</div>
