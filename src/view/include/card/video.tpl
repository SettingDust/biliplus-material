<div class="card">
    <a href="/{{ goto }}{{ param }}" target="_blank">
        <div class="cover">
            <img src="{{ cover }}" alt="{{ title }}">
        </div>
    </a>
    <div class="content">
        <a href="/{{ goto }}{{ param }}" class="title" target="_blank"><h4>{{ title }}</h4></a>
        <p class="desc">
            <small>{{ source.title }}</small>
            <small class="date">投稿于{{ create }}</small>
        </p>
    </div>
</div>