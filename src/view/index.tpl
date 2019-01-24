{% extends "./include/content/content.tpl" %}
{% block content %}
    <div id="content-wrapper">
        <div class="column" id="feed">
            <header>
                <h3 class="title">
                    <a href="/feed">追番</a>
                </h3>
                <a href="/feed" class="more">More</a>
            </header>
            <div class="card-list"></div>
        </div>
        <div class="column" id="video">
            <header>
                <h3 class="title">
                    <a href="/post">投稿</a>
                </h3>
                <a href="/post" class="more">More</a>
            </header>
            <div class="card-list"></div>
        </div>
        <div class="column" id="dynamic">
            <header>
                <h3 class="title">
                    <a href="/dynamic">动态</a>
                </h3>
                <a href="/dynamic" class="more">More</a>
            </header>
            <div class="card-list"></div>
        </div>
    </div>
{% endblock %}