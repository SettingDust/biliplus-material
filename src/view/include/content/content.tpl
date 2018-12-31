{% extends "../layout.tpl" %}
{% block body %}
    <header class="header">
        {% include "../header/header.tpl" %}
        {% block header %}{% endblock %}
    </header>
    <main id="main">
        {% block content %}{% endblock %}
    </main>
    {% include "./script.tpl" %}
    {% block script %}{% endblock %}
    <footer>
        {% block footer %}{% endblock %}
    </footer>
{% endblock %}
{% block head %}
    {% block style %}{% endblock %}
{% endblock %}