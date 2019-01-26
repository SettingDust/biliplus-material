{% extends "./include/content/content.tpl" %}
{% block content %}
    <div id="content-wrapper">
        <div class="column" id="feed">
            <header>
                <h3 class="title">
                    <a href="/feed">追番</a>
                </h3>
                <small id="feed-count">Loading...</small>
                <div class="flex-space"></div>
                <button class="top">回到顶部</button>
            </header>
            <div class="card-list"></div>
        </div>
        <div class="column" id="post">
            <header>
                <h3 class="title">
                    <a href="/post">投稿</a>
                </h3>
                <div class="flex-space"></div>
                <button class="top">回到顶部</button>
            </header>
            <div class="card-list"></div>
        </div>
        <div class="column" id="dynamic">
            <header>
                <h3 class="title">
                    <a href="/dynamic">动态</a>
                </h3>
                <div class="flex-space"></div>
                <button class="top">回到顶部</button>
            </header>
            <div class="card-list"></div>
        </div>
    </div>
{% endblock %}