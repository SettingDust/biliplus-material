{% extends './include/content/content.tpl' %}
{% block content %}
    <div>
        <h2>{{ error.code }} - {{ error.message }}</h2>
    </div>
{% endblock %}