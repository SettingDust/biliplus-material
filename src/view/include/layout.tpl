<head>
    {% include "./head/head.tpl" %}
    {% block head %}{% endblock %}
    <title>
        {{ title }}{% block title %}{% endblock %}
    </title>
</head>
<body>
{% block body %}{% endblock %}
</body>
